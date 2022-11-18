import { Response } from './flutterwave.common'

export declare class Flutterwave {
	public static PAYMENT_SUCCESS: string = 'success'
	public static PAYMENT_ERROR: string = 'error'
	public static PAYMENT_CANCELLED: string = 'cancelled'

	country!: string
	amount!: number
	currency!: string
	firstName?: string
	lastName?: string
	email!: string
	Key!: string
	encryptionKey!: string
	narration!: string
	txRef!: string
	phoneNumber!: string
	payments: {
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
	saveCard?: boolean
	isPreAuth?: boolean
	isStaging?: boolean
	shouldDisplayFee?: boolean
	showStagingLabel?: boolean

	pay(): Promise<Response>
}
