import {
    AndroidActivityResultEventData,
    AndroidApplication,
    Application
} from "@nativescript/core";
import { FlutterwaveCommon, Response } from "./flutterwave.common";

// @ts-ignore
declare const com;

const UIManager = com.flutterwave.raveandroid.RaveUiManager;
const Constants = com.flutterwave.raveandroid.rave_java_commons.RaveConstants;
const Activity = com.flutterwave.raveandroid.RavePayActivity;

export class Flutterwave extends FlutterwaveCommon {
    private manager: any;

    constructor(UI = true as Boolean) {
        super();

        if (UI) {
            this.manager = new UIManager(Application.android.foregroundActivity);
        }
    }

    get android() {
        return this.manager;
    }

    pay(): Promise<Response> {
        return new Promise((resolve, reject) => {
            this.validate().then(() => {
                Application.android.on(
                    AndroidApplication.activityResultEvent,
                    (args: AndroidActivityResultEventData) => {
                        Application.android.off(AndroidApplication.activityResultEvent);

                        const { intent, requestCode, resultCode } = args;

                        if (requestCode === Constants.RAVE_REQUEST_CODE) {

                            const response = JSON.parse(intent.getStringExtra("response"));
                            const data = response ? response.data : null;

                            switch (resultCode) {
                                case Activity.RESULT_SUCCESS:
                                    return resolve(new Response(Flutterwave.PAYMENT_SUCCESS, data));
                                case Activity.RESULT_ERROR:
                                    return resolve(new Response(Flutterwave.PAYMENT_ERROR, data));
                                case Activity.RESULT_CANCELLED:
                                    return resolve(new Response(Flutterwave.PAYMENT_CANCELLED, data));
                                default:
                                    return reject(new Error("Flutterwave Android Result Code is invalid"));
                            }
                        } else {
                            return reject(new Error("Flutterwave Android Response Code is invalid"))
                        }
                    }
                );

                this.manager
                    .setCountry(this.country)
                    .setAmount(Number(this.amount))
                    .setCurrency(this.currency)
                    .setEmail(this.email)
                    .setfName(this.firstName)
                    .setlName(this.lastName)
                    .setPublicKey(this.publicKey)
                    .setEncryptionKey(this.encryptionKey)
                    .setTxRef(this.txRef)
                    .setPhoneNumber(this.phoneNumber)
                    .acceptAccountPayments(this.accountPayments)
                    .acceptCardPayments(this.cardPayments)
                    .acceptMpesaPayments(this.mpesaPayments)
                    .acceptAchPayments(this.achPayments)
                    .acceptGHMobileMoneyPayments(this.ghMobileMoneyPayments)
                    .acceptUgMobileMoneyPayments(this.ugMobileMoneyPayment)
                    .acceptZmMobileMoneyPayments(this.zmMobileMoneyPayments)
                    .acceptRwfMobileMoneyPayments(this.rwfMobileMoneyPayments)
                    .acceptSaBankPayments(this.saBankPayments)
                    .acceptUkPayments(this.ukPayments)
                    .acceptBankTransferPayments(this.bankTransferPayments)
                    .acceptUssdPayments(this.ussdPayments)
                    .acceptBarterPayments(this.barterPayments)
                    //.acceptFrancMobileMoneyPayments(this.francMobileMoneyPayments)
                    .isPreAuth(this.isPreAuth)
                    .onStagingEnv(this.isStaging)
                    .allowSaveCardFeature(this.saveCard)
                    .shouldDisplayFee(this.shouldDisplayFee)
                    .showStagingLabel(this.showStagingLabel)
                    .initialize();
            }).catch(e => reject(e))
        })

    }

}
