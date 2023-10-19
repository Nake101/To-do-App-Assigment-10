var inputBox =document.getElementById("input-box");
var listContaine =document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write some thing")
    } else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaine.appendChild(li);
        var span =document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
   inputBox.value="";
   saveData();
}

listContaine.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else{e.target.tagName === "SPAN"
    e.target.parentElement.remove();
    saveData();
    }
} ,false);

function saveData(){
    localStorage.setItem("data", listContaine.innerHTML);
}
function showTask(){
    listContaine.innerHTML = localStorage.getItem("data");
}
showTask();