const dotenv = require('dotenv');
dotenv.config();

let config = {
    access_token: process.env.ACCESS_TOKEN
}

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);
mercadopago.configurations.sandbox = true;

let payment_methods;
async function listAll() {
    var response = await mercadopago.payment_methods.listAll();
    payment_methods = response.body;
}
listAll().then(() => {
    console.log(JSON.stringify(payment_methods));
});