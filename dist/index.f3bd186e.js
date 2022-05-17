var timer = document.querySelector('.timer');
var music = document.querySelector('.music');
function showTimer() {
    timer.style.display = 'block';
    music.style.display = 'none';
}
function hideTimer() {
    timer.style.display = 'none';
}
function showMusicPlayer() {
    music.style.display = 'block';
    timer.style.display = 'none';
}
function hideMusicPlayer() {
    music.style.display = 'none';
}
// TIMER SCRIPT HERE
let timeInputSector = document.querySelector('.timeInput');
let cycles = document.getElementById('pomodoro');
let resetTimerTbn = document.getElementById('resetTimer');
const startBtn = document.getElementById('startTimer');
const resetBtn = document.getElementById('resetTimer');
const countDisplay = document.getElementById('countDisplay');
let setTimeForm = document.getElementById('setTime');
let minInput = document.getElementById('mins');
let breakMinInput = document.getElementById('breakTime');
// let timer;
if (startBtn) startBtn.addEventListener('click', function(e) {
    e.preventDefault();
    inputChecker();
});
if (resetBtn) resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    countDisplay.style.display = 'none';
    timeInputSector.style.visibility = 'visible';
// let newInput = document.createElement('input');
// newInput.setAttribute('type', 'number');
// newInput.setAttribute('placeholder', '25');
// let unit = document.createElement('div');
// unit.setAttribute('class', 'minTxt');
// unit.textContent = 'mins';
// timeInputSector.appendChild(newInput);
// timeInputSector.appendChild(unit);
});
function myDefaultTimer() {
    // default time;
    const defaultTime = 25;
    let totalTimeConst = defaultTime * 60;
    let defaultInTotalSecs = totalTimeConst;
    setInterval(runDefaultTimer, 1000);
    let valid = true;
    let breakValid = true;
    let count = 0;
    function runDefaultTimer() {
        if (defaultInTotalSecs >= 0) valid = true;
        else valid = false;
        if (valid) {
            const defaultM = Math.floor(defaultInTotalSecs / 60);
            let defaultS = defaultInTotalSecs % 60;
            defaultS = defaultS < 10 ? '0' + defaultS : defaultS;
            countDisplay.innerHTML = `${defaultM}:${defaultS}`;
            defaultInTotalSecs--;
        } else {
            if (breakValid == true) {
                defaultBreakTimer();
                breakValid = false;
                count++;
            } else if (count < 3) breakValid = true;
            if (count < 3) defaultInTotalSecs = totalTimeConst;
        }
    }
}
// default break time;
function defaultBreakTimer() {
    // default break time;
    const minValDefault = 5;
    let totalBreakDefault = minValDefault * 60;
    setInterval(runDefaultBreak, 1000);
    let valid = true;
    function runDefaultBreak() {
        if (totalBreakDefault >= 0) valid = true;
        else valid = false;
        if (valid) {
            const minutes = Math.floor(totalBreakDefault / 60);
            let seconds = totalBreakDefault % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDisplay.innerHTML = `${minutes}:${seconds}`;
            countDisplay.style.color = '##6E703D';
            totalBreakDefault--;
        }
    }
}
// custome pomodoro timer;
function customTimer() {
    const minVal = minInput.value;
    let totalTimeConst = minVal * 60;
    let totalTime = totalTimeConst;
    setInterval(executeTimer, 1000);
    let valid = true;
    let breakValid = true;
    let count = 0;
    let cyclesVal = 0;
    if (cycles.value == '') cyclesVal = 3;
    else cyclesVal = cycles.value;
    function executeTimer() {
        if (totalTime >= 0) valid = true;
        else valid = false;
        if (valid) {
            const minutes = Math.floor(totalTime / 60);
            let seconds = totalTime % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDisplay.innerHTML = `${minutes}:${seconds}`;
            countDisplay.style.color = '##6E703D';
            totalTime--;
        } else {
            if (breakValid == true) {
                breakTimer();
                breakValid = false;
                count++;
            } else if (count < cyclesVal) breakValid = true;
            if (count < cyclesVal) totalTime = totalTimeConst;
        }
    }
}
// custome break timer;
function breakTimer() {
    const minVal = breakMinInput.value;
    let totalBreak = minVal * 60;
    if (minVal == '') totalBreak = 300;
    setInterval(executeBreak, 1000);
    let valid = true;
    function executeBreak() {
        if (totalBreak >= 0) valid = true;
        else valid = false;
        if (valid) {
            const minutes = Math.floor(totalBreak / 60);
            let seconds = totalBreak % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDisplay.innerHTML = `${minutes}:${seconds}`;
            totalBreak--;
        }
    }
}
function inputChecker() {
    if (minInput.value == '') {
        myDefaultTimer();
        timeInputSector.style.visibility = 'hidden';
        timeInputSector.style.display = 'none';
    } else {
        customTimer();
        timeInputSector.style.visibility = 'hidden';
        timeInputSector.style.display = 'none';
    }
}
// MUSIC PLAYER SCRIPT HERE
// let data = null;
// const request = new XMLHttpRequest();
// request.withCredentials = true;
// request.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });
// // request.open("GET", "https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP");
// request.open("GET", "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv");
// request.setRequestHeader("X-RapidAPI-Host", "spotify23.p.rapidapi.com");
// request.setRequestHeader("X-RapidAPI-Key", "a35119e0demsh8943d3d49b7d436p1c5803jsn5cccaa13896c");
// request.onload = function () {
//     data = JSON.parse(this.response);
//     console.log(data);
// }
// request.send();
function playRandomTrack() {}
function playPrevTrack() {}
function pauseThisTrack() {}
function playNextTrack() {}

//# sourceMappingURL=index.f3bd186e.js.map
