interface PaymentMethod {
    id: string;
    name: string;
    payment_type_id: string;
    status: string;
    secure_thumbnail: string;
    thumbnail: string;
    deferred_capture: string;
    settings: (Setting | Settings2)[];
    additional_info_needed: string[];
    min_allowed_amount: number;
    max_allowed_amount: number;
    accreditation_time: number;
    financial_institutions: any[];
    processing_modes: string[];
  }
  
  interface Settings2 {
    card_number: Cardnumber;
    bin: Bin2;
    security_code: Securitycode;
  }
  
  interface Bin2 {
    pattern: string;
    installments_pattern: string;
    exclusion_pattern: string;
  }
  
  interface Setting {
    card_number: Cardnumber;
    bin: Bin;
    security_code: Securitycode;
  }
  
  interface Securitycode {
    length: number;
    card_location: string;
    mode: string;
  }
  
  interface Bin {
    pattern: string;
    installments_pattern: string;
    exclusion_pattern?: any;
  }
  
  interface Cardnumber {
    validation: string;
    length: number;
  }