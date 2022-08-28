let servDom = 'http://localhost';
let formWithFields = document.getElementById("formWithFields")

function setR(value) {
    r = value;
}

function setX(object, value) {
    x = value;
    if (xElement != null) {
        xElement.style.borderBottom = ""
    }
    xButton = object
    xButton.style.borderBottom = "2px solid black"
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