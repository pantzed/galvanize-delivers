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

  const getSelectionPrice = function() {
    let option = $('.add-option-btn').val();
    console.log(menu[option].price);
  }

  const getSelectionDescription = function() {
    let option = $('.add-option-btn').val();
    console.log(menu[option].description);
  }

  const addSelectionToOrder = function() {
    $('#order-table').find('.last-added').parent().append('<')
  }

  const acceptOrders = function() {
    $('.add-option-btn').click(function(){
      event.preventDefault();
      getSelectionPrice();
      getSelectionDescription();
    });
  }

  acceptOrders();

});
