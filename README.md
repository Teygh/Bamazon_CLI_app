# Bamazon_CLI_app

- An Amazon like storefront App for the user to shop from the store where a collection of items are available for purchase.
- It's a terminal based app, and uses NodeJS & MySql.
- The products inventory is stored on MySql.
- At it's initial statge the app only has Customer inteface where products can only be purchased by customers.
- For future developement a Manager/Supervisor section will be added to see the stock and review the sales.


How the App works;
1- the user types Node bamazonCustomer.js into the terminal.
2- A table showing the products available will appear.
3- The user is then prompted if he would like to make a purchase.
    - If No the user is Exited from the App.
    - If Yes, the user is then promted to enter the Specific ID of the product and the Quantity they wish to purchase.
4- Upon purchasing MySql data base is updated and the purchased Items are removed from the inventory.

Please Note: In order to connect to MySql from your Labtop using NodeJs, the user needs to enter the proper connection Details (Password and Port).

