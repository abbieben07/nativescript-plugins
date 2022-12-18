import { Interswitch } from './interswitch'

export default class InterswitchCommon implements Interswitch {
	public currency: string = 'NGN'
	public id: string
	public name: string
	public email: string
	public phone: string
	public amount: number
	public reference: string
	pay() {
		throw new Error('Method not implemented.')
	}
}
