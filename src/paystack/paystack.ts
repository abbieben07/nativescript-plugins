// @ts-ignore
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

	public pay(): Promise<any> {
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
					const callback = ({ code, transaction }) => {
						console.log('successful')
						Frame.topmost().goBack()
						switch (code) {
							case PaystackResponse.Success:
								return resolve(transaction)
							case PaystackResponse.Error:
								return resolve(new Error('i dunno'))
							case PaystackResponse.Cancelled:
								return reject('The User cancelled the ')
						}
					}
					WVInterface.start().then(() => WVInterface.call('makePayment', data, callback))
				})
				.catch((e) => reject(e))
		})
	}
}

export enum PaystackResponse {
	Success = 'success',
	Error = 'error',
	Cancelled = 'cancelled'
}
