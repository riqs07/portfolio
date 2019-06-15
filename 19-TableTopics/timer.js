
function startCountdownTimer() {

    word = getNewWordofTheDay()
    wordOTD.innerHTML = `<strong>${word.word}</strong>: ${word.definition}`;

    countDownTimerDisplay.style.display = "block"
    xx = setInterval(getCountdownTime, 1000)
}

function getCountdownTime() {

    if (countdownTime != 0) {
        countdownTime--;
        countDownTimerDisplay.innerHTML = countdownTime;
    } else {
        countDownTimerDisplay.style.display = "none";
        clearInterval(xx);
        startTimer();
        enableMenuButtons('disabled') ;
        showGameButtons('show');
        
    }
}

function startTimer() {
    timer.innerHTML = "Go!"
    counter = setInterval(timeTracker, 1000)

    if (background.style.backgroundColor != "#fff") {
        changeCardColor('#fff')

    }
}

function timeTracker() {

    time++;

    timer.innerHTML = time;


    switch (true) {
        case (time === 60):
            greenLight();
            break;

        case (time === 75):
            yellowLight()
            break;


        case (time === 90):
            redLight();
            break;

        case (time === 120):
            gameOver();
            break;
    }

}