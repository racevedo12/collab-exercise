# T-Shirt

## Scrum Master: Dimitri Lafleur

## Team Members: Anfal Fadhil, Ronny Acevedo, Vanessa Su

---

### Description

This app where people can buy and sell items. Users can view lists of items for sale and select them to add to an order. Users can also post items for sale, update post information, and remove posts.

---

### Wireframe

![welcome page](welcome.png)

![shopping area](shopping.png)

![selected item ](item.png)
---

### Models and Properties

#### Item
* Name
  - type: String
  - required: true
  
* Description
  - type: String
  - required: true
  
* Price
  - type: String
  - required: true

#### Order
* listOfItems
  - type: Array
      - type: Item
      
  - default: []

### User Story

#### MVP

-   As a user I want to see a list of all the available items for sale
-   As a user I want to search for items
-   As a user I want to click on a post to see item details
-   As a user I want to be able to select an item to buy
-   As a user I want to see a list of the items I've selected
-   As a user I want to be able to post items for sale
-   As a user I want to be able to remove items for sale
-   As a user I want to update the data on a post

#### Stretch Goals

-   As a user I want to filter posts by category, price, etc.
-   As a user I want to submit/checkout an order
-   As a user I want to be able to create a wishlist
-   As a user I want to see a list of wishlist items from all users
-   As a user I want to be able to sign up for an account
-   As a user I want to be able to log into my account
-   As a user I want to only be able to post an item if I've logged in
-   As a user I want to see a list of items that I've posted for sale if I'm logged in
-   As a user I want to remove only the items I've posted for sale
-   As a user I want to see a history of orders or items sold
-   As a user I want to be able to pay or get paid through an existing payment API (ex. Stripe, Paypal)
-   As a user I want to log in with social (Google, Facebook)
-   As a user I want to be able to rate the sellers that I buy from
