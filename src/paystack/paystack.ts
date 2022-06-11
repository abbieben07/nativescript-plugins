import { WebViewInterface } from '@abbieben/webview-interface';
import { Frame, isAndroid, Page, WebView } from '@nativescript/core';

export class Paystack extends WebView {
    public key: string;
    public email: string;
    public amount: string | number;
    public ref?: string = '';
    public currency?: string = 'NGN';
    public label?: string = 'Paystack Payment';
    public useCard?: boolean = true;
    public useBank?: boolean = false;
    public useUSSD?: boolean = false;
    public useQR?: boolean = false;
    public useMobileMoney?: boolean = false;
    public useBankTransfer?: boolean = false;
    channels: string[] = [];

    validate(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.useBank) this.channels.push('bank');
            if (this.useCard) this.channels.push('card');
            if (this.useUSSD) this.channels.push('ussd');
            if (this.useQR) this.channels.push('qr');
            if (this.useMobileMoney) this.channels.push('mobile_money');
            if (this.useBankTransfer) this.channels.push('bank_transfer');

            if (this.channels.length === 0) {
                return reject(new Error('A Payment Channel must be selected'));
            }

            /* for (const key in this) {
                if (isNullOrUndefined(this[key])) {
                    return reject(new Error(`the Property "${key}" cannot be undefined`));
                }
            } */
            //console.log('here');

            return resolve(null);
        });
    }

    public pay(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.validate()
                .then(() => {
                    this.src = '~/paystack/index.html';
                    const page = new Page();
                    page.actionBarHidden = true;
                    page.backgroundSpanUnderStatusBar = false;
                    if (isAndroid) this.marginTop = 24;
                    page.content = this;
                    Frame.topmost().navigate({
                        create: () => page,
                        backstackVisible: false
                    });

                    const WVInterface = new WebViewInterface(this);
                    const data = {
                        key: this.key,
                        email: this.email,
                        amount: this.amount,
                        ref: this.ref,
                        currency: this.currency,
                        label: this.label,
                        channels: this.channels
                    }
                    const callback = ({ code, transaction }) => {
                        console.log('successful');
                        Frame.topmost().goBack();
                        switch (code) {
                            case PaystackResponse.Success:
                                return resolve(transaction);
                            case PaystackResponse.Error:
                                return resolve(new Error('i dunno'));
                            case PaystackResponse.Cancelled:
                                return reject('The User cancelled the ');
                        }
                    }
                    WVInterface.start().then(() => WVInterface.call('makePayment', data, callback));
                })
                .catch((e) => reject(e));
        });
    }
}

export enum PaystackResponse {
    Success = 0,
    Error = 1,
    Cancelled = 2
}
