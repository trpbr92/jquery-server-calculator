//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//globals
const port = 5000;
let operations = [];
//spin up server
app.listen(port, ()=>{
    console.log('server is up on:', port);
})

function mathOperations(numObject){
    let operationSum={
        num1: numObject.num1,
        num2: numObject.num2,
        operation: numObject.operation,
        sum: ""
    }
    //conditional for math operations
if (numObject.operation == "+") {
    operationSum.sum = Number(numObject.num1) + Number(numObject.num2);
    return operations.push(operationSum);
} 
else if (numObject.operation == "-") {
    operationSum.sum = Number(numObject.num1) - Number(numObject.num2);
    return operations.push(operationSum);
} 
else if (numObject.operation == "*") {
    operationSum.sum = Number(numObject.num1) * Number(numObject.num2);
    return operations.push(operationSum);
}  
else if (numObject.operation == "/") {
    operationSum.sum = Number(numObject.num1) / Number(numObject.num2);
    return operations.push(operationSum);
} 
    
}//end mathOperations
//routes
app.get('/operations', (req,res)=>{
    console.log('you go to /operations');
    res.send(operations);
    operations = [];
})

app.post('/operations', (req,res)=>{
    console.log('in /guesses POST:', req.body);
    let numObject = req.body;
    mathOperations(numObject);
    console.log('in operations array', operations);
    res.sendStatus(200);
})
