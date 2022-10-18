// @ts-nocheck
import { Frame } from '@nativescript/core'
import { FlutterwaveCommon, Response } from './flutterwave.common'
export class Flutterwave extends FlutterwaveCommon {
    private controller

    constructor() {
        super()
        // @ts-ignore
        this.controller = NSFlutterwave.new()
    }

    pay(): Promise<Response> {
        return new Promise((resolve, reject) => {
            this.validate()
                .then(() => {
                    const excludedPayments = []

                    //if(!this.accountPayments) excludedPayments.push("accountPayments");

                    this.controller.country = this.country
                    this.controller.currencyCode = this.currency
                    this.controller.amount = '[' + this.amount + ']'
                    this.controller.email = this.email
                    this.controller.firstName = this.firstName
                    this.controller.lastName = this.lastName
                    this.controller.phoneNumber = this.phoneNumber
                    this.controller.narration = this.narration
                    this.controller.publicKey = this.publicKey
                    this.controller.encryptionKey = this.encryptionKey
                    this.controller.txRef = this.txRef
                    this.controller.isPreAuth = this.isPreAuth
                    this.controller.isStaging = this.isStaging

                    this.controller.paymentOptionsToExclude = excludedPayments

                    this.controller.meta = [{ metaname: 'sdk', metavalue: 'ios' }]
                    this.controller.delegate = FlutterwaveDelegator.init(resolve, reject)
                    const view = Frame.topmost().currentPage.ios as UIViewController
                    this.controller.payWithView(view)
                    console.log('Meant to Launch')
                })
                .catch(reject)
        })
    }
}

@NativeClass()
// @ts-ignore
class FlutterwaveDelegator extends NSObject implements NSFlutterwaveDelegate {
    // @ts-ignore
    public static ObjCProtocols = [NSFlutterwaveDelegate]
    private resolve: any
    private reject: any

    public static init(resolve: any, reject: any) {
        const delegate = super.new() as FlutterwaveDelegator
        delegate.resolve = resolve
        delegate.reject = reject
        return delegate
    }

    onSuccess(reference, response) {
        return this.resolve(new Response(Flutterwave.PAYMENT_SUCCESS, response, reference))
    }

    onError(reference, response) {
        return this.reject(new Response(Flutterwave.PAYMENT_ERROR, response, reference))
    }

    onDismiss() {
        return this.reject(new Response(Flutterwave.PAYMENT_CANCELLED, null))
    }
}
