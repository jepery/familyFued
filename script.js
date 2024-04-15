surveybutton1.onclick = function(){

    surveybutton1.style.display = "none";
    survey1.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton2.onclick = function(){

    surveybutton2.style.display = "none";
    survey2.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton3.onclick = function(){

    surveybutton3.style.display = "none";
    survey3.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton4.onclick = function(){

    surveybutton4.style.display = "none";
    survey4.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton5.onclick = function(){

    surveybutton5.style.display = "none";
    survey5.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton6.onclick = function(){

    surveybutton6.style.display = "none";
    survey6.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton7.onclick = function(){

    surveybutton7.style.display = "none";
    survey7.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

surveybutton8.onclick = function(){

    surveybutton8.style.display = "none";
    survey8.style.display = "block"

    var audio = new Audio('sounds/correct.mp3');
    audio.play();
};

XoneTrigger.onclick = function() {

    Xone.style.display = "block"    
    Xtwo.style.display = "none" 
    Xthree.style.display = "none"

    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
};

XtwoTrigger.onclick = function() {

    Xone.style.display = "none"   
    Xtwo.style.display = "block" 
    Xthree.style.display = "none"

    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
};

XthreeTrigger.onclick = function() {

    Xone.style.display = "none"   
    Xtwo.style.display = "none" 
    Xthree.style.display = "block"

    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
};

Clear.onclick = function() {

    Xone.style.display = "none"   
    Xtwo.style.display = "none" 
    Xthree.style.display = "none"
};

Winner.onclick = function() {

    var audio = new Audio('sounds/roundwinner.mp3');
    audio.play();
};