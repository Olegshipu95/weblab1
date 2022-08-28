"use strict"
let x, r
let xElement
let yElement = document.getElementById("y-value");
let messageX = document.getElementById("messageX")
let messageY = document.getElementById("messageY")
let messageR = document.getElementById("messageR")
var servDom = 'http://localhost';
let formWithFields = document.getElementById("formWithFields")

function setR(value) {
    r = value;
}

function setX(object, value) {
    x = value;
    if (xElement != null) {
        xElement.style.borderBottom = ""
    }
    xElement = object
    xElement.style.borderBottom = "2px solid black"
}

function fieldsAreNotEmpty() {
    let isNotEmpty = true;

    if (!x) {
        messageX.innerHTML = 'Это поле обязательно для заполнения';
        isNotEmpty = false;
    } else messageX.innerHTML = "";

    if (!yElement.value) {
        messageY.innerHTML = 'Это поле обязательно для заполнения';
        isNotEmpty = false;
    } else messageY.innerHTML = "";

    if (!r) {
        messageR.innerHTML = 'Это поле обязательно для заполнения';
        isNotEmpty = false;
    } else messageR.innerHTML = "";
    return isNotEmpty;
}

function isYOk() {
    let isOk = true;
    if (yElement.value >= 5 || yElement.value <= -5 || isNaN(yElement.value)) {
        messageY.innerHTML = 'Некорректный ввод, введите число от -5 до 5';
        isOk = true
    } else messageY.innerHTML = ''
    return isOk;
}


formWithFields.onsubmit = (e) => {
    e.preventDefault();

    if (isYOk() && fieldsAreNotEmpty()) {
        let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
        let url = new URL('../php/main.php', servDom);
        let formData = new FormData();
        formData.append("x",x);
        formData.append("y", yElement.value);
        formData.append("r",r);
        xhr.open('POST', url);
        xhr.send(formData);
        xhr.upload.onerror = function() {
            alert(`Произошла ошибка во время отправки: ${xhr.status}`);
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 300) {
                document.getElementById("result").innerHTML += xhr.responseText
            }
        }
    }
}