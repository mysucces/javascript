// CREATE QUESTIONS CLASS
class Question{
    constructor(text,choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer

    }
   
    isCorrectAnswer(choice){
         return this.answer === choice;
     }
}




//  CREATE cbt class
class Cbt{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    // get a specific question
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    };
     // picking answer from the cbt
    guess(answer){
         if(this.getQuestionIndex().isCorrectAnswer(answer)){
             this.score++;
             console.log(this.score)
         }
         this.questionIndex++;
         /*console.log(this.questionIndex)*/
    };

    isEnded(){
        return this.questionIndex == this.questions.length;
    
    }
    
}


 // DISPLAY QUESTION
 function displayQuestion() {
     if(myCbt.isEnded()){
        showScores();
     }else{
         // show QUESTION
         let questionElement = document.getElementById("question");
         questionElement.innerHTML = myCbt.getQuestionIndex().text;
        


         // show options
         let choices = myCbt.getQuestionIndex().choices;
         for(let i = 0; i<choices.length; i++){
             let choiceElement = document.getElementById("choice" + i);
             choiceElement.innerHTML = choices[i];
             guess("btn" + i, choices[i])

         }
       showProgress();
     }
 }

 function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        myCbt.guess(guess);
        displayQuestion();
    }
};

// SHOW THE CBT PROGRESS
 function showProgress(){
    let currentQuestionNum = myCbt.questionIndex + 1;
    let progressElement = document.getElementById("progress");
     progressElement.innerHTML = `Question ${currentQuestionNum} of ${myCbt.questions.length}`;
}

    function showScores(){
    let cbtEndHtml =`<h1 class="end">the of the end</h1>
                    <h2 id = "score">You scored : ${myCbt.score}</h2>
                    <div class="cbt-repeat">
                       <a href ="cbt.html">Take the cbt again</a>
                       <hr>
                       <footer><img src="../assets/images/dimeoyin.jpg" id="image" alt=""></footer>
                     
                `
                let cbtElement = document.getElementById("myCbt");
                cbtElement.innerHTML = cbtEndHtml;
}


let questions =[
    new Question(
        "Hyper Text Markup Language Stands For?", 
        ["JQuery", "XHTML","CSS", "HTML"], "HTML"
    ),
    new Question(
        "Cascading Style sheet stands for?", 
        ["HTML", "JQuery", "CSS", "XML"], "CSS"
    ),
    
    
    new Question(
        "Which is a JavaScript Framework?", 
        ["React", "Laravel","Django", "Sass"], "React"
        ),

        new Question(
            "Which is a backend language?", 
            ["PHP", "HTML", "React", "All"], "PHP"
            ),	
            new Question(
                "Which is best for Artificial intelligence?", 
                ["React", "Laravel","Python", "Sass"], "Python"
                )
            

];


// Loop through the array and get the answers
// questions.forEach((answer) => {
//     console.log(answer.choice);
//     let quizAnswers = document.getElementById("quiz-answers");
//     // quizAnswers.innerHTML = questions.text;
// })



// create cbt
let myCbt = new Cbt(questions);

// display myCbt
displayQuestion();

// ADD COUNTDOWN
let time = 1;
let timeInMinutes = time *60*60 ;
cbtTime = timeInMinutes/60;
 let counting = document.getElementById("count-down");
 const startCountDown =()=>{
     let myNewTimer = setInterval(timeController,1000);

 }
 let timeController =()=>{
     console.log(cbtTime);
     if(cbtTime<=0){
         clearInterval(cbtTime);
         showScores();
     }else{
         cbtTime--;
         let sec = Math.floor(cbtTime % 60);
         let min = Math.floor((cbtTime/60) % 60);
         counting.innerHTML = `TIMER  ${sec} : ${min}`
     }
 }

  startCountDown()



