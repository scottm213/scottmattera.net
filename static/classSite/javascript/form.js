"use strict";

let finish = document.querySelector("#finish");
finish.addEventListener("click", function () {
    document.querySelector("form").submit();
})