$('document').ready(function(){

  const order = {
    burger: {
      description: "Royale with Cheese",
      price: 8.99,
      qty: 0
    },
    pizza: {
      description: "Arugula Pie",
      price: 11.99,
      qty: 0
    },
    ribs: {
      description: "Smoked Swine",
      price: 14.99,
      qty: 0
    },
    iceCream: {
      description: "Ice Cream Biscut",
      price: 7.99,
      qty: 0
    }
  }

  const totals = {
    subtotal: 0,
    taxRate: 0.0825,
    tax: 0,
    total: 0
  }

  const getSelectionPrice = function(selection) {
    return (order[selection].price);
  }

  const getSelectionDescription = function(selection) {
    return (order[selection].description);
  }

  const addSelectionToOrderList = function(orderKey) {
    let targetName = $('#item-name');
    let targetPrice = $('#item-price');
    if (order[orderKey].qty === 0) {
      $(targetName).find('ul')
                   .append(`<li>${order[orderKey].description}</li>`);
      $(targetName).find('li:last-child')
                   .addClass(`${orderKey}`);
      $(targetPrice).find('ul')
                    .append(`<li>${order[orderKey].price}</li>`);
      $(targetPrice).find('li:last-child')
                    .addClass(`${orderKey}-price`);
    }
    else {
      $(`.${orderKey}`).text(`${order[orderKey].description}  x${order[orderKey].qty + 1}`);
      $(`.${orderKey}-price`).text(`${(order[orderKey].price)*((order[orderKey].qty)+1)}`);
    }
  }

  const roundPrice = function(number, precision) {
    let factor = Math.pow(10, precision)
    return Math.round(number * factor)/factor;
  }

  const updateSubtotal = function(price) {
    return totals.subtotal + price;
  }

  const updateTax = function(price) {
    return (totals.taxRate * price) + totals.tax;
  }

  const updateTotal = function() {
    return totals.tax + totals.subtotal;
  }

  const updateItemQty = function(name) {
    order[name].qty += 1;
  }

  const updateOrderTotalFields = function(selection) {
    let price = getSelectionPrice(selection);
    totals.subtotal = updateSubtotal(price);
    totals.tax = updateTax(price);
    totals.total = updateTotal();
    $('#subtotal').text('$' + roundPrice(totals.subtotal, 2).toFixed(2));
    $('#tax').text('$' + roundPrice(totals.tax, 2).toFixed(2));
    $('#total').text('$' + roundPrice(totals.total, 2).toFixed(2));
  }

  const acceptOrders = function() {
    $('.add-option-btn').click(function(){
      event.preventDefault();
      let selection = $(this).val();
      addSelectionToOrderList(selection);
      updateItemQty(selection);
      updateOrderTotalFields(selection)
      console.log(selection);
    });
  }
  acceptOrders();
});
