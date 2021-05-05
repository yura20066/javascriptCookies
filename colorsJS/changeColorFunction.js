document.getElementById("q").onclick = function() {colorQ(eraseCookie)};
document.getElementById("w").onclick = function() {colorW(eraseCookie)};
document.getElementById("e").onclick = function() {colorE(eraseCookie)};
document.getElementById("r").onclick = function() {colorR(eraseCookie)};
document.getElementById("t").onclick = function() {colorT(eraseCookie)};
document.getElementById("y").onclick = function() {colorY(eraseCookie)};
document.getElementById("u").onclick = function() {colorU(eraseCookie)};




 let x = readCookie('color')
 if (x === 'q') {
     colorQ();
 } else if(x === 'w'){
     colorW();
 }else if(x === 'e'){
     colorE();
 }else if(x === 'r'){
     colorR();
 }else if(x === 't'){
     colorT();
 }else if(x === 'y'){
     colorY();
 }else if(x === 'u'){
     colorU();
}

function colorQ() {
    document.getElementById("changeColorsBox").style.backgroundColor = " #fc0808";

    createCookie('color','q',7);
}
function colorW() {
    document.getElementById("changeColorsBox").style.backgroundColor = " #ffcc05";
    createCookie('color','w',7);
}
function colorE() {
    document.getElementById("changeColorsBox").style.backgroundColor = " #08ecf3";
    createCookie('color','e',7);
}
function colorR() {
    document.getElementById("changeColorsBox").style.backgroundColor = " #12ff00";
    createCookie('color','r',7);
}function colorT() {
    document.getElementById("changeColorsBox").style.backgroundColor = " #077cff";
    createCookie('color','t',7);
}
function colorY() {

    document.getElementById("changeColorsBox").style.backgroundColor = " #054cff";
    createCookie('color','y',7);
}
function colorU() {
    document.getElementById("changeColorsBox").style.backgroundColor = " #be08fd";
    createCookie('color','u',7);
}
////////////////////////////////////////////// End Background Color////////////////////////////////////////////////////

////////////////////////////////////////Change Font Color/////////////////////////////////////////////
document.getElementById("fontColorQ").onclick = function() {fontColorBlackH1()};
document.getElementById("fontColorW").onclick = function() {fontColorGreenH1()};
document.getElementById("fontColorE").onclick = function() {fontColorRedH1()};
document.getElementById("fontColorR").onclick = function() {fontColorYellowH1()};
document.getElementById("fontColorT").onclick = function() {fontColorDarkBlueH1()};
document.getElementById("fontColorY").onclick = function() {fontColorDarkYellowH1()};
document.getElementById("fontColorU").onclick = function() {fontColorDarkPurpleH1()};


let c = getCookie('fontColor')
if (c === 'fontColorQ') {
    fontColorBlackH1();
} else if(c === 'fontColorW'){
    fontColorGreenH1();
}else if(c === 'fontColorE'){
    fontColorRedH1();
}else if(c === 'fontColorR'){
    fontColorYellowH1();
}else if(c === 'fontColorT'){
    fontColorDarkBlueH1();
}else if(c === 'fontColorY'){
    fontColorDarkYellowH1();
}else if(c === 'fontColorU'){
    fontColorDarkPurpleH1();
}


function fontColorBlackH1() {
    document.getElementById("colorH1").style.color = " #070101";
    document.getElementById("colorH2").style.color = " #070101";
    document.getElementById("colorH3").style.color = " #070101";
    document.getElementById("colorH4").style.color = " #070101";
    document.getElementById("colorH5").style.color = " #070101";
    document.getElementById("paragraph").style.color = " #070101";
    setCookie('fontColor','fontColorQ',7);
}
function fontColorGreenH1() {
    document.getElementById("colorH1").style.color = " #12ff00";
    document.getElementById("colorH2").style.color = " #12ff00";
    document.getElementById("colorH3").style.color = " #12ff00";
    document.getElementById("colorH4").style.color = " #12ff00";
    document.getElementById("colorH5").style.color = " #12ff00";
    document.getElementById("paragraph").style.color = " #12ff00";
    setCookie('fontColor','fontColorW',7);
}

function fontColorRedH1() {
    document.getElementById("colorH1").style.color = " #fc0808";
    document.getElementById("colorH2").style.color = " #fc0808";
    document.getElementById("colorH3").style.color = " #fc0808";
    document.getElementById("colorH4").style.color = " #fc0808";
    document.getElementById("colorH5").style.color = " #fc0808";
    document.getElementById("paragraph").style.color = " #fc0808";
    setCookie('fontColor','fontColorE',7);
}
function fontColorYellowH1() {
    document.getElementById("colorH1").style.color = " #f7ff0e";
    document.getElementById("colorH2").style.color = " #f7ff0e";
    document.getElementById("colorH3").style.color = " #f7ff0e";
    document.getElementById("colorH4").style.color = " #f7ff0e";
    document.getElementById("colorH5").style.color = " #f7ff0e";
    document.getElementById("paragraph").style.color = " #f7ff0e";
    setCookie('fontColor','fontColorR',7);
}
function fontColorDarkBlueH1() {
    document.getElementById("colorH1").style.color = " #001496";
    document.getElementById("colorH2").style.color = " #001496";
    document.getElementById("colorH3").style.color = " #001496";
    document.getElementById("colorH4").style.color = " #001496";
    document.getElementById("colorH5").style.color = " #001496";
    document.getElementById("paragraph").style.color = " #001496";
    setCookie('fontColor','fontColorT',7);
}
function fontColorDarkYellowH1() {
    document.getElementById("colorH1").style.color = " #805100";
    document.getElementById("colorH2").style.color = " #805100";
    document.getElementById("colorH3").style.color = " #805100";
    document.getElementById("colorH4").style.color = " #805100";
    document.getElementById("colorH5").style.color = " #805100";
    document.getElementById("paragraph").style.color = " #805100";
    setCookie('fontColor','fontColorY',7);
}

function fontColorDarkPurpleH1() {
    document.getElementById("colorH1").style.color = " #eb05fa";
    document.getElementById("colorH2").style.color = " #eb05fa";
    document.getElementById("colorH3").style.color = " #eb05fa";
    document.getElementById("colorH4").style.color = " #eb05fa";
    document.getElementById("colorH5").style.color = " #eb05fa";
    document.getElementById("paragraph" ).style.color = " #eb05fa";
    setCookie('fontColor','fontColorU',7);
}

//////////////////////////////////////// End Change Font Color/////////////////////////////////////////////


