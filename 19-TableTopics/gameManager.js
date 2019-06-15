
 
function startCountdownTimer() {

    word = getNewWordofTheDay()
    wordOTD.innerHTML = `<strong>${word.word}</strong>: ${word.definition}`;

    countDownTimerDisplay.style.display = "block"
    countDownTimer = setInterval(getCountdownTime, 1000)
}

function getCountdownTime() {

    if (countdownTime != 0) {
        countdownTime--;
        countDownTimerDisplay.innerHTML = countdownTime;
    } else {
        countDownTimerDisplay.style.display = "none";
        clearInterval(countDownTimer);
        startTimer();
        enableMenuButtons('disabled') ;
        showGameButtons('show');
        
    }
}

function startTimer() {
    btnStopGameDuringCountdown.style.display = "none"
    timer.innerHTML = "<span id = timerGo>Go!</span>"
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
 
 function getNewQuestion() {
    length = questions.length;

    Selection = Math.floor(Math.random() * length)

    newQuestion = questions[Selection].question

    return newQuestion;
}


function getNewWordofTheDay() {
    length = wordOfDay.length;
    Selection = Math.floor(Math.random() * length)

    newWord = wordOfDay[Selection]

    return newWord;
}

function playGame() {
    newQuestion = getNewQuestion();
    questionDisplay.innerHTML = newQuestion;
    enableMenuButtons('disabled')
    btnStopGameDuringCountdown.style.display = "block"


    startCountdownTimer();

    timer.innerHTML = "Get Ready!";
    timer.style.display = "block"
}


function resetGame(){
    clearInterval(counter)
    resetTimers();
    showToastAlert('Game Reset','success')

    timer.innerHTML = time;
}

function pauseTimer() {
    clearInterval(counter)
    showToastAlert('Game Paused','success')
}

function resumeGame(){
    startTimer();
    showToastAlert('Game Resumed','success')
}

function stopGame(){
   gameOver();
   
}

function stopGameDuringCountdown(){
   
    clearInterval(countDownTimer)
    resetTimers()
    showToastAlert('Countdown halted','success')
    countDownTimerDisplay.style.display = "none"
    timer.style.display = "none"
    wordOTD.innerHTML = '';
    btnStopGameDuringCountdown.classList.add('disabled')
    progressBar.style.display = "block"

    setTimeout(()=>{
        enableMenuButtons('enabled')
        btnStopGameDuringCountdown.classList.remove('disabled')
        btnStopGameDuringCountdown.style.display = "none"
        progressBar.style.display = "none"

    },2000)

    showHomeState()

}



function resetTimers() {
    time = 0;
    countdownTime = 5;
}

function greenLight() {
changeCardColor(Palette.green);
showToastAlert('Good Job! You Qualified!', 'success');
}

function yellowLight() {
    changeCardColor(Palette.yellow);

}

function redLight() {
    changeCardColor(Palette.red);
    showToastAlert('30 seconds Remaiing; Wrap it Up!', 'alert');
}

function gameOver() {

    changeCardColor(Palette.grey);
    clearInterval(counter);
    showToastAlert('Game Over', 'finish');
    showGameButtons('hide');


    if (time < 60 || time > 120) {
        showToastAlert(`Sorry, you have not qualified. Your time was ${time} seconds`, 'alert')
    } else if (time >= 60 && time <= 120) {
        showToastAlert(`Great job, you qualified. Your time was ${time} seconds`, 'success')
    
    }

    progressBar.style.display = "block"

    resetTimers();

    setTimeout(
        () => {
        changeCardColor('#fff')
        changeDisplayState("Game over, Play Again?")
        timer.style.display = "none"
        wordOTD.innerHTML = '';
        progressBar.style.display = "none"

        enableMenuButtons('enabled');
    }, 3000)


    setTimeout(()=>{
        showHomeState()
    },7000)
   
    
    }