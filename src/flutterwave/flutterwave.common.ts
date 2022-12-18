import { isNullOrUndefined } from '@nativescript/core/utils/types'
import { Flutterwave } from './flutterwave'

export abstract class FlutterwaveCommon implements Flutterwave {
	public static PAYMENT_SUCCESS: string = 'success'
	public static PAYMENT_ERROR: string = 'error'
	public static PAYMENT_CANCELLED: string = 'cancelled'

	public country!: string
	public amount!: number
	public currency!: string
	public firstName?: string
	public lastName?: string
	public email!: string
	public publicKey!: string
	public encryptionKey!: string
	public narration!: string
	public txRef!: string
	public phoneNumber!: string
	public payments: {
		account?: boolean
		card?: boolean
		mpesa?: boolean
		ghMobileMoney?: boolean
		ugMobileMoney?: boolean
		zmMobileMoney?: boolean
		rwfMobileMoney?: boolean
		saBank?: boolean
		uk?: boolean
		ach?: boolean
		bankTransfer?: boolean
		ussd?: boolean
		barter?: boolean
		francMobileMoney?: boolean
	}
	public saveCard?: boolean
	public isPreAuth?: boolean
	public isStaging?: boolean
	public shouldDisplayFee?: boolean
	public showStagingLabel?: boolean

	validate(): Promise<Response> {
		return new Promise((resolve, reject) => {
			for (const key in this) {
				if (isNullOrUndefined(this[key])) {
					return reject(new Error(`the Property "${key}" cannot be undefined`))
				}
			}
			return resolve(null)
		})
	}

	pay(): Promise<Response> {
		throw new Error('Method not implemented.')
	}
}

export interface Response {
	status: Status
	message: string
	data?: {
		txref: string
		id: number
		amount: number
		currency: string
		status: string
	}
}

export enum Status {
	SUCCESS = 'success',
	ERROR = 'error',
	CANCELLED = 'cancelled'
}
