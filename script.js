document.addEventListener("DOMContentLoaded", function () {
    function getCurrentDay() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        return daysOfWeek[currentDate.getUTCDay()];
    }

    function updateUTCTime() {
        const currentUTCTimeInMilliseconds = Date.now();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = ` ${currentUTCTimeInMilliseconds} `;
    }
    
    // Update the UTC time initially
    updateUTCTime();

    // Update the UTC time every second (1000 milliseconds)
    setInterval(updateUTCTime, 1000);

    document.querySelector('[data-testid="currentDay"]').textContent = ` ${getCurrentDay()}`;
});
