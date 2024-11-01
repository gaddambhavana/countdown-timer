// Variables to keep track of the timer interval
let timerInterval;

document.getElementById('start-btn').addEventListener('click', function() {
    // Clear any existing timer interval
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Get the target date from the input
    const targetDate = new Date(document.getElementById('date').value);
    const now = new Date();

    // Validate the target date
    if (targetDate <= now) {
        document.getElementById('message').textContent = 'Please select a future date.';
        document.getElementById('timer-display').innerHTML = `
            <div class="time-block"><span>0</span><small>Days</small></div>
            <div class="time-block"><span>0</span><small>Hours</small></div>
            <div class="time-block"><span>0</span><small>Minutes</small></div>
            <div class="time-block"><span>0</span><small>Seconds</small></div>
        `;
        return;
    }

    // Clear the message
    document.getElementById('message').textContent = '';

    // Function to update the countdown
    const updateTimer = () => {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            document.getElementById('timer-display').innerHTML = `
                <div class="time-block"><span>0</span><small>Days</small></div>
                <div class="time-block"><span>0</span><small>Hours</small></div>
                <div class="time-block"><span>0</span><small>Minutes</small></div>
                <div class="time-block"><span>0</span><small>Seconds</small></div>
            `;
            document.getElementById('message').textContent = 'Time is up!';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = `<span>${days}</span><small>Days</small>`;
        document.getElementById('hours').innerHTML = `<span>${hours}</span><small>Hours</small>`;
        document.getElementById('minutes').innerHTML = `<span>${minutes}</span><small>Minutes</small>`;
        document.getElementById('seconds').innerHTML = `<span>${seconds}</span><small>Seconds</small>`;
    };

    // Initialize the timer update
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
});
