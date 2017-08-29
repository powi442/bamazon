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
  console.log("connected as id " + connection.threadId + "\n");
  queryProduce();
  updateProduct();

});

function queryProduce() {
  connection.query("SELECT * FROM produce", function(err, res) {
    console.log("\n");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });

}

function updateProduct() {

  connection.query("SELECT * FROM produce", function(err, results) {
    if (err) throw err;
    console.log(results);
    console.log("thisworks!");
    var choices = function() {
      var choiceArray = [];
      for (var i = 0; i < results.length; i++) {
        choiceArray.push(results[i].item_id);
        return choiceArray;
      }
    }

    inquirer.prompt([{
      name: "buy",
      type: "list",
      choices: choices,
      message: "What would you like to buy?",
    }
  ]).then(function(answer, err) {
      console.log(err);
      console.log("thisworks!");

      inquirer.prompt([{
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }

      ]).then(function(answer) {
        console.log("thisworks!");

        console.log("Computing.....\n");
        var chosenProduce;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.quantity) {
            chosenProduce = results[i];
          }
        }
        if (chosenProduce.stock_quantity < parseInt(answer.quantity)) {

          connection.query("UPDATE produce SET ? WHERE ?", [{
                item_id: answer.buy
              },
              {
                stock_quantity: answer.quantity
              }
            ],
            function(err) {
              if (error) throw err;
              console.log("Congratulations on your purchase!")
              queryProduce();
            }
          );
        } else {
          console.log("Sorry, we don't have enough inventory for you, rockstar. Try again");
          queryProduce();
        }


      });
    })
  })
}
