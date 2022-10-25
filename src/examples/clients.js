const dotenv = require('dotenv');
dotenv.config();

var mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
});

var customer_data = { "email": "mg992269216@hotmail.com.br" }

mercadopago.customers.create(customer_data).then(function (customer) {

  var card_data = {
    "token": "9b2d63e00d66a8c721607214cedaecda",
    "customer_id": customer.id,
    "issuer_id": "23",
    "payment_method_id": "bolbradesco"
  }

  mercadopago.card.create(card_data).then(function (card) {
    console.log(card);
  });
});

