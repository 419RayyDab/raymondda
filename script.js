function updateCountdown() {
    const birthday = new Date('2023-10-13');
    const currentDate = new Date();
    const timeRemaining = birthday - currentDate;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('Bday').innerHTML = `${days} `;
        document.getElementById('Bhour').innerHTML = ` ${hours}`;
        document.getElementById('Bminute').innerHTML = `${minutes}`;
        document.getElementById('Bseconds').innerHTML = ` ${seconds}`;

    } else {
        document.getElementById('countdown').innerHTML = "Happy Birthday!";
        clearInterval(timerInterval); // Stop the countdown interval
    }
}

updateCountdown(); // Initial call to update countdown
const timerInterval = setInterval(updateCountdown, 1000); // Update countdown every second

// next updates for vountinh 
