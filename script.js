var hey = document.getElementById("hey");
var hou = document.getElementById("hou");
var body = document.body
function hou_f(){
    hey.style.display = "none";
    hou.style.display = "block";
    body.style.backgroundColor = "white";
    document.title = "HOOOOOOOU"
};

function hey_f(){
    hey.style.display = "block";
    hou.style.display = "none";
    body.style.backgroundColor = "black";
    document.title = "HEEEEEEEEEY"
};