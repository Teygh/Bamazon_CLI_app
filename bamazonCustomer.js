// This is a CLI app that is similar to Amazon. The instructions of what the app is capable of or its application is included in the 
// readme file.

// 1- Create a package.json File [npm init -y]

// 2- install Npm package mySql [The download link is:https://www.npmjs.com/package/mysql]
var mysql = require("mysql");
// 2- install Npm package inquirer [The download link is:https://www.npmjs.com/package/inquirer]
var inquirer = require("inquirer");

var Table = require("cli-table");

var asciify = require("asciify");

// 3 - Create connection to the MySQL database

var connection = mysql.createConnection({
    host: "localhost",

    // YOur Username
    user: "root",

    // YOur Password
    password: "",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
    productSearch();
});




function productSearch() {

    console.log("Welcome to Bamazon !!!!");
    // asciify('|| BAMAZON|| ', function(err, res){ console.log(res) });
    connection.query("SELECT * FROM products", function (err, res) {
        // console.log(res);
        // Create a new table in the CLI View using the NPM PACKAGE CLI-Table

        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantiy']
        });
        console.log("--------------------------------------");
        console.log("The Available Products for Purchase are: ");

        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }

        console.log(table.toString());
        console.log("--------------------------------------");
        welcomeUser();
    });



}

function welcomeUser() {


    inquirer
        .prompt([{
                name: "wantToBuy",
                type: "list",
                message: "Would you like to make a purchase?",
                choices: ["Yes", "No"]
            }


        ])
        .then(function (answer) {

            if (answer.wantToBuy === "Yes") {

                productBuy();
            } else {
                console.log("Thank You for Visiting BAMAZON!!!")
                connection.end();
            }

        });
}

function productBuy() {

    // connection.query("SELECT * FROM products" , function (err, res){
    //     if(err) throw err;

    inquirer
        .prompt([

            {
                name: "productId",
                type: "input",
                message: "Please Enter the ID of the Product you would like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "purchaseQty",
                type: "input",
                message: "Please Enter the Quantity of the Product you would like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (answer) {
            // var query = "SELECT product_name, product_department, price FROM products WHERE ?";
            connection.query("SELECT * FROM products WHERE ?", {
                item_id: answer.productId
            }, function (err, res) {
                // console.log(res);
                if (answer.purchaseQty > res[0].stock_quantity) {
                    console.log("The requested Quantity is not available for Purchase");
                    console.log("==================================================================================");
                    productSearch();
                } else {


                    for (var i = 0; i < res.length; i++) {
                        console.log("You have successfully Purchased " + answer.purchaseQty + " Items of " + res[0].product_name + " " + "@" + "Total Price of : " + ((res[0].price * answer.purchaseQty).toFixed(2)) + " " + "Dollars");
                    }
                    var updateStock = parseInt(res[0].stock_quantity) - parseInt(answer.purchaseQty);
                    connection.query("UPDATE products SET ? WHERE ?", [{
                                stock_quantity: updateStock
                            },
                            {
                                item_id: res[0].item_id
                            }
                        ],
                        function (err, res) {

                            console.log("==========================================================");
                            console.log("Thank you for your Purchase, Please select another Item from the  table!");
                            productSearch();

                        }
                    )

                }
            })
        })
}