// Variables for Stopwatch
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

// Start/Pause Button
const startStopBtn = document.getElementById('startStopBtn');
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        startStopBtn.textContent = 'Pause';
    } else {
        pauseTimer();
        startStopBtn.textContent = 'Start';
    }
});

// Reset Button
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetTimer);

// Lap Button
const lapBtn = document.getElementById('lapBtn');
lapBtn.addEventListener('click', recordLap);

// Timer Function
function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        displayTime();
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    pauseTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    startStopBtn.textContent = 'Start';
    clearLaps();
}

function displayTime() {
    const timeDisplay = document.getElementById('time');
    let formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
    timeDisplay.textContent = formattedTime;
}

function recordLap() {
    if (!isRunning) return;

    const lapsList = document.getElementById('lapsList');
    let lapTime = document.createElement('li');
    lapTime.textContent = document.getElementById('time').textContent;
    lapsList.appendChild(lapTime);
}

function clearLaps() {
    const lapsList = document.getElementById('lapsList');
    lapsList.innerHTML = '';
}

// Initial Time Display
displayTime();
