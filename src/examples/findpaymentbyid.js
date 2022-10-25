const dotenv = require('dotenv');
dotenv.config();

var mercadopago = require('mercadopago');

let config = {
  access_token: process.env.ACCESS_TOKEN
}

mercadopago.configurations.setAccessToken(config.access_token);
mercadopago.configurations.sandbox = true;

mercadopago.payment.findById('1308917960').then(function (data) {

  console.log(JSON.stringify(data));
  console.log(data.response.status);

}).catch(function (error) {
  console.log(error);
});

