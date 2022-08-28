"use strict"
let x, r
let xButton
let xElement
let yElement = document.getElementById("y-value");
let messageX = document.getElementById("messageX")
let messageY = document.getElementById("messageY")
let messageR = document.getElementById("messageR")
let servDom = 'http://localhost';
let formWithFields = document.getElementById("formWithFields")
let tbody = document.getElementById("tbody");
$(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        if (isYOk() && fieldsAreNotEmpty()) {
            $.ajax({
                url: "php/main.php",
                async: true,
                type: "POST",
                data: {
                    "entry": "yes",
                    "x": x.value,
                    "y": yElement.value,
                    "r": r.value
                },
                cache: false,
                success: function (response) {
                    tbody.innerHTML += response

                },
                error: function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    alert(msg);
                }
                // xhr.onload = function() {
                //     if (xhr.status >= 200 && xhr.status <= 300) { // HTTP ошибка?
                //         // обработаем ошибку
                //         alert( 'Ошибка: ' + xhr.status);
                //     }
                //     document.getElementById("tbody").innerHTML += xhr.responseText
                // };
            })
        }
    })
})


function setR(value) {
    r = value;
}

function setX(object, value) {
    x = value;
    if (xButton != null) {
        xButton.style.borderBottom = ""
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