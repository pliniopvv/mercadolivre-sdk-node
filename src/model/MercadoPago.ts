import mercadopago from 'mercadopago';
import { CreatePaymentPayload } from 'mercadopago/models/payment/create-payload.model';

export class MercadoPago {
    private sdk = mercadopago;
    private access_token: string;

    setAccessToken(at: string) {
        this.access_token = at;
        this.sdk.configurations.setAccessToken(at);
    }

    setSandbox() {
        this.sdk.configurations.sandbox = true;
    }

    async criarBoleto(payment: CreatePaymentPayload) {
        let ret = await this.sdk.payment.create(payment);
        return ret;
    }

    async criarBol(valor: number, titulo: string) {
        let payment_data = {
            transaction_amount: valor,
            description: titulo,
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
          // @ts-ignore
          return this.criarBoleto(payment_data);
    }

    async findPaymentById(id: number) {
        let ret = await mercadopago.payment.findById(id);
        // return ret.response.status;
        return ret;
    }

}