const dotenv = require('dotenv');
dotenv.config();

var mercadopago = require('mercadopago');

let config = {
  access_token: process.env.ACCESS_TOKEN
}

mercadopago.configurations.setAccessToken(config.access_token);
mercadopago.configurations.sandbox = true;

var payment_data = {
  transaction_amount: 1,
  description: 'Mensalidade de site',
  payment_method_id: 'pec',
  payer: {
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    identification: {
        type: 'CPF',
        number: '19119119100'
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

  console.log(JSON.stringify(data));

}).catch(function (error) {

});

