$(document).ready(onReady);
operation = "";
function onReady(){
    //click handlers
    $('#addButton').on('click', addNum);
    $('#subtractButton').on('click', subtractNum);
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

function equalsNum(){
let sum = 0;
if (operation == "+") {
    console.log(addNum()+sum);
} 
else if (operation == "-") {
    console.log(subtractNum()+sum);
}  



}//end equalsNum