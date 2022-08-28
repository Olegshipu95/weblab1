"use strict"
$(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        if (isYOk() && fieldsAreNotEmpty()) {
            $.ajax({
                url: "php/main.php",
                async: true,
                type: "POST",
                data: {
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
/*formWithFields.onsubmit = (e) => {
    e.preventDefault();
    if (isYOk() && fieldsAreNotEmpty()) {
        let xhr = new XMLHttpRequest(); // у конструктора нет аргументов
        let url = new URL('../php/main.php', servDom);
        let formData = new FormData();
        formData.append("x", x);
        formData.append("y", yElement.value);
        formData.append("r",r);
        xhr.open('POST', url, true);
        xhr.send(formData);
        xhr.upload.onerror = function() {
            alert(`Произошла ошибка во время отправки: ${xhr.status}`);
        };
        xhr.onloadend = function() {
            if (xhr.status >= 200 && xhr.status <= 300) {
                alert("hi")
                document.getElementById("tbody").innerHTML += xhr.responseText
            } else {
                alert("Ошибка " + this.status);
            }
        };*/