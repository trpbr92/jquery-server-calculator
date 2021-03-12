$(document).ready(onReady);

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
    console.log('in addNum');
}

function subtractNum(){
    console.log('in subtractNum');
}

function multiplyNum(){
    console.log('in multiplyNum');
}

function divideNum(){
    console.log('in divideNum');
}

function equalsNum(){
    console.log('in equalsNum');
}

function clearNum(){
    console.log('in clearNum');
}