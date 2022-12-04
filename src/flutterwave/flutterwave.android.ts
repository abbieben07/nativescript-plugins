import { AndroidActivityResultEventData, AndroidApplication, Application } from '@nativescript/core'
import { FlutterwaveCommon, Response } from './flutterwave.common'

declare const com

const UIManager = com.flutterwave.raveandroid.RaveUiManager
const Constants = com.flutterwave.raveandroid.rave_java_commons.RaveConstants
const Activity = com.flutterwave.raveandroid.RavePayActivity

export class Flutterwave extends FlutterwaveCommon {
	private manager: any

	constructor(UI: boolean = true) {
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

					this.manager.setCountry(this.country)
					this.manager.setAmount(this.amount)
					this.manager.setCurrency(this.currency)
					this.manager.setEmail(this.email)
					this.manager.setfName(this.firstName)
					this.manager.setlName(this.lastName)
					this.manager.setPublicKey(this.publicKey)
					this.manager.setEncryptionKey(this.encryptionKey)
					this.manager.setTxRef(this.txRef)
					this.manager.setPhoneNumber(this.phoneNumber)
					this.manager.acceptAccountPayments(this.payments.account)
					this.manager.acceptCardPayments(this.payments.card)
					this.manager.acceptMpesaPayments(this.payments.mpesa)
					this.manager.acceptAchPayments(this.payments.ach)
					this.manager.acceptGHMobileMoneyPayments(this.payments.ghMobileMoney)
					this.manager.acceptUgMobileMoneyPayments(this.payments.ugMobileMoney)
					this.manager.acceptZmMobileMoneyPayments(this.payments.zmMobileMoney)
					this.manager.acceptRwfMobileMoneyPayments(this.payments.rwfMobileMoney)
					this.manager.acceptSaBankPayments(this.payments.saBank)
					this.manager.acceptUkPayments(this.payments.uk)
					this.manager.acceptBankTransferPayments(this.payments.bankTransfer)
					this.manager.acceptUssdPayments(this.payments.ussd)
					this.manager.acceptBarterPayments(this.payments.barter)
					//this.manager?.acceptFrancMobileMoneyPayments(this.payments.francMobileMoney)
					this.manager.isPreAuth(this.isPreAuth)
					this.manager.onStagingEnv(this.isStaging)
					this.manager.allowSaveCardFeature(this.saveCard)
					this.manager.shouldDisplayFee(this.shouldDisplayFee)
					//this.manager.showStagingLabel(this.showStagingLabel)
					this.manager.initialize()
				})
				.catch((e) => reject(e))
		})
	}
}
