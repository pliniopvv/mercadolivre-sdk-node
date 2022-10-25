const dotenv = require('dotenv');
dotenv.config();

var mercadopago = require('mercadopago');

let config = {
  access_token: process.env.ACCESS_TOKEN
}

mercadopago.configurations.setAccessToken(config.access_token);
// mercadopago.configurations.sandbox = true;

var payment_data = {
  transaction_amount: 22,
  description: "Testículit",
  payment_method_id: 'bolbradesco',
  payer: {
    email: 'anom@anom.com',
    first_name: 'Anony',
    last_name: 'mouse',
    identification: {
        type: 'CPF',
        number: '51667721054'
    },
    address:  {
        zip_code: '38408000',
        street_name: 'Tanto faz',
        street_number: 'N/A',
        neighborhood: 'N/A',
        city: 'N/A',
        federal_unit: 'MG'
    }
  }
};

mercadopago.payment.create(payment_data).then(function (data) {

  // console.log(JSON.stringify(data));
  console.log("ID > ", data.body.id);
  console.log("HTTP > ", data.body.transaction_details.external_resource_url);

}).catch(function (error) {

});

