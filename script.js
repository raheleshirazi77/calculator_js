function data(val){
    
    calc.display.value+=val; // When the key is clicked, show the value of that key in the display input that we put in the SMS display

    // So that when we click on a key and it shows it and then we click on another key and it wants to be added to it and show it next to it, we use this method (+= Instead =).
}

function ac(){
    calc.display.value="";// When the AC function is clicked and called, set its value to empty
}

function c(){
    calc.display.value=calc.display.value.slice(0 , -1); // When the C function is clicked and called, it deletes one by one
}

function equal(){
    calc.display.value= eval(calc.display.value);// This is a javascript function that receives a string value and performs mathematical operations and returns the mathematical value.
}