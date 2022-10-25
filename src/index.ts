import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});

import { MercadoPago } from "./model/MercadoPago";

console.log("TOKEN > ",process.env.ACCESS_TOKEN);

let mpg = new MercadoPago();

mpg.setAccessToken(process.env.ACCESS_TOKEN);

let id, url, barcode;

mpg.criarBol(10.5,"Tentativa de criar um boleto").then(
    ret => {
        id = ret.body.id;
        url = ret.body.transaction_details.external_resource_url;
        barcode = ret.response.barcode.content;

        console.log(`Boleto gerado com o ID ${id}, disponível na URL: ${url}`);
});
