$(document).ready(onReady);
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

$.ajax({
    type: 'POST',
    url: '/operations',
    data: numObject
}).then(function(response){
    console.log('back from POST with:', response);
}).catch(function(err){
    alert('error with operations');
    console.log(err);
})//end AJAX

$.ajax({
    type: 'GET',
    url: '/operations'
}).then(function(response){
    console.log('Get from operations', response);
}).catch(function(err){
    alert('error getting operations');
    console.log(err);
})//end AJAX

//clear inputs
$('#firstNumber').val('')  
$('#secondNumber').val('')  
}//end equalsNum