import { WebViewInterface } from '@abbieben/webview-interface'
import { Frame, isAndroid, Page, WebView } from '@nativescript/core'

export class Paystack extends WebView {
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
					this.src = '~/www/paystack.html'
					const page = new Page()
					page.actionBarHidden = true
					page.backgroundSpanUnderStatusBar = false
					if (isAndroid) this.marginTop = 24
					page.content = this
					Frame.topmost().navigate({
						create: () => page,
						backstackVisible: false
					})

					const WVInterface = new WebViewInterface(this)
					const data = {
						key: this.key,
						email: this.email,
						amount: this.amount,
						ref: this.ref,
						currency: this.currency,
						label: this.label,
						channels: this.channels
					}
					const callback = ({ code, transaction }: Callback) => {
						Frame.topmost().goBack()
						switch (code) {
							case Status.SUCCESS:
								return resolve(transaction)
							case Status.ERROR:
								return resolve(transaction)
							case Status.CANCELLED:
								return reject('The User cancelled the transaction')
						}
					}
					WVInterface.start().then(() => WVInterface.call('paystack', data, callback))
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
	status: Status
	message: string
	transaction: number
	reference: string
	trxref: string
}

interface Callback {
	code: Status
	transaction: Response
}
