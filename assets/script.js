var startButton = document.querySelector(".start");
var questionElement = document.querySelector("h1");
var timeElement = document.querySelector("#time");
var choise = document.querySelector("#choise");
var li = document.getElementsByTagName("li");
console.log(li);
var timeCount = 5;
var time;
var questionNum = 0;

startButton.addEventListener("click", function(){
    timer();
    Question();  
})

function timer () {
    time = setInterval(function() {
        
    timeElement.textContent = "Time: " + timeCount;

    // if (timeCount >=0)
    // {   
    //     //question over
    //     clearInterval(timer);
    //     //game win
    // } 
    if (timeCount <= 0)
    {
        clearInterval(timer);
        // game lost score
    }
    timeCount--;
    }, 1000);
}

function Question(){
    
    if (timeCount >=0 && questionNum< 2)
    {
    var questionSet = [
        {
        question : "Commonly used data types do not include:",
        ans: ["strings","booleans","alerts","numbers"],
        correct: 3
        },
        {
        question : "Which operator is used for strict equality comparison in Javascript ?",
        ans: ["==","===","!==","!="],
        correct: 3
        }
    ];
    questionElement.textContent = questionSet[questionNum].question;
    for (var i = 0; i<questionSet[questionNum].ans.length;i++)
    {
        li[i].textContent = questionSet[questionNum].ans[i];
    }
   questionNum++; 
    }else{
        window.alert("win");
    }

}
