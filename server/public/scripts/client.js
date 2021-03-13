$(document).ready(onReady);
operation = "";
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
  let addNumObject ={
      num1: $('#firstNumber').val(),
      num2: $('#secondNumber').val()
  }//end addNumObject
  return Number(addNumObject.num1) + Number(addNumObject.num2);
}//end addNum

function subtractNum(){
    operation = "-";
    console.log('in subtractNum');
  let subtractNumObject ={
      num1: $('#firstNumber').val(),
      num2: $('#secondNumber').val()
  }//end addNumObject
  return Number(subtractNumObject.num1) - Number(subtractNumObject.num2);
}//end subtractNum

function multiplyNum(){
    operation = "*";
    console.log('in multiplyNum');
  let multiplyNumObject ={
      num1: $('#firstNumber').val(),
      num2: $('#secondNumber').val()
  }//end multiplyNumObject
  return Number(multiplyNumObject.num1) * Number(multiplyNumObject.num2);
}//end multiplyNum

function divideNum(){
    operation = "/";
    console.log('in divideNum');
  let divideNumObject ={
      num1: $('#firstNumber').val(),
      num2: $('#secondNumber').val()
  }//end divideNumObject
  return Number(divideNumObject.num1) / Number(divideNumObject.num2);
}//end divideNum

function equalsNum(){
let sum = 0;
if (operation == "+") {
    console.log(addNum()+sum);
} 
else if (operation == "-") {
    console.log(subtractNum()+sum);
} 
else if (operation == "*") {
    console.log(multiplyNum()+sum);
}  
else if (operation == "/") {
    console.log(divideNum()+sum);
}   
}//end equalsNum