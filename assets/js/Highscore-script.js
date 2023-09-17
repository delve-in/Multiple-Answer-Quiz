var li = document.getElementsByTagName("li");
var ul = document.getElementById("list");
var clearScore = document.getElementById("clear");
var userList ;

userList = localStorage.getItem("userList")||"";

console.log(userList);

function init() {
    userList = localStorage.getItem("userList")||"";
    if (userList){
        userList = JSON.parse(userList);
        userList.forEach(user => {
            var li = document.createElement("li");
            li.textContent = user.name+ " " + user.score;
            ul.appendChild(li);
        });
    }
}

init();
clearScore.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})