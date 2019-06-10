questions = [
    {
        id: "1",
        question: "Which is worse, failing or never trying?",
        diffuculty: "easy"
    },{
        id: "2",
        question: "What is important enough to go to war over?",
        diffuculty: "easy",
    },{
        id: "3",
        question: "What did you learn recently that changed the way you live?",
        diffuculty: "med",
    },{
        id: "4",
        question: "What is the most desirable trait another person can possess?",
        diffuculty: "med",
    },{
        id: "5",
        question: "Where do you find inspiration?",
        diffuculty: "hard",
    },{
        id: "6",
        question: "What would your ‘priceless’ MasterCard-style commercial be?",
        diffuculty: "hard",
    },{
        id: "7",
        question: "Why do we idolize sports players?",
        diffuculty: "hard",
    },{
        id: "8",
        question: "Why do we idolize sports players?",
        diffuculty: "hard",
    },{
        id: "9",
        question: "What’s the biggest lie you once believed was true?",
        diffuculty: "hard",
    },{
        id: "10",
        question: "What was your last major accomplishment?",
        diffuculty: "hard",
    },{
        id: "11",
        question: "What is the one primary quality you look for in a significant other?",
        diffuculty: "hard",
    },{
        id: "12",
        question: "How have you sabotaged yourself in the past five years?",
        diffuculty: "hard",
    },]

wordOfDay =[
    {
    id: "1",
    word: "Euphoria",
    definition: "A feeling of great happiness",
    partOfSpeech:"Noun"
},{
    id: "2",
    word: "Habituate",
    definition: "Make psychologically or physically used",
    partOfSpeech:"Verb"
},{
    id: "3",
    word: "Nexus",
    definition: "The means of connection between things linked in series",
    partOfSpeech:"Noun"
},{
    id: "4",
    word: "Consort",
    definition: "Keep company with",
    partOfSpeech:"verb"
},{
    id: "5",
    word: "Adroit",
    definition: "Clever or skillful in using the hands or mind",
    partOfSpeech:"Adjective"
},{
    id: "6",
    word: "Tenacious",
    definition: "Tending to keep a firm hold of something; clinging or adhering closely.",
    partOfSpeech:"adj"
},{
    id: "7",
    word: "Refractory",
    definition: "Resisting control or authority: stubborn, unmanageable",
    partOfSpeech:"verb"
}
]


const api = {
    apiBaseURL:"https://od-api.oxforddictionaries.com/api/v1",
    myAppID: "95e5459f",
    myAppKeys:"d06fd8ce0839dc6c98e2179956b54584"

}

const Palette = {
    green: "#81c784",
    yellow: "#fff176",
    red: "#e57373",
    pink: "#f48fb1"
}

let time = 0;
let countdownTime = 6;




function getUISelectors(){

    timer = document.getElementById('timer');
    questionDisplay = document.getElementById('question');
    background = document.querySelector('.background')
    countDownTimerDisplay = document.querySelector('#countdown')
    wordOTD = document.querySelector('#WOD')


    btnPause = document.querySelector('#pause')
    btnStop = document.querySelector('#stop')
    btnRecord = document.querySelector('#record')
    btnResume =document.querySelector('#resume')
    btnPlay = document.querySelector('#play')
    btnReset =  document.querySelector('#reset')
    btnSettings = document.querySelector('#settings')

}

function getEventListeners(){
  
    btnPause.addEventListener('click', pauseTimer);

    btnResume.addEventListener('click', resumeGame);

    btnPlay.addEventListener('click', playGame);

    btnReset.addEventListener('click',resetGame);

    btnStop.addEventListener('click',stopGame);

    btnSettings.addEventListener('click',openSettings);

    document.querySelector('#settings-done-btn')
        .addEventListener('click',closeSettings)


}

function init(){
  
    getUISelectors();
    getEventListeners();
  

    countDownTimerDisplay.style.display = "none"
    document.querySelector('.settings-card').style.display = "none"

    showGameButtons('hide');

    M.AutoInit();

}



init()



function getNewQuestion() {
    length = questions.length;

    Selection = Math.floor(Math.random() * length) 

    newQuestion = questions[Selection].question

    console.log(Selection)
    return newQuestion;
}


function getNewWordofTheDay(){
    length = wordOfDay.length;
    Selection = Math.floor(Math.random() * length)
    
    newWord = wordOfDay[Selection]
    console.log(Selection)

    return newWord;
}


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

function showGameButtons(type){

    switch (type){
        case 'show':
        btnPause.style.display = "inline"
        btnResume.style.display = "inline"
        btnReset.style.display = "inline"
        btnStop.style.display = "inline"
        btnRecord.style.display = "inline"
        break;

        case 'hide':
        btnPause.style.display = "none"
        btnResume.style.display = "none"
        btnReset.style.display = "none"
        btnStop.style.display = "none"
        btnRecord.style.display = "none"
        break;
    }

}

function enableMenuButtons(type){

    switch (type){
        case 'disabled':
       btnPlay.classList.add('disabled')
      btnSettings.classList.add('disabled')
      break;

        case 'enabled':
        btnPlay.classList.remove('disabled')
      btnSettings.classList.remove('disabled')
        break;
    }

}

function playGame() {
    newQuestion = getNewQuestion();
    questionDisplay.innerHTML = newQuestion;

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

function openSettings(){
    document.querySelector('.settings-card').style.display = "block";
}

function closeSettings(){
    document.querySelector('.settings-card').style.display = "none";
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

    changeCardColor(Palette.pink);
    clearInterval(counter);
    showToastAlert('Game Over', 'finish');
    showGameButtons('hide');


    if (time < 60 || time > 120) {
        showToastAlert(`Sorry, you have not qualified. Your time was ${time} seconds`, 'alert')
    } else if (time >= 60 && time <= 120) {
        showToastAlert(`Great job, you qualified. Your time was ${time} seconds`, 'success')
    
    }


    resetTimers();

    setTimeout(
        () => {
        changeCardColor('#fff')
        questionDisplay.innerHTML = "Game over, Play Again?"
        timer.style.display = "none"
        wordOTD.innerHTML = '';
        enableMenuButtons('enabled');

    }, 4000)
   
    
   

    
    }


    function createNewQuestionID(){
        length = questions.length;
        let newID;
        if (length != 0){
            newID = length + 1
        } else {
            newID = 0
        }

        
        return newID;
    }







    function deleteFromQuestionsArray(id){

        x = 2;
        ids = questions.map(entry => entry.id)

        const index = ids.indexOf(id)
        console.log(index,ids)

        questions.splice(index,1)
        console.log(ids)

    }

    function addToQuestionsArray(){

        let newQuestion = document.querySelector('#addQuestionInmput').value
        let diffuculty = document.querySelector('#diffucltySelect').value
        newQuesitonInput = {
            id: createNewQuestionID(),
            question: newQuestion,
            diffuculty:diffuculty

        }

        questions.push(newQuesitonInput)
    }

    function editWordOfDayArray(){
        wordOfDay.forEach(entry => {

            let li = document.createElement('li');
            li.className = "collection-item";
            li.id = `item-${entry.id}`;
            li.innerHTML = 
            `
            <b>${entry.question}:</b> <em> ${entry.diffuculty} </em>
            <a href="#" class="secondary-content"><i class="edit-item fas fa-edit"></i></a>
            `
            document.querySelector('#edit-question-list').insertAdjacentElement('beforeend',li)
            

           
        });
    }

    function editQuestionsArray(){
        questions.forEach(entry => {

            let li = document.createElement('li');
            li.className = "collection-item";
            li.id = `item-${entry.id}`;
            li.innerHTML = 
            `
            <b>${entry.question}:</b> <em> ${entry.diffuculty} </em>
            <a href="#" class="secondary-contexnt"><i class="edit-item fas fa-time"></i></a>
            <a href="#" class="secondary-contexnt"><i class="edit-item fa-pencil-alt"></i></a>
            `
            document.querySelector('#edit-question-list').insertAdjacentElement('beforeend',li)
            

           
        });

    }







function showToastAlert(msg, type) {
    let color;

    switch (type) {
        case 'success':
            color = 'green lighten-3';
            break;

        case 'alert':
            color = 'red lighten-3';
            break;

        case 'finish':
        color = 'blue lighten-3';
        break;
    }

    M.toast({

        html: `${msg} `,
        displayLength: 2500,
        classes: `z-depth-3 test ${color}`,
        
    })
}

function changeCardColor(color){
    background.style.backgroundColor = color
}