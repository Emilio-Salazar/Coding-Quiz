var questionIndex = {
    question: ["This file type contains most of the text content of a website.",
    "placeholder"],
    answerA:["css","A"],
    answerB:["html","B"],
    answerC:["javascript","C"],
    answerD:["flexbox","D"],
    correctAnswer: ["html","A"]
}
var i = 0
var answerContent = document.querySelector(".answer")
var quizLoop = function() {
        
        document.querySelector("#mainQuestion").textContent = questionIndex.question[i];
        document.querySelector("#answerA").textContent = questionIndex.answerA[i];
        document.querySelector("#answerB").textContent = questionIndex.answerB[i];
        document.querySelector("#answerC").textContent = questionIndex.answerC[i];
        document.querySelector("#answerD").textContent = questionIndex.answerD[i];

    
    
}
var selectAnswer = function (event) {
    console.log(event.target);
    var targetEl = event.target;
    var answerInput = targetEl.textContent;
    if (answerInput === questionIndex.correctAnswer[i]) {
        document.querySelector("#result").textContent = "Correct!";
        
        i++
        quizLoop()
    }
    else {
        document.querySelector("#result").textContent = "Wrong!";
        i++
        quizLoop()
        
    }

    }


quizLoop();
answerContent = addEventListener("click", selectAnswer)
console.log(questionIndex.question[0])