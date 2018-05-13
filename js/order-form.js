$('document').ready(function(){

  const menu = {
    burger: {
      description: "Royale with Cheese",
      price: 8.99
    },
    pizza: {
      description: "Arugula Pie",
      price: 11.99
    },
    ribs: {
      description: "Smoked Swine",
      price: 14.99
    },
    iceCream: {
      description: "Ice Cream Biscut",
      price: 7.99
    }
  }

  const order = {
    subtotal: 0,
    taxRate: 0.08,
    tax: 0,
    total: 0
  }

  const getSelectionPrice = function(selection) {
    return (menu[selection].price);
  }

  const getSelectionDescription = function(selection) {
    return (menu[selection].description);
  }

  const addSelectionToOrder = function(selection) {
    let name = getSelectionDescription(selection);
    let price = getSelectionPrice(selection);
    $('#item-name').find('ul').append('<li>'+name+'</li>');
    $('#item-price').find('ul').append('<li>'+price+'</li>');
  }

  const roundPrice = function(number, precision) {
    let factor = Math.pow(10, precision)
    return Math.round(number * factor)/factor;
  }

  const updateSubtotal = function(price) {
    return order.subtotal + price;
  }

  const updateTax = function(price) {
    return (order.taxRate * price) + order.tax;
  }

  const updateTotal = function() {
    return order.tax + order.subtotal;
  }

  const updateOrderTotalFields = function(selection) {
    let price = getSelectionPrice(selection);
    order.subtotal = updateSubtotal(price);
    order.tax = updateTax(price);
    order.total = updateTotal();
    $('#subtotal').text('$' + roundPrice(order.subtotal, 2));
    $('#tax').text('$' + roundPrice(order.tax, 2));
    $('#total').text('$' + roundPrice(order.total, 2));
  }

  const acceptOrders = function() {
    $('.add-option-btn').click(function(){
      event.preventDefault();
      addSelectionToOrder($(this).val());
      updateOrderTotalFields($(this).val())
      console.log(order);
    });
  }
  acceptOrders();
});
