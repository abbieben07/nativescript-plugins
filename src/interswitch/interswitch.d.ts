export declare class Interswitch {
	public id!: string
	public name!: string
	public email!: string
	public phone!: string
	public amount!: number
	public reference!: string
	public currency: string

	pay(): Promise
}

export declare interface Response {
	responseCode: string
	responseDescription: string
	isSuccessful: boolean
	transactionReference: string
	amount: number
	channel: string
}
