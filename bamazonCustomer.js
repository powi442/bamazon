var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "spanish",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();

});

function start() {
  connection.query("SELECT product_name, department_name FROM produce", function(err, res) {
    if (err) throw err;
    console.log(res);
  // ask the user what they would like to buy, and how much they would like to buy
    inquirer.prompt([
      {
        name: "buy",
        type: "input",
        message: "What would you like to buy?",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy? (number)",
      }
    ]).then(function(answer) {
      var ? = answer.input
      var sql = "UPDATE customers SET stock_quantity=? where stock_quantity = " ;
        con.query(sql, function (err, result) {
      if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });

      [
        {

        }
      ]
    )
    })
    })
  }
