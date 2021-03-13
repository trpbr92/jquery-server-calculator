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
let operation = "";
//spin up server
app.listen(port, ()=>{
    console.log('server is up on:', port);
})

function mathOperations(numObject){
    //conditional for math operations
if (operation == "+") {
    return sum = Number(numObject.num1) + Number(numObject.num2);
} 
else if (operation == "-") {
    return sum = Number(numObject.num1) - Number(numObject.num2);
} 
else if (operation == "*") {
    return sum = Number(numObject.num1) * Number(numObject.num2);
}  
else if (operation == "/") {
    return sum = Number(numObject.num1) / Number(numObject.num2);
} 
}//end mathOperations
//routes
app.get('/operations', (req,res)=>{
    console.log('you go to /operations');
    res.send(operations);
})

app.post('/operations', (req,res)=>{
    console.log('in /guesses POST:', req.body);
    let numObject = req.body;
    operations.push(numObject);
    console.log('in operations array', operations);
    res.sendStatus(201);
})
