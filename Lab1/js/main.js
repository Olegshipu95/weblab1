"use strict"
let x=document.getElementById("x-value")
let y=document.getElementById("y-value")
let r=document.getElementsByName("r-value")

r.addEventListener("input", function (event) {
    if (r.validity.typeMismatch) {
        r.setCustomValidity("I am expecting an e-mail address!");
    } else {
        r.setCustomValidity("");
    }
});

