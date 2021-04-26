document.getElementById("q").onclick = function() {colorQ()};
document.getElementById("w").onclick = function() {colorW()};
document.getElementById("e").onclick = function() {colorE()};
document.getElementById("r").onclick = function() {colorR()};
document.getElementById("t").onclick = function() {colorT()};
document.getElementById("y").onclick = function() {colorY()};
document.getElementById("u").onclick = function() {colorU()};


var x = readCookie('color')
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