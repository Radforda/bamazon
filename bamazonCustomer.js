const mysql= require("mysql");
const connection=mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:'root',
    password:'Skip123!',
    database:'bamazonDB'
    
    });

function prompt2(currentValues){

    var inquirer = require('inquirer');

    function processAnswers(answers){
        updateInventory(currentValues, answers.id, answers.quantity);
               
    }
    var questions = [
        {
            message: "Enter the ID of the item you would like?",
            type: "input",
            name: "id",
        },
        {
            message: "Enter the quantity you would like?",
            type: "input",
            name: "quantity",
        }];
    inquirer.prompt(questions).then(processAnswers);

};

function prompt(currentValues){

    var inquirer = require('inquirer');

    function processAnswers(answers){
           if(answers.continue){
               prompt2(currentValues);
           }else{
               console.log("See you next time!!");
               process.exit();
            }    
    }
    var questions = [
        {
            message: "Would you like to make a purchase?",
            type: "confirm",
            name: "continue",
        }];
    inquirer.prompt(questions).then(processAnswers);
};
 
function readInventory(){
    const cTable = require('console.table');
    connection.query(
        "SELECT * FROM inventory",
              
    
        function(err, res){
            if(err){
                console.log(err);
            }
            console.log('\n');
            console.table(res            );
            prompt(res);
        })
}

function updateInventory(currentValues, idNumber, newQuantity){
    quantity=currentValues[idNumber-1].stockQuantity-newQuantity;
    if(quantity<0){
        console.log("Sorry we cannot fill you order! Make sure you request less then the currect stock next time.")
        readInventory();
    }else{
        var total=currentValues[idNumber-1].price* newQuantity;
        console.log("Your total is $"+total);
        connection.query(
            "UPDATE inventory SET ? WHERE ?",
            [
                { stockQuantity: quantity},
                {id:idNumber}
            ],
            function(err,res){
                if(err){
                    console.log("Wrong!!");
                    return;
                }
                
                readInventory();
            }
        )
    }
}

readInventory();
return;


