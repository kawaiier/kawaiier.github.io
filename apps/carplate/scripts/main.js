var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const signElements = 7;

// window.onload = function() {
//     document.getElementsByTagName("input").value = "";
//     document.getElementsByTagName("input").disabled = false;
//     const usp = new URLSearchParams(window.location.search);
//     usp.values = "";
// }

function skipIfMaxLetter(element) {
    max = parseInt(element.dataset.max)    
    if (element.value.length >= max && element.nextElementSibling) {
        if (validateLetter(element.value)){
            let nextElement = +document.getElementById(element.id).id+1;
            document.getElementById(nextElement).focus();
            document.getElementById(element.id).disabled = true;
            //element.nextElementSibling.focus();  
        } else {
            element.value = "";
        }
    }
}

function skipIfMaxNumber(element) {
    max = parseInt(element.dataset.max)    
    if (element.value.length >= max && element.nextElementSibling) {
        if (validateNumber(element.value)){
            let nextElement = +document.getElementById(element.id).id+1;
            document.getElementById(nextElement).focus();
            document.getElementById(element.id).disabled = true;
            // element.nextElementSibling.focus();  
        } else {
            element.value = "";
        }
    }
}

function validateLetter(letter) {
    if (letter == "") {
        alert("Enter a name");
        return false;
    }
    if (!/([A-Z]|[a-z])/g.test(letter)) {
        return false;
    } else {
        return true;
    }
}

function validateNumber(number) {
    if (number == "") {
        alert("Enter a name");
        return false;
    }
    if (!/[0-9]/g.test(number)) {
        return false;
    } else {
        return true;
    }
}

function resetForm(){
    for (let i = 1; i <= signElements; i++){
        document.getElementById(i).disabled = false;
    }
    document.getElementById(1).focus();
}