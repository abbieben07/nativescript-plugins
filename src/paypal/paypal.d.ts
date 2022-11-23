import { Response } from './paypal.common'

export default class PayPal {
	public sandbox?: boolean = false
	public currency!: string
	public client_id!: string
	public amount!: number

	public pay(): Promise<Response>
	validate(): Promise<string>

	public static SUCCESS!: string
	public static CANCELLED!: string
	public static ERROR!: string
}

export enum PayPalResponse {
	SUCCESS = 'success',
	CANCELLED = 'cancelled',
	ERROR = 'error'
}
