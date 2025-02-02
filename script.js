let countdown;
const alarmSound = new Audio("https://www.soundjay.com/buttons/sounds/beep-13.mp3"); // Replace with an actual sound URL

function startTimer(minutes) {
    clearInterval(countdown); // Reset any existing timer
    const now = Date.now();
    const then = now + minutes * 60 * 1000;

    displayTimeLeft(minutes * 60); // Display initial time

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            displayTimeLeft(0);
            alarmSound.play(); // Play alarm sound
            
            // Display the alert message along with an audio cue
            document.getElementById("timer").textContent = "⏰ Your eggs are ready! 🔔";
            return;
        }
        displayTimeLeft(secondsLeft); // Update displayed time
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById("timer").textContent = display;
}

function clearTimer() {
    clearInterval(countdown);
    document.getElementById("timer").textContent = '00:00'; // Reset timer display
    alarmSound.pause(); // Stop the alarm if it's playing
    alarmSound.currentTime = 0; // Reset the alarm to the beginning
}
