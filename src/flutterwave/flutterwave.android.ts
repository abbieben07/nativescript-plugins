import { AndroidActivityResultEventData, AndroidApplication, Application } from '@nativescript/core'
import { FlutterwaveCommon, Response } from './flutterwave.common'

declare const com

const UIManager = com.flutterwave.raveandroid.RaveUiManager
const Constants = com.flutterwave.raveandroid.rave_java_commons.RaveConstants
const Activity = com.flutterwave.raveandroid.RavePayActivity

export class Flutterwave extends FlutterwaveCommon {
	private manager: any

	constructor(UI = true as Boolean) {
		super()

		if (UI) {
			this.manager = new UIManager(Application.android.foregroundActivity)
		}
	}

	get android() {
		return this.manager
	}

	pay(): Promise<Response> {
		return new Promise((resolve, reject) => {
			this.validate()
				.then(() => {
					Application.android.on(AndroidApplication.activityResultEvent, (args: AndroidActivityResultEventData) => {
						Application.android.off(AndroidApplication.activityResultEvent)

						const { intent, requestCode, resultCode } = args

						if (requestCode === Constants.RAVE_REQUEST_CODE) {
							const response = JSON.parse(intent.getStringExtra('response'))
							const data = response ? response.data : null

							switch (resultCode) {
								case Activity.RESULT_SUCCESS:
									return resolve(new Response(Flutterwave.PAYMENT_SUCCESS, data))
								case Activity.RESULT_ERROR:
									return resolve(new Response(Flutterwave.PAYMENT_ERROR, data))
								case Activity.RESULT_CANCELLED:
									return resolve(new Response(Flutterwave.PAYMENT_CANCELLED, data))
								default:
									return reject(new Error('Flutterwave Android Result Code is invalid'))
							}
						} else {
							return reject(new Error('Flutterwave Android Response Code is invalid'))
						}
					})

					this.manager
						.setCountry(this.country)
						.setAmount(this.amount)
						.setCurrency(this.currency)
						.setEmail(this.email)
						.setfName(this.firstName)
						.setlName(this.lastName)
						.setPublicKey(this.publicKey)
						.setEncryptionKey(this.encryptionKey)
						.setTxRef(this.txRef)
						.setPhoneNumber(this.phoneNumber)
						.acceptAccountPayments(this.payments.account)
						.acceptCardPayments(this.payments.card)
						.acceptMpesaPayments(this.payments.mpesa)
						.acceptAchPayments(this.payments.ach)
						.acceptGHMobileMoneyPayments(this.payments.ghMobileMoney)
						.acceptUgMobileMoneyPayments(this.payments.ugMobileMoney)
						.acceptZmMobileMoneyPayments(this.payments.zmMobileMoney)
						.acceptRwfMobileMoneyPayments(this.payments.rwfMobileMoney)
						.acceptSaBankPayments(this.payments.saBank)
						.acceptUkPayments(this.payments.uk)
						.acceptBankTransferPayments(this.payments.bankTransfer)
						.acceptUssdPayments(this.payments.ussd)
						.acceptBarterPayments(this.payments.barter)
						.acceptFrancMobileMoneyPayments(this.payments.francMobileMoney)
						.isPreAuth(this.isPreAuth)
						.onStagingEnv(this.isStaging)
						.allowSaveCardFeature(this.saveCard)
						.shouldDisplayFee(this.shouldDisplayFee)
						.showStagingLabel(this.showStagingLabel)
						.initialize()
				})
				.catch((e) => reject(e))
		})
	}
}
