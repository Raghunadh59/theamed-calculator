function change() {
    var b = document.getElementsByTagName("*")[0];
    var display = document.getElementsByClassName("display")[0];
    var calculator = document.getElementsByClassName("cal")[0];
    var button = document.getElementsByClassName("button")[0];
    var but = document.getElementsByTagName("button");
    var re = document.getElementsByTagName("p")[0];

    if (document.getElementsByTagName("input")[0].checked) {
        // Light mode
        re.style.color = "#05386B";
        b.style.backgroundColor = "#88bdbc";
        b.style.color = "#05386B";
        display.style.color = "#05386B";
        display.style.border = "3px solid #05386B";
        calculator.style.border = "3px solid #05386B";
        button.style.backgroundColor = "#88bdbc";
        button.style.color = "#05386B";
        for (var i = 0; i < but.length; i++) {
            but[i].style.color = "#05386B";
            but[i].style.backgroundColor = "#88bdbc";
        }
        
     } 
    else {
        // Dark mode
        re.style.color = "aliceblue";
        b.style.backgroundColor = "rgb(26, 26, 26)";
        b.style.color = "aliceblue";
        display.style.color = "aliceblue";
        display.style.border = "3px solid aliceblue";
        calculator.style.border = "3px solid aliceblue"; 
        button.style.backgroundColor = "rgb(26, 26, 26)";
        button.style.color = "aliceblue";
        for (var i = 0; i < but.length; i++) {
            but[i].style.color = "aliceblue";
            but[i].style.backgroundColor = "rgb(26, 26, 26)";
          }
        
    }
}

let screen = document.getElementById('result');

function addToScreen(char) {
	result.innerHTML += char;
}

function clearScreen() {
	result.innerHTML = "";
}

function calculate() {
        result.innerHTML = eval(result.innerHTML);
}

/*
function change(){
    document.getElementsByTagName("*").style.backgroundColor = "#88bdbc";   
    document.getElementsByTagName("*").style.color = "#05386B";
    document.getElementsByClassName("display").style.border = "2px solid #05386B"
    document.getElementsByClassName("cal").style.border = "3px solid #05386B"
}*/

/*function change() {
    var body = document.getElementsByTagName("body")[0];
    var b = document.getElementsByTagName("*")[0];
    var display = document.getElementsByClassName("display")[0];
    var calculator = document.getElementsByClassName("cal")[0];
    var button = document.getElementsByClassName("button")[0];
    var but = document.getElementsByTagName("button");

    if (document.getElementsByTagName("input")[0].checked) {
        // Dark mode
        //body.style.backgroundColor = "#88bdbc";
        //body.style.color = "#05386B";
        b.style.backgroundColor = "#88bdbc";
        b.style.color = "#05386B";
        /*display.style.border = "3px solid #05386B";
        display.style.backgroundColor = "#88bdbc";
        display.style.color = "#05386B";
        calculator.style.border = "3px solid #05386B";
        calculator.style.backgroundColor = "#88bdbc";
        calculator.style.color = "#05386B";
        button.style.backgroundColor = "#88bdbc";
        button.style.color = "#05386B";
        for (var i = 0; i < but.length; i++) {
            but[i].style.color = "#05386B";
            but[i].style.backgroundColor = "#88bdbc";
        }

    } 
    else {
        // Light mode
        //body.style.backgroundColor = "rgb(26, 26, 26)";
        //body.style.color = "aliceblue";
        b.style.backgroundColor = "rgb(26, 26, 26)";
        b.style.color = "aliceblue";
        /*display.style.border = "3px solid aliceblue";
        display.style.backgroundColor = "rgb(26, 26, 26)";
        display.style.color = "aliceblue";
        calculator.style.border = "3px solid aliceblue";
        calculator.style.backgroundColor = "rgb(26, 26, 26)";
        calculator.style.color = "aliceblue";
        button.style.backgroundColor = "rgb(26, 26, 26)";
        button.style.color = "aliceblue";
        for (var i = 0; i < but.length; i++) {
            but[i].style.color = "aliceblue";
            but[i].style.backgroundColor = "rgb(26, 26, 26)";
          }
         
    }
}

*/