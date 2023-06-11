

function calculateTotalPrice(groceries) {
    let totalPrice = 0;
  
    for (let i = 0; i < groceries.length; i++) {
      let currentGrocery = groceries[i];
      let quantity = currentGrocery.quantity;
      let price = currentGrocery.price;
      let itemTotal = quantity * price;
  
      totalPrice += itemTotal;
    }
  
    return totalPrice;
  }

  const groceries = [
    {
      "product": "Milk",
      "quantity": 2,
      "price": 1.50
    },
    {
      "product": "bread",
      "quantity": 1,
      "price": 3.50
    },
    {
      "product": "jam",
      "quantity": 2,
      "price": 2.50
    },
    {
      "product": "butter",
      "quantity": 3,
      "price": 4
    }
  ];
  
  console.log(calculateTotalPrice(groceries));