const button = document.getElementById("enter");
const buttonReady = document.getElementById("ready");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const p = document.getElementById("symbolsLeft");

const minLength = 23;
const enterKeyCode = 13;

let totalItems = 0;
const maxItems = 5;

let currentItemID = 0;

let li;
let list;
let buttonDel = null;

let editable = true;

window.onload = startFunction();

function startFunction(){
    input.value = "";
    input.focus();
    addSymbolsLeft();
}

function addSymbolsLeft(){
    if (editable){
        let text = minLength - input.value.length;
        if (text > 0) {
            p.textContent = `Осталось ввести не менее ${text} символов`;
        } else {
            p.textContent = `Отлично, задачу можно добавлять`;
        }
    } else {
        p.textContent = `Теперь можно приступить к выполнению задач`
    };
}

function inputLength(){
    return input.value.length;
}

function addItemAfterClick(){
    if (inputLength() > minLength && editable === true){
        createItem();
    }
}

function addItemAfterEnter(event){
    if (inputLength() > minLength && event.keyCode === enterKeyCode && editable === true){
        createItem();
    }
}

function createItem(){
    if (totalItems < maxItems){
        createTaskText();
        createDeleteButton();
        currentItemID++;
        totalItems++;
        startFunction()
    } else {
        listGotFull();
    }
}

function createTaskText(){
    li = document.createElement("li");
    li.setAttribute("id", currentItemID);
    li.setAttribute("onClick", "toggleDone(this.id)");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    list = document.querySelectorAll("li");
}

function createDeleteButton(){
    let text = `deleteItem(${currentItemID})`;
    buttonDel = document.createElement("button");
    buttonDel.appendChild(document.createTextNode("X"));
    buttonDel.setAttribute("onClick", text);
    buttonDel.addEventListener("click", deleteItem);
    li.appendChild(buttonDel);
}

function deleteItem(id){
    document.getElementById(id).outerHTML = "";
    totalItems--;
}

function toggleDone(id){
    document.getElementById(id).classList.toggle("done");
}

function listGotFull(){
    alert("Создать больше пяти задач нельзя. Удали что-нибудь");
}

function finishList(){
    editable = false;
    deactivateButtons();
    deactivateInput();
    addSymbolsLeft();
}

function deactivateButtons(){
    let btns = document.querySelectorAll("button");
    for (let btn = 0; btn < btns.length; btn++) {
        btns[btn].setAttribute("disabled", "true");
    }
}

function deactivateInput(){
    input.value = "Молодец";
    input.disabled = true;
}

// Input Listeners
button.addEventListener("click", addItemAfterClick)
buttonReady.addEventListener("click", finishList)
input.addEventListener("keypress", addItemAfterEnter)
input.addEventListener("input", addSymbolsLeft)
