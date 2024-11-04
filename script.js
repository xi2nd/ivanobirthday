// Load wishes from localStorage
let wishesList = JSON.parse(localStorage.getItem('wishes')) || []; 

// Splash screen function
function openMainContent() {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("background-music").play();
}

// Check Trivia answer
function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert("Correct! 🎉 You're a genius!");
    } else {
        alert("Oops! Try again! 😏");
    }
}

// Function to handle sending wishes
function sendWish() {
    const wishInput = document.getElementById("wishInput").value;
    if (wishInput.trim()) {
        wishesList.push(wishInput);
        localStorage.setItem('wishes', JSON.stringify(wishesList));
        displayWishes();
        document.getElementById("wishInput").value = '';
    }
}

// Display wishes
function displayWishes() {
    const wishesDisplay = document.getElementById("wishesDisplay");
    wishesDisplay.innerHTML = wishesList.map(wish => `<p>${wish}</p>`).join('');
}

// Call displayWishes on load
window.onload = () => displayWishes();

// Show Highlights
function showHighlights1() {
    alert("On Ivano’s 21st birthday, he celebrated with his loving parents and best friends. It was a fun party, but he ended up drinking too much and completely blacked out! He forgot everything that happened. Thankfully, his friends carried him home, and they always laugh about that crazy night!🍻😂");
}

function showHighlights2() {
    alert("Ivano is a caring friend who always looks out for his friends. He can be moody sometimes, which makes it hard for some people to understand him. But for those who know him well, he’s really kind and loyal. He can get emotional and has a quick temper, but he truly values and cares for his friends ❤️🤗");
}

function showHighlights3() {
    alert("Ivano has a huge passion for cars! He loves going to the workshop, spending hours there to make sure his car is well taken care of. Whenever he’s home for the holidays, you can find him at the garage, checking out spare parts and getting everything just right!🚗✨");
}

// Set the date we're counting down to (tanggal lahir Ivano)
var birthDate = new Date("November 18, 2002 00:00:00").getTime();
var countDownDate = new Date("November 18, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, display the age message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.display = "none"; // Sembunyikan countdown
        document.getElementById("age-message").style.display = "block"; // Tampilkan pesan usia
        
        // Menghitung umur Ivano
        var ageInMilliseconds = now - birthDate;
        var ageInSeconds = Math.floor(ageInMilliseconds / 1000);
        var ageInMinutes = Math.floor(ageInSeconds / 60);
        var ageInHours = Math.floor(ageInMinutes / 60);
        var ageInDays = Math.floor(ageInHours / 24);
        var ageInYears = Math.floor(ageInDays / 365); // Ini bisa disesuaikan dengan tahun kabisat

        document.getElementById("time-left").innerHTML = "Ivano is officially " + ageInYears + " years young, " + 
        (ageInDays % 365) + " days, " + 
        (ageInHours % 24) + " hours, " + 
        (ageInMinutes % 60) + " minutes, and " + 
        (ageInSeconds % 60) + " seconds.";
    

    }
}, 1000);

