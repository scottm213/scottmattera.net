"use strict";

let qurl = window.location.search;
let params = new URLSearchParams(qurl);
let q1ans = params.get("q1");
let q2ans = params.get("q2");
let q3ans = params.get("q3");
let q4ans = params.get("sdl");
let finScore = 0;
let body = document.querySelector("body");
let score = document.querySelector("#score");
let newText1 = document.createElement("p");
let newText2 = document.createElement("p");
let newText3 = document.createElement("p");
let newText4 = document.createElement("p");


let wrongAnswers = [0,0,0,0];
let answerHints = ["In POV-Ray, a set of coordinates might look like this: <0,-1,3>",
    "One of the most common include files is colors.inc", "Sphere sweeps make solid lines from one sphere to another.",
"Review your SDL!"];

if (q1ans == "gesurround") {
    finScore += 1;
} else{
    wrongAnswers[0] = 1;
}
if (q2ans == "inc"){
    finScore += 1;
} else {
    wrongAnswers[1] = 1;
}
if (q3ans == "sweep"){
    finScore += 1;
} else {
    wrongAnswers[2] = 1;
}

if (q4ans == "box{" +
    "<0,0,0>,1 " +
    "texture{" +
    "pigment{color Red}" +
    "finish{phong 1.0}" +
    "}" +
    "}"){
    finScore += 1;
}else{
    wrongAnswers[3] = 1;
}
let i;
for (i = 0; i < wrongAnswers.length; i++){
    if (wrongAnswers[i] == 1){
        let newText = document.createElement("p");
        newText.innerText = answerHints[i];
        body.appendChild(newText);
    }
}

score.innerText = "Your final Score: " + finScore + "/4";