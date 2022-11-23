import PayPalDefinition, { PayPalResponse } from './paypal'

export default class PayPalCommon implements PayPalDefinition {
	public amount: number
	public sandbox?: boolean = false
	public currency: string
	public client_id: string

	public pay(): Promise<Response> {
		throw new Error('Method not implemented.')
	}

	validate(): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.amount) {
				reject('Amount must be set')
			}
			if (!this.client_id) {
				reject('Client ID must be set')
			}
			resolve(null)
		})
	}
}

export interface Response {
	code: PayPalResponse
	data?: any
}
