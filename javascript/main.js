// Helpers
const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const shuffleAndRemoveDuplicate = (duplicateKey, keyArray) => {
    const arrayWithoutDuplicate = [...new Set(keyArray)];
    const shuffledArrayWithoutDuplicates = shuffle(arrayWithoutDuplicate);
    return [duplicateKey].concat(shuffledArrayWithoutDuplicates);
};

const getUrlParam = name => {
    const results = new RegExp(`[/?&]${name}=([^&#]*)`).exec(window.location.href);
    // console.log("name: "name, "results: "results);
    return results ? results[1] : 0;
};

// Google Sheet data fetching
const googleSheetUrl =
    "https://spreadsheets.google.com/feeds/list/1d2bw9Nbhw6y4LhHVV8H3JnbFaFbT8pG8ZFX2zQyrFjI/1/public/values?alt=json";

let beatArray = [],
    speechArray = [];

fetch(googleSheetUrl)
    .then(response => response.json())
    .then(data => {
        const sheetData = data.feed.entry;
        sheetData.forEach(sheetRow => {
            const beatId = sheetRow.gsx$beatid.$t;
            const beatTitle = sheetRow.gsx$beattitle.$t;
            beatArray.push({ id: beatId, title: beatTitle });

            const speechId = sheetRow.gsx$speechid.$t;
            const speechTitle = sheetRow.gsx$speechtitle.$t;
            speechArray.push({ id: speechId, title: speechTitle });
        });

        beatArray = beatArray.filter(video => video.id !== "");
        speechArray = speechArray.filter(video => video.id !== "");
    })
    .then(() => startVideos())
    .catch(error => console.log(error));

// Global vars for YT
let isPlaying = false;
let beatPlayer, speechPlayer;
let beatOrder = [],
    speechOrder = [];
let currentBeatId, currentSpeechId;
let beatKey, speechKey;
let shareLink = window.location.origin;

// Create playlists
const startVideos = () => {
    const beatIDArray = beatArray.map(beat => beat.id);
    const speechIDArray = speechArray.map(speech => speech.id);

    // If url params and associated videos exist, then make those videos first and remove duplicate
    beatOrder = beatKey
        ? shuffleAndRemoveDuplicate(beatKey, beatIDArray)
        : shuffle(beatIDArray);

    speechOrder = speechKey
        ? shuffleAndRemoveDuplicate(speechKey, speechIDArray)
        : shuffle(speechIDArray);

    // Initialize YT players
    beatPlayer = new YT.Player("beatvideo", {
        width: 30,
        height: 20,
        playerVars: {
            color: "white",
            playlist: beatOrder.join(","),
            origin: window.location.origin
        },
        events: {
            onReady: e => e.target.setPlaybackQuality("small"),
            onStateChange: onBeatStateChange
        }
    });

    speechPlayer = new YT.Player("speechvideo", {
        width: 30,
        height: 20,
        playerVars: {
            color: "white",
            playlist: speechOrder.join(","),
            origin: window.location.origin
        },
        events: {
            onReady: e => e.target.setPlaybackQuality("small"),
            onStateChange: onSpeechStateChange
        }
    });

    history.replaceState({}, "Studiowave", "/");
};

document.addEventListener("DOMContentLoaded", () => {
    speechKey = getUrlParam("speech");
    beatKey = getUrlParam("beat");
});

// titles and links
const beatTitle = document.querySelector("#BeatTitle");
const onBeatStateChange = () => {
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality("small");
    }
    const index = beatPlayer.getPlaylistIndex();
    currentBeatId = beatOrder[index];
    const currentBeatTitle = beatArray.find(beat => beat.id === currentBeatId).title;
    // console.log("Beat playlist item: ", index, currentBeatTitle, currentBeatId);

    if (currentBeatTitle) {
        beatTitle.textContent = currentBeatTitle;
        beatTitle.href = "https://www.youtube.com/watch?v=" + currentBeatId;
    }
};

const speechTitle = document.querySelector("#SpeechTitle");
const onSpeechStateChange = () => {
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality("small");
    }
    const index = speechPlayer.getPlaylistIndex();
    currentSpeechId = speechOrder[index];
    const currentSpeechTitle = speechArray.find(
        speech => speech.id === currentSpeechId
    ).title;
    // console.log("Speech playlist item: ", index, currentSpeechTitle, currentSpeechId);

    if (currentSpeechTitle) {
        speechTitle.textContent = currentSpeechTitle;
        speechTitle.href = "https://www.youtube.com/watch?v=" + currentSpeechId;
    }
};

// Share Clipboard
const shareButton = document.querySelector(".sharebutton");
const tooltip = document.querySelector("#tooltip");

shareButton.addEventListener("click", () => {
    if (currentBeatId && currentSpeechId) {
        shareLink = `${window.location.origin}?beat=${currentBeatId}&speech=${currentSpeechId}`;
    }

    navigator.clipboard
        .writeText(shareLink)
        .then(() => {
            console.log("Copied to clipboard");
        })
        .catch(err => {
            console.error("Could not copy text: ", err);
        });

    tooltip.classList.add("override");
    setTimeout(() => {
        tooltip.classList.remove("override");
    }, 1000);
});

// YouTube Volume
const beatSlider = document.querySelector("#beatslider");
const speechSlider = document.querySelector("#speechslider");

beatSlider.onchange = () => beatPlayer.setVolume(beatSlider.value);
speechSlider.onchange = () => speechPlayer.setVolume(speechSlider.value);

// Play & Pause
const playPauseButton = document.querySelector("#playpausebutton img");
playPauseButton.addEventListener("click", () => {
    if (!beatPlayer) return;
    const beatPlayerState = beatPlayer.getPlayerState();
    // const speechPlayerState = speechPlayer.getPlayerState();
    const button = document.getElementById("buttonicon");

    isPlaying = !isPlaying;

    if (isPlaying == true) {
        button.src = "images/pause.png";
    } else if (isPlaying == false) {
        button.src = "images/play.png";
    }

    if (beatPlayerState === 1) {
        beatPlayer.pauseVideo();
        speechPlayer.pauseVideo();
    } else {
        beatPlayer.playVideo();
        speechPlayer.playVideo();
    }
});

// Next video
const beatResetImage = document.querySelector("#beatreset img");
beatResetImage.addEventListener("click", () => {
    if (!beatPlayer) return;

    if (beatOrder[beatOrder.length - 1] === currentBeatId) {
        beatPlayer.playVideoAt(0);
    } else {
        beatPlayer.nextVideo();
    }
    if (!isPlaying) {
        beatPlayer.pauseVideo();
        speechPlayer.pauseVideo();
    }
});

const speechResetImage = document.querySelector("#speechreset img");
speechResetImage.addEventListener("click", () => {
    if (!speechPlayer) return;

    if (speechOrder[speechOrder.length - 1] === currentSpeechId) {
        speechPlayer.playVideoAt(0);
    } else {
        speechPlayer.nextVideo();
    }
    if (!isPlaying) {
        speechPlayer.pauseVideo();
        beatPlayer.pauseVideo();
    }
});

// if agent detected mobile: hideClass small_screen and show mobile_device
const mobileMessage = document.querySelectorAll(".mobile_device");
const narrowMessage = document.querySelectorAll(".small_screen");
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    mobileMessage.forEach(p => (p.style.display = "block"));
    narrowMessage.forEach(p => (p.style.display = "none"));
}

const youtubeVideoExists = id =>
    fetch(`https://img.youtube.com/vi/${id}/mqdefault.jpg`, { mode: "no-cors" });

const checkBeatVideos = () => beatOrder.forEach(ID => youtubeVideoExists(ID));
const checkSpeechVideos = () => speechOrder.forEach(ID => youtubeVideoExists(ID));
