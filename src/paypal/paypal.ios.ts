import { PayPalResponse } from './paypal'
import PayPalCommon, { Response } from './paypal.common'

declare var PayPalAdapter: any

export default class PayPal extends PayPalCommon {
	private controller: any

	constructor() {
		super()
		this.controller = PayPalAdapter.new()
	}

	public pay(): Promise<Response> {
		return new Promise((resolve, reject) => {
			this.validate()
				.then(() => {
					this.controller.amount = this.amount

					this.controller.client_id = this.client_id
					this.controller.sandbox = this.sandbox
					this.controller.delegate = PayPalDelegator.init(resolve)
					this.controller.pay()
				})
				.catch((e) => reject(e))
		})
	}
}

@NativeClass()
//@ts-ignore
class PayPalDelegator extends NSObject implements PayPalDelegate {
	//@ts-ignore
	public static ObjCProtocols = [PayPalDelegate]
	private resolve: any

	public static init(resolve: any) {
		const delegate = super.new() as PayPalDelegator
		delegate.resolve = resolve
		return delegate
	}

	onSuccess(approval) {
		return this.resolve({ code: PayPalResponse.SUCCESS, data: approval })
	}

	onError(error) {
		return this.resolve({ code: PayPalResponse.ERROR, data: error })
	}

	onCancel() {
		return this.resolve({ code: PayPalResponse.CANCELLED })
	}
}
