import mercadopago from 'mercadopago';
import { CreatePaymentPayload } from 'mercadopago/models/payment/create-payload.model';

class MercadoPago {
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

    async findPaymentById(id: number) {
        let ret = await mercadopago.payment.findById(id);
        // return ret.response.status;
        return ret;
    }

}