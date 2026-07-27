/**
 * STAAH Push Webhook Types
 * Payload structure when STAAH pushes reservation data directly to our webhook endpoint.
 * Matches: https://suissu.gitbook.io/sp/reservations/new-modified-requested-cancelled-retrievals/response-of-reservation-information
 */
export interface StaahPushCorporateBookingDetail {
    booking_source?: string;
    tax_id?: string;
    billing_company?: string;
    billing_address?: string;
    payment_information?: string;
    payment_due_date?: string;
    booker_address?: string;
    booker_taxid?: string;
    booking_type?: string;
}
export interface StaahPushCustomer {
    corporate_booking_detail?: StaahPushCorporateBookingDetail;
    first_name: string;
    last_name: string;
    email?: string;
    telephone?: string;
    address?: string;
    city?: string;
    state?: string;
    countrycode?: string;
    zip?: string;
    remarks?: string;
    cc_number?: string;
    cc_type?: string;
    cc_name?: string;
    cc_cvc?: string;
    cc_expiration_date?: string;
    cc_token?: string;
    cc_token_expiration?: string;
    cc_vault_token?: string;
    cc_tracking_id?: string;
    cc_unique_code?: string;
    cc_current_balance?: string;
    cc_activation_date?: string;
    vcc_expiration_date?: string;
    cc_virtual?: string;
    guest_lang?: string;
    tokensource?: string;
    tokentype?: string;
    token_id?: string;
}
export interface StaahPushRoomPrice {
    date: string;
    rate_id: string;
    mealplan_id?: string;
    mealplan?: string;
    tax?: string;
    pricebeforetax: string;
    priceaftertax: string;
}
export interface StaahPushRoomAddon {
    name: string;
    nights?: string;
    priceperunit?: string;
    pricemode?: string;
    price?: string;
    comment?: string;
    pricebeforetax?: string;
    tax?: string;
    taxes?: Array<{
        name?: string;
        value?: string;
    }>;
}
export interface StaahPushRoom {
    id: string;
    arrival_date: string;
    departure_date: string;
    guest_name?: string;
    first_name?: string;
    last_name?: string;
    numberofguests?: string;
    numberofadults?: string;
    numberofchildren?: string;
    max_children?: string;
    child_age?: string;
    roomstaystatus: string;
    roomreservation_id: string;
    totalbeforetax: string;
    totaltax: string;
    totalprice: string;
    price: StaahPushRoomPrice[];
    adults?: Array<{
        name?: string;
    }>;
    addons?: StaahPushRoomAddon[];
    extracomponents?: Array<{
        name?: string;
        value?: string;
    }>;
    taxes?: Array<{
        name?: string;
        value?: string;
    }>;
    withheldtaxes?: Array<{
        name?: string;
        value?: string;
    }>;
    info?: string;
    facilities?: string;
    specialrequest?: string;
    eta?: string;
    bed_type?: string;
    numberofbeds?: string;
    channel_room_id?: string;
    smoking_preference?: string;
    booking_condition?: string;
    promotion?: string;
    mealplan?: string;
    cancellation_penalties?: any[];
}
export interface StaahPushAffiliation {
    pos?: string;
    source?: string;
    OTA_Code?: string;
    companyname?: string;
    gstno?: string;
    companyaddress?: string;
}
export interface StaahPushSuPayments {
    action?: string;
    tokenid?: string;
    pgid?: string;
}
/**
 * Single reservation object in STAAH push payload.
 * status: "new" | "modified" | "cancelled" | "request"
 */
export interface StaahPushReservation {
    id: string;
    hotel_id: string;
    hotel_name?: string;
    reservation_notif_id: string;
    channel_booking_id: string;
    status: string;
    booked_at?: string;
    modified_at?: string;
    processed_at?: string;
    currencycode: string;
    paymenttype?: string;
    paymentdue?: string;
    totalprice: string;
    totaltax?: string;
    sellamount?: string;
    nettamount?: string;
    commissionamount?: string;
    discount?: string;
    deposit?: string;
    cancellation_fee?: string;
    cancelamount?: string;
    cancelreason?: string;
    customer: StaahPushCustomer;
    rooms: StaahPushRoom[];
    affiliation?: StaahPushAffiliation;
    extrafees?: Array<{
        name?: string;
        amount?: string;
    }>;
    taxes?: Array<{
        name?: string;
        amount?: string;
    }>;
    chain_id?: string;
    external_id?: string;
    otadue?: string;
    confirmationlink?: string;
    payment_charge?: string;
    booker_genius?: string;
    smoking_preference?: string;
    promotion?: string;
    thread_id?: string;
    guest_id?: string;
    numberofpets?: string;
    numberofinfants?: string;
    listingbaseprice?: string;
    bookingcharged?: string;
    amountcharged?: string;
    pgtransactionid?: string;
    su_payments?: StaahPushSuPayments;
    pg_refid?: string;
    pg_type?: string;
    vendor_booking_id?: string;
    source?: string;
}
/** Top-level webhook payload from STAAH push */
export interface StaahPushWebhookPayload {
    reservations: StaahPushReservation[];
}
/** NATS message payload forwarded from webhook-gateway to channel-service */
export interface StaahReservationPushNatsPayload {
    reservations: StaahPushReservation[];
    propertyId: string;
}
//# sourceMappingURL=staah-push.types.d.ts.map