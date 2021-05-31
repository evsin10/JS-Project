var mainArr = [];
function showText() {
    validateForm();
    mainArr.forEach(elem => {
        console.log(elem);
    });

};
// document.getElementById("ContForm").addEventListener("submit", showText);

function validateForm() {
    var userName = document.ContactForm.name.value;
    var userEmail = document.ContactForm.email.value;
    var userTel = document.ContactForm.phone.value;

    let regexName = /[A-Z][A-Za-z]+/g;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
    let regexTel = /[+][0-9]+/g;

    if (!document.ContactForm.name.value.match(regexName) || document.ContactForm.name.value == "") {
        alert("Please provide your name or full it correctly!");
        return false;
    } else if (!document.ContactForm.email.value.match(regexEmail) || document.ContactForm.email.value == "") {
        alert("Please provide your e-mail or full it correctly!");
        return false;
    } else if (!document.ContactForm.phone.value.match(regexTel) || document.ContactForm.phone.value == "") {
        alert("Please provide your phone number or check if it starts with : + ");
        return false;
    } else if (document.ContactForm.gender.value == "") {
        alert("Please provide your gender!");
        return false;
    } else if (!document.ContactForm.firstAnswer.checked || !document.ContactForm.secondAnswer.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        return false;
    } else if (document.ContactForm.age.value == "") {
        alert("Please provide your age!");
        return false;
    } else if (document.ContactForm.age.value < 18) {
        alert("Your age is under requirement!");
        return false;
    }
    else {
        alert("Form completly fulled");
        mainArr.push(userName);
        mainArr.push(userEmail);
        mainArr.push(userTel);
        mainArr.push(document.ContactForm.age.value);
        mainArr.push(document.ContactForm.gender.value);
        document.getElementById('firstDiv').innerHTML = "";
        myFunction();
    }
}


function myFunction() {

    let tableElems = ["tableName", "tableEmail", "tableNumber", "tableGender"];
    let tableGivens = ["givenName", "givenEmail", "givenNumber", "givenGender"];

    for (let index = 0; index < tableElems.length; index++) {
        const element = tableElems[index];
        for (let i = index; i < tableGivens.length; i++) {
            const element2 = tableGivens[i];
            document.getElementById(element).innerHTML = element.slice(5);
            document.getElementById(element2).innerHTML = mainArr[index];
            break;
        }
    }

}
// Adding keyboard functionality (key kode of Enter is 13)

document.addEventListener("keydown", onKeyboardClick);
function onKeyboardClick(event) {
    if (event.keyCode == 13) {
        var button = document.querySelector("button.submitButton");
    }
    if (button) {
        button.click();
    }
}
//Creating function to clear all inputs when they filled 

document.getElementById("ContForm").addEventListener("reset", resetButton);


function resetButton() {
    document.getElementById("ContForm").reset();
}