$(document).ready(onReady);
let operation = "";
function onReady(){
    //click handlers
    $('#addButton').on('click', addNum);
    $('#subtractButton').on('click', subtractNum);
    $('#multiplyButton').on('click', multiplyNum);
    $('#divideButton').on('click', divideNum);
    $('#equalsButton').on('click', equalsNum);
}//end onReady

function addNum(){
    operation = "+";
    console.log('in addNum');
}//end addNum

function subtractNum(){
    operation = "-";
    console.log('in subtractNum');
}//end subtractNum

function multiplyNum(){
    operation = "*";
    console.log('in multiplyNum');
}//end multiplyNum

function divideNum(){
    operation = "/";
    console.log('in divideNum');
}//end divideNum

function equalsNum(){
let sum = 0;
//object for input values
let numObject ={
    num1: $('#firstNumber').val(),
    num2: $('#secondNumber').val()
}//end numObject
//conditional for math operations
if (operation == "+") {
    console.log(sum = Number(numObject.num1) + Number(numObject.num2));
} 
else if (operation == "-") {
    console.log(sum = Number(numObject.num1) - Number(numObject.num2));
} 
else if (operation == "*") {
    console.log(sum = Number(numObject.num1) * Number(numObject.num2));
}  
else if (operation == "/") {
    console.log(sum = Number(numObject.num1) / Number(numObject.num2));
} 
//clear inputs
$('#firstNumber').val('')  
$('#secondNumber').val('')  
}//end equalsNum