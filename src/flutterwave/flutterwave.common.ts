import { isNullOrUndefined } from '@nativescript/core/utils/types';

export abstract class FlutterwaveCommon {
    public static PAYMENT_SUCCESS: String = 'success';
    public static PAYMENT_ERROR: String = 'error';
    public static PAYMENT_CANCELLED: String = 'cancelled';

    public country: String;
    public amount: String;
    public currency: String;
    public firstName: String;
    public lastName: String;
    public email: String;
    public publicKey: String;
    public encryptionKey: String;
    public narration: String = '';
    public txRef: String;
    public phoneNumber: String = '';
    public accountPayments: Boolean = false;
    public cardPayments: Boolean = false;
    public mpesaPayments: Boolean = false;
    public ghMobileMoneyPayments: Boolean = false;
    public ugMobileMoneyPayment: Boolean = false;
    public zmMobileMoneyPayments: Boolean = false;
    public rwfMobileMoneyPayments: Boolean = false;
    public saBankPayments: Boolean = false;
    public ukPayments: Boolean = false;
    public achPayments: Boolean = false;
    public bankTransferPayments: Boolean = false;
    public ussdPayments: Boolean = false;
    public barterPayments: Boolean = false;
    public francMobileMoneyPayments: Boolean = false;
    public saveCard: Boolean = false;
    public isPreAuth: Boolean = false;
    public isStaging: Boolean = false;
    public shouldDisplayFee: Boolean = false;
    public showStagingLabel: Boolean = false;

    validate(): Promise<Response> {
        return new Promise((resolve, reject) => {
            for (const key in this) {
                if (isNullOrUndefined(this[key])) {
                    return reject(new Error(`the Property "${key}" cannot be undefined`));
                }
            }
            return resolve(null);
        });
    }
}

export class Response {
    constructor(private status: String, private data: any, private reference: String = '') { }
}
