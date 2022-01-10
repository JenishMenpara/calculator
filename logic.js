let outdisplay = document.getElementById('outputdisplay');

function display(num){
    outdisplay.value += num;
}

function equal() {
    outdisplay.value = eval(outdisplay.value);
    
}

function clr() {
    outdisplay.value = "";
    
}

function del() {
    outdisplay.value = outdisplay.value.slice(0,-1);
    
}



