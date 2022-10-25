class ClientData {
    private email: string;
    private first_name: string;
    private last_name: string;
    private phone: Phone;
    private identification: Identification;
    private default_address: string;
    private address: Address;
    private description: string;
    private default_card: string;
  }
  
  interface Address {
    zip_code: string;
    street_name: string;
    street_number: string;
  }
  
  interface Identification {
    type: string;
    number: string;
  }
  
  interface Phone {
    area_code: string;
    number: string;
  }