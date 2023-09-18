var startButton = document.getElementById("start");
var container = document.querySelector(".container");
var Heading = document.querySelector("h1");
var timeElement = document.querySelector("#time");
var choise = document.getElementById("choise");
var h2 = document.querySelector("#answer");
var li = document.getElementsByTagName("li");
var initialsDiv = document.getElementById("initial");
var textInput = document.getElementById("name");
var submitButton = document.getElementById("submit");
var subHeading = document.getElementById("sub-heading");

var userList =[];
var user ;
var timeCount = 75;
var time;
var questionNum = 0;
var answer ;

choise.style.display ="none";
initialsDiv.style.display="none";
textInput.style.display ="none";
submitButton.style.display ="none";

var questionSet = [
    {
    question : "Commonly used data types do not include:",
    ans: ["strings","booleans","alerts","numbers"],
    correct: 2
    },
    {
    question : "Which operator is used for strict equality comparison in Javascript ?",
    ans: ["==","===","!==","!="],
    correct: 1
    },
    {
    question : "Which of the following methods is used to add a new element to the end of an array in Javascript?",
    ans: ["push()","unshift()","concat()","pop()"],
    correct: 0
    },
    {
    question : "The conditions in an if/else statement is enclosed within ______",
    ans: ["Quotes-"+'""',"Curly brackets-{}","Parentheses-()","Square bracket-[]"],
    correct: 2
    }
];

function setTime (){
    setTimeout (function() {
        h2.classList.add("hidden")
    },1000)
}

function init(){
    
    
}

function score(){
    Heading.style.display = "block";
    h2.textContent = answer;
    setTime();
    timeElement.textContent = "Time: " + timeCount;
    Heading.textContent = "All done!";
    choise.style.display ="none";
    startButton.style.display = "none"

    if(timeCount<=0){
        timeCount = 0;
        subHeading.textContent = "Your final score is " + timeCount;
    }else{
        subHeading.textContent = "Your final score is " + timeCount;
    }
    for(i=1;i<4;i++)
    {
        li[i].textContent = "";
    }
    initialsDiv.style.display ="inline";
    textInput.style.display ="inline";
    submitButton.style.display ="block";
    
}

function timer () {
    time = setInterval(function() {
        
        h2.textContent = "";
        timeElement.textContent = "Time: " + timeCount;

        if (timeCount >0)
        {   
            timeElement.textContent = "Time: " + timeCount;
            timeCount--;
        } 
        else
        {   
            clearInterval(time);
            score();
        }
        
    }, 1000);
}

function question(){

    choise.style.display ="block";
    if (timeCount >0 && questionNum< 4)
    {
        subHeading.textContent = questionSet[questionNum].question;
        for (var i = 0; i<questionSet[questionNum].ans.length;i++)
        {
            li[i].textContent = questionSet[questionNum].ans[i];
        }
    questionNum++; 
    }else{
        clearInterval(time);
        score();
    }

}


startButton.addEventListener("click", function(){
    startButton.style.display = "none";
    Heading.style.display = "none";
    init();
    timer();
    question();
    
    for (var i=0 ; i<li.length; i++){
        li[i].addEventListener('click', (e)=>{
            var targetId = e.target.id;
            if (targetId == questionSet[questionNum-1].correct){
                answer = "Correct!";
                h2.textContent = answer;
                question();
            }else{
                answer = "Wrong!";
                h2.textContent = answer;
                timeCount = timeCount - 15;
                question();
            }
        })
    }
    submitButton.addEventListener('click', function(){
        user = {
            name : textInput.value,
            score : timeCount
        };
        
        
        var storedData = localStorage.getItem("userList")||"";
        if (storedData)
        {
            userList = userList.concat(JSON.parse(storedData));
            userList.push(user);
            console.log(userList)
            localStorage.setItem("userList",JSON.stringify(userList));
        }else{
            userList.push(user);
            localStorage.setItem("userList",JSON.stringify(userList));
        }

        location.href = "./highscore.html"
    })
})




