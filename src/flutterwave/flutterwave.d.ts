import { Response } from './flutterwave.common';

export declare class Flutterwave {
    country: String;
    amount: String;
    currency: String;
    firstName: String;
    lastName: String;
    email: String;
    publicKey: String;
    encryptionKey: String;
    narration?: String;
    txRef: String;
    phoneNumber?: String;
    accountPayments?: Boolean;
    cardPayments?: Boolean;
    mpesaPayments?: Boolean;
    ghMobileMoneyPayments?: Boolean;
    ugMobileMoneyPayment?: Boolean;
    zmMobileMoneyPayments?: Boolean;
    rwfMobileMoneyPayments?: Boolean;
    saBankPayments?: Boolean;
    ukPayments?: Boolean;
    achPayments?: Boolean;
    bankTransferPayments?: Boolean;
    ussdPayments?: Boolean;
    barterPayments?: Boolean;
    francMobileMoneyPayments?: Boolean;
    saveCard?: Boolean;
    isPreAuth?: Boolean;
    isStaging?: Boolean;
    shouldDisplayFee?: Boolean;
    showStagingLabel?: Boolean;

    pay(): Promise<Response>;
}
