document.addEventListener("DOMContentLoaded", function () {
    function getCurrentDay() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        return daysOfWeek[currentDate.getUTCDay()];
    }

    function updateUTCTime() {
        const now = new Date();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = `${hours}:${minutes}:${seconds} UTC`;
    }

    document.querySelector('[data-testid="currentDay"]').textContent = getCurrentDay();

    updateUTCTime();
    setInterval(updateUTCTime, 1000);
});
