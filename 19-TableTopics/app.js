const Palette = {
    green: "#81c784",
    yellow: "#fff176",
    red: "#e57373",
    grey: "#bdbdbd  "
}

let time = 0;
let countdownTime = 6;



function getAllQuestions() {
    let itemsInStorage = checkQuestionStorage()

    if (itemsInStorage === true) {
        console.log(questions)
        questions = getCombinedQuestionsArray()

    }
    console.log(questions)
    return questions;
}

function getAllWords(){

    let itemsInStorage = checkWordStorage()
    
    if (itemsInStorage === true){
        wordOfDay = getCombinedWordsArray()

    }

    return wordOfDay;

}

function getUISelectors(){

    timer = document.getElementById('timer');
    questionDisplay = document.querySelector('#main-display');
    background = document.querySelector('.background')
    countDownTimerDisplay = document.querySelector('#countdown')
    wordOTD = document.querySelector('#WOD')


    btnPause = document.querySelector('#pause')
    btnStop = document.querySelector('#stop')
    btnResume =document.querySelector('#resume')
    btnPlay = document.querySelector('#play')
    btnReset =  document.querySelector('#reset')
    btnSettings = document.querySelector('#settings')

    btnStopGameDuringCountdown = document.querySelector('#stopGameDuringCD')

    settingsCard =  document.querySelector('.settings-card');
    displayCard = document.querySelector('.display-card');

    progressBar = document.querySelector('#progressBar')

    

}

function getEventListeners(){
  
    btnPause.addEventListener('click', pauseTimer);

    btnResume.addEventListener('click', resumeGame);

    btnPlay.addEventListener('click', playGame);

    btnReset.addEventListener('click',resetGame);

    btnStop.addEventListener('click',stopGame);

    btnSettings.addEventListener('click',SettingsToggle);

    btnStopGameDuringCountdown.addEventListener('click',stopGameDuringCountdown)
    
    document.querySelector("#edit-question-list")
        .addEventListener('click',itemEditClick)

        document.addEventListener('keypress',(e)=>{
            if (e.keyCode === 13){
                e.preventDefault();
                return false;
              }
        })

    // document.querySelector('#settings-done-btn')
    //     .addEventListener('click',closeSettings)


}

function init(){
  
    getUISelectors();
    getEventListeners();
  
    progressBar.style.display = "none"
    btnStopGameDuringCountdown.style.display = "none"
    displayCard.style.display = "none"
    countDownTimerDisplay.style.display = "none"
    settingsCard.style.display = "none"

    showGameButtons('hide');
  
    M.AutoInit();

}



init()