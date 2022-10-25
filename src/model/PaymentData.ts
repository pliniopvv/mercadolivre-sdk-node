interface PaymentData {
  transaction_amount: number;
  description: string;
  payment_method_id: string;
  payer: Payer;
}
  
interface Payer {
  email: string;
  first_name: string;
  last_name: string;
  identification: Identification;
  address: Address;
}

interface Address {
  zip_code: string;
  street_name: string;
  street_number: string;
  neighborhood: string;
  city: string;
  federal_unit: string;
}

interface Identification {
  type: string;
  number: string;
}