function changeDisplayState(element){
    questionDisplay.innerHTML = element;
}

function editQuestionState(item) {
        element =
            ` 
    
    <form class = "form">
    <div class="input-field">
            <input type="text" value="${item.question}" id ="addQuestionInput" class="validate active">
            <label for="addQuestionInput">Edit Question</label>
            </div>

            <label for = "easyRadio">
            <input class="with-gap " name ="diffucltyRadioGroup" type="radio" id = "easyRadio" value = 'easy'/>
            <span> Easy </span>
            </label>


            <label for = "medRadio">
            <input class="with-gap "  name ="diffucltyRadioGroup" type="radio" id = "medRadio" value = 'medium' />
            <span>Medium</span>
            </label>
    
            <label for = "hardRadio">
            <input class="with-gap " name ="diffucltyRadioGroup" type="radio" id = "hardRadio" value = 'hard'/>
            <span>Hard</span>
            </label>

       
    </form> 

    <br>
    <button class="btn green settings-questions-btn" onclick = "editQuestionStateUpdateBtn(${item.id})"><i class="fas fa-pencil-alt"></i> </button>   

    <button class="btn red settings-questions-btn" onclick = "editQuestionStateDeleteBtn(${item.id})"><i class="fas fa-times"></i> </button>
    <button class="btn teal lighten-1  settings-questions-btn" onclick= "showHomeState()" >Back</button>   
 </div>        

    `

        changeDisplayState(element);
        fillQuestionRadioButton(item.diffuculty);
        M.updateTextFields();

    }


function addNewQuestionState() {
        element = `
        <form class = "form">

    <div class="input-field">
    <input type="text" placeholder= "New Question" id ="addQuestionInput" class="validate active">
    <label for="addQuestionInput">Add New Question</label>
    </div>

    <label for = "easyRadio">
    <input class="with-gap " name ="diffucltyRadioGroup" type="radio" id = "easyRadio" value = 'easy'/>
    <span> Easy </span>
    </label>


    <label for = "medRadio">
    <input class="with-gap "  name ="diffucltyRadioGroup" type="radio" id = "medRadio" value = 'medium' />
    <span>Medium</span>
    </label>

    <label for = "hardRadio">
    <input class="with-gap " name ="diffucltyRadioGroup" type="radio" id = "hardRadio" value = 'hard'/>
    <span>Hard</span>
    </label>


</form> 
<br>
<button class="btn blue settings-questions-btn" onclick = "addNewQuestion()"> <i class="fas fa-plus"></i> </button>
<button class="btn teal lighten-1  settings-questions-btn" onclick="showHomeState()">Back</i></button>  
   
    `
        changeDisplayState(element);
        M.updateTextFields();

    }

    function editWODState(item){
        element = `
        <form class = form>
        <div class="input-field">
    <input type="text" value ='${item.word}' id ="addWordInput" class="validate active">
    <label for="addQuestionInput">Edit Word of the Day</label>
    </div>

        <div class="input-field">
    <input type="text" value ='${item.definition}' id ="addDefinitionInput" class="validate active">
    <label for="addQuestionInput">Edit Definition</label>
    </div>

    <label for = "nounRadio">
    <input class="with-gap " name ="partsOfSpeechRadioGroup" type="radio" id = "nounRadio" value = 'noun'/>
    <span> Noun </span>
    </label>


    <label for = "adjRadio">
    <input class="with-gap "  name ="partsOfSpeechRadioGroup" type="radio" id = "adjRadio" value = 'adjective' />
    <span>Adjective</span>
    </label>

    <label for = "verbRadio">
    <input class="with-gap " name ="partsOfSpeechRadioGroup" type="radio" id = "verbRadio" value = 'verb'/>
    <span>Verb</span>
    </label>
    
    <label for = "adverbRadio">
    <input class="with-gap " name ="partsOfSpeechRadioGroup" type="radio" id = "adverbRadio" value = 'adverb'/>
    <span>Adverb</span>
    </label>


</form> 
<br>
<button class="btn green settings-questions-btn" onclick = "editWODStateUpdateBtn(${item.id})"> <i class="fas fa-pencil-alt"></i> </button>   
<button class="btn red settings-questions-btn" onclick = "editWODStateDeleteBtn(${item.id})"><i class="fas fa-times"></i> </button>

<button class="btn teal lighten-1  settings-questions-btn" onclick="showHomeState()">Back</button>  

`
        changeDisplayState(element);
        fillWODRadioButton(item.partOfSpeech);

        M.updateTextFields();
    }

    function addNewWODState(){
        element = `
        <form class = "form">

        <div class="input-field">
        <input type="text" placeholder = 'New Word' id ="addWordInput" class="validate active">
        <label for="addQuestionInput">Edit Word of the Day</label>
        </div>
    
            <div class="input-field">
        <input type="text" placeholder ='Word Definition' id ="addDefinitionInput" class="validate active">
        <label for="addQuestionInput">Edit Definition</label>
        </div>
       
        <label for = "nounRadio">
        <input class="with-gap " name ="partsOfSpeechRadioGroup" type="radio" id = "nounRadio" value = 'noun'/>
        <span> Noun </span>
        </label>
    
        <label for = "adjRadio">
        <input class="with-gap "  name ="partsOfSpeechRadioGroup" type="radio" id = "adjRadio" value = 'adjective' />
        <span>Adjective</span>
        </label>

        <label for = "verbRadio">
        <input class="with-gap " name ="partsOfSpeechRadioGroup" type="radio" id = "verbRadio" value = 'verb'/>
        <span>Verb</span>
        </label>
        
        <label for = "adverbRadio">
        <input class="with-gap " name ="partsOfSpeechRadioGroup" type="radio" id = "adverbRadio" value = 'adverb'/>
        <span>Adverb</span>
        </label>
    
    
    </form> 
    <br>
    <button class="btn blue settings-questions-btn" onclick = "addNewWord()"> <i class="fas fa-plus"></i></button>   
    
    <button class="btn teal lighten-1  settings-questions-btn" onclick="showHomeState()">Back</button>  
        `
            changeDisplayState(element);
            M.updateTextFields();
    
    }



    
    function showRulesState(){

        element = 
        `
        <i class="fas fa-pencil-ruler fa-2x"></i>

        <ul>
        
       <li> Table Topic responses are to be bewtween one and two minutes long.  </li>
       <br>
        <li>   Responses under one minute or over two minutes do not qualify  </li>
        <br>
        <li> Green light will be shown at 60 seconds, yellow light at 90 seconds and red at 120 seconds
        <ul>
        <br>
        <li> Try to use the Word of the Day! </li>

        <br>
        <button class = "btn settings-btn "  onclick ="showHomeState()">Back</button>

        `
        changeDisplayState(element);
    }

    function showHomeState(){
        element = 'Table Topics'

        changeDisplayState(element)
    }