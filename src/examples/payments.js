const dotenv = require('dotenv');
dotenv.config();

var mercadopago = require('mercadopago');

let config = {
  access_token: process.env.ACCESS_TOKEN
}

mercadopago.configurations.setAccessToken(config.access_token);
// mercadopago.configurations.sandbox = true;

var payment_data = {
  transaction_amount: 10,
  description: 'Xxxxx',
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '51667721054'
    },
    address:  {
        zip_code: '06233200',
        street_name: 'Av. das Nações Unidas',
        street_number: '3003',
        neighborhood: 'Bonfim',
        city: 'Osasco',
        federal_unit: 'SP'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

  // console.log(JSON.stringify(data));
  console.log("ID > ", data.body.id);
  console.log("HTTP > ", data.body.transaction_details.external_resource_url);

}).catch(function (error) {

});

