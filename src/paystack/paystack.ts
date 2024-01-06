import { AWebView } from '@nativescript-community/ui-webview'
import { Frame, isAndroid, Page } from '@nativescript/core'

export class Paystack {
	public key!: string
	public email!: string
	public amount!: number
	public ref!: string
	public currency!: string
	public label?: string = 'Paystack Payment'
	public payments!: {
		card?: boolean
		bank?: boolean
		ussd?: boolean
		qr?: boolean
		mobile_money?: boolean
		bank_transfer?: boolean
	}

	channels!: string[]

	validate(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.channels = Object.entries(this.payments).map(([k, v]) => k)

			if (this.channels.length === 0) {
				return reject(new Error('A Payment Channel must be selected'))
			}
			return resolve(null)
		})
	}

	public pay(): Promise<Response> {
		return new Promise((resolve, reject) => {
			this.validate()
				.then(() => {
					const webview = new AWebView()
					webview.src = '~/www/paystack.html'
					webview.supportZoom = false
					webview.builtInZoomControls = false
					webview.displayZoomControls = false
					webview.debugMode = __DEV__
					//@ts-ignore
					webview.scalesPageToFit = true
					//@ts-ignore
					webview.scrollBarIndicator = false
					const page = new Page()
					page.actionBarHidden = true
					page.backgroundSpanUnderStatusBar = false
					if (isAndroid) {
						webview.marginTop = 24
					}
					page.content = webview
					Frame.topmost().navigate({
						create: () => page,
						backstackVisible: false
					})

					const data = {
						key: this.key,
						email: this.email,
						amount: this.amount,
						ref: this.ref,
						currency: this.currency,
						label: this.label,
						channels: this.channels
					}
					webview
						.executePromise('paystack')
						.then(({ code, transaction }: Callback) => {
							Frame.topmost().goBack()
							switch (code) {
								case Status.SUCCESS:
									return resolve(transaction)
								case Status.ERROR:
									return resolve(transaction)
								case Status.CANCELLED:
									return resolve({ code, message: 'The User cancelled the transaction' })
								default:
									return reject(new Error('Unknown Paystack Error'))
							}
						})
						.catch((e) => reject(e))
				})
				.catch((e) => reject(e))
		})
	}
}

export enum Status {
	SUCCESS = 'success',
	ERROR = 'error',
	CANCELLED = 'cancelled'
}

export interface Response {
	code: Status
	status?: Status
	message: string
	transaction?: number
	reference?: string
	trxref?: string
}

interface Callback {
	code: Status
	transaction: Response
}
