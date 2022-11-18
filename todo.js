// Styling the elements
let content = document.querySelector(".content");
let title = document.querySelector("h1");
let lightMode = document.querySelector(".fa-sun");
let darkMode = document.querySelector(".fa-moon");
let todo = document.querySelector(".todo");
let addSection = document.querySelector(".add-section");


lightMode.addEventListener("click", () => {
    content.style.backgroundColor = "#f2f2f2";
    content.style.transition = "0.1s";
    title.style.color = "black";
    lightMode.style.color = "black";
    darkMode.style.color = "black";
    todo.style.borderColor = "black";
    todo.style.color = "black";
    addSection.style.backgroundImage = "linear-gradient(to left, hsl(0, 0%, 90%) 5%, #252525)";
});

darkMode.addEventListener("click", () => {
    content.style.backgroundColor = "#252525";
    content.style.transition = "0.1s";
    title.style.color = "#f2f2f2";
    lightMode.style.color = "#f2f2f2";
    darkMode.style.color = "#f2f2f2";
    todo.style.borderColor = "#f2f2f2";
    todo.style.color = "white";
    addSection.style.backgroundImage = "linear-gradient(to right, hsl(0, 0%, 90%) 5%, #252525)";
});

// Adding a text into the list

let input = document.getElementById("input");
let add = document.getElementById("add");
let ol = document.querySelector("ol");
let li = document.querySelector(".list");
let btn = document.querySelector("button");

add.addEventListener("click", (e) => {
    e.preventDefault();
    
    let li = document.createElement("li");
    let newDiv = document.createElement("div");
    let newBtn = document.createElement("button");

    newDiv.className = "list";
    newDiv.appendChild(li);
    newDiv.appendChild(newBtn);
    newBtn.appendChild(document.createTextNode("X"));
    newBtn.className = "btn";
    li.appendChild(document.createTextNode(input.value));
    
    if(input.value === "") {
        alert("Error, please input some todos");
    } else {
        ol.appendChild(newDiv);
        input.value = "";
    }
});

ol.addEventListener("click", (e) => {
    let note = document.createElement("div");
    note.className = "list";
    note.innerText = "Empty Todo List";

    if(e.target.classList.contains("btn")) {
       let li = e.target.parentElement;
       ol.removeChild(li);
    }
});