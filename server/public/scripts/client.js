$(document).ready(onReady);
let operation = "";
function onReady(){
    //click handlers
    $('#addButton').on('click', addNum);
    $('#subtractButton').on('click', subtractNum);
    $('#multiplyButton').on('click', multiplyNum);
    $('#divideButton').on('click', divideNum);
    $('#equalsButton').on('click', equalsNum);
    $('#clearButton').on('click', clearNum);
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
//object for input values
let numObject ={
    num1: $('#firstNumber').val(),
    num2: $('#secondNumber').val(),
    operation: operation
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
    let el = $('#mathOut');
    el.empty();
    for (let i = 0; i < response.length; i++) {
    el.append(`<div>
    <p><strong>${response[i].sum}</strong></p>
    <h3>Log:</h3>
    ${response[i].num1} 
    ${response[i].operation} 
    ${response[i].num2} = 
    ${response[i].sum}
    </div>`)
    }//end for
}).catch(function(err){
    alert('error getting operations');
    console.log(err);
})//end AJAX
//clear inputs
}//end equalsNum

function clearNum(){
    console.log('in clearNum');
$('#firstNumber').val('');  
$('#secondNumber').val(''); 
}//end clearNum