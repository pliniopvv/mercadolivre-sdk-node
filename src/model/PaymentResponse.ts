interface PaymentResponse {
    body: Body;
    response: Body;
    status: number;
    idempotency: string;
  }
  
  interface Body {
    id: number;
    date_created: string;
    date_approved?: any;
    date_last_updated: string;
    date_of_expiration: string;
    money_release_date?: any;
    money_release_status?: any;
    operation_type: string;
    issuer_id?: any;
    payment_method_id: string;
    payment_type_id: string;
    status: string;
    status_detail: string;
    currency_id: string;
    description: string;
    live_mode: boolean;
    sponsor_id?: any;
    authorization_code?: any;
    money_release_schema?: any;
    taxes_amount: number;
    counter_currency?: any;
    brand_id?: any;
    shipping_amount: number;
    build_version: string;
    pos_id?: any;
    store_id?: any;
    integrator_id?: any;
    platform_id?: any;
    corporation_id?: any;
    collector_id: number;
    payer: Payer;
    marketplace_owner?: any;
    metadata: Metadata;
    additional_info: Additionalinfo;
    order: Metadata;
    external_reference?: any;
    transaction_amount: number;
    transaction_amount_refunded: number;
    coupon_amount: number;
    differential_pricing_id?: any;
    deduction_schema?: any;
    barcode: Barcode;
    installments: number;
    transaction_details: Transactiondetails;
    fee_details: any[];
    charges_details: any[];
    captured: boolean;
    binary_mode: boolean;
    call_for_authorize_id?: any;
    statement_descriptor?: any;
    card: Metadata;
    notification_url?: any;
    refunds: any[];
    processing_mode: string;
    merchant_account_id?: any;
    merchant_number?: any;
    acquirer_reconciliation: any[];
    point_of_interaction: Pointofinteraction;
  }
  
  interface Pointofinteraction {
    type: string;
    business_info: Businessinfo;
  }
  
  interface Businessinfo {
    unit: string;
    sub_unit: string;
  }
  
  interface Transactiondetails {
    payment_method_reference_id: string;
    verification_code: string;
    net_received_amount: number;
    total_paid_amount: number;
    overpaid_amount: number;
    external_resource_url: string;
    installment_amount: number;
    financial_institution: string;
    payable_deferral_period?: any;
    acquirer_reference?: any;
  }
  
  interface Barcode {
    content: string;
  }
  
  interface Additionalinfo {
    available_balance?: any;
    nsu_processadora?: any;
    authentication_code?: any;
  }
  
  interface Metadata {
  }
  
  interface Payer {
    type?: any;
    id: string;
    operator_id?: any;
    email?: any;
    identification: Identification;
    phone: Phone;
    first_name?: any;
    last_name?: any;
    entity_type?: any;
  }