
function storeQuestions(newQuestion){
    let questionStorage;

        if (localStorage.getItem('questionStorage') === null) {
            questionStorage = [];
            questionStorage.push(newQuestion);
            localStorage.setItem('questionStorage', JSON.stringify(questionStorage))

        } else {
            questionStorage = JSON.parse(localStorage.getItem('questionStorage'))
            questionStorage.push(newQuestion);
            localStorage.setItem('questionStorage', JSON.stringify(questionStorage))
        }
}


function storeWords(newWord){
    let wordStorage;
        if (localStorage.getItem('wordStorage') === null) {
            wordStorage = [];
            wordStorage.push(newWord);
            localStorage.setItem('wordStorage', JSON.stringify(wordStorage))

        } else {
            wordStorage = JSON.parse(localStorage.getItem('wordStorage'))

            wordStorage.push(newWord);
            localStorage.setItem('wordStorage', JSON.stringify(wordStorage))
        }
}

function getCombinedQuestionsArray(){
    parsedStorage = JSON.parse(localStorage.questionStorage);
    storedQuestions = Array.from(parsedStorage);

    allQuestions = questions.concat(storedQuestions);
    return allQuestions;
}

function getCombinedWordsArray(){
    parsedStorage = JSON.parse(localStorage.wordStorage);
    storedWords = Array.from(parsedStorage);

    allWords = wordOfDay.concat(storedWords);
    return allWords;
}

function checkQuestionStorage(){
    if (localStorage.questionStorage != undefined){
       return true;
    } else if (localStorage.questionStorage == undefined){
        return false;
    }
}

function checkWordStorage(){
    if (localStorage.wordStorage != undefined){
       return true;
    } else if (localStorage.wordStorage == undefined){
        return false;
    }

}


function deleteQuestionFromStorage(id){
         index = id -1

        let storedQuestions = JSON.parse(localStorage.getItem('questionStorage'));
        storedQuestions.forEach(entry => {
            if (id === entry.id){
                storedQuestions.splice(index,1)
            }
        });

        localStorage.setItem('questionStorage',JSON.stringify(storedQuestions));
}
    
function deleteWordFromStorage(id){
    index = id -1;

        let storeWords = JSON.parse(localStorage.getItem('wordStorage'));
        storeWords.forEach(entry => {
            if (id === entry.id){
                storeWords.splice(index,1)
            }
        });

        localStorage.setItem('wordStorage',JSON.stringify(storeWords));
}
    

function updateQuestionInStorage(id){
    input = getQuestionEditStateInputs();
    index = id -1;
  
    let storedQuestions = JSON.parse(localStorage.getItem('questionStorage'));

    storedQuestions.forEach(entry => {
        if (id === entry.id){
            entry.question = input.updatedQuestion;
            entry.diffuculty = input.updatedDiffuculty;
        }
    });

    localStorage.setItem('questionStorage',JSON.stringify(storedQuestions))
}
function updateWordInStorage(id){
    input = getWODEditStateInputs();
    index = id -1;
  
    let storedWords= JSON.parse(localStorage.getItem('wordStorage'));

    storedWords.forEach(entry => {
        if (id === entry.id){
            entry.word = input.updatedWord;
            entry.diffuculty = input.updatedDefinition;
            entry.partOfSpeech = input.updatedPartOfSpeech;
        }
    });

    localStorage.setItem('wordStorage',JSON.stringify(storedWords));
}

function clearStorage(){
    localStorage.clear();
    showToastAlert(`Local Storage Cleared  <i class="fas fa-snowplow"></i>`,'success');
}
