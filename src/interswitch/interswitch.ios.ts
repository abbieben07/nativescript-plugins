import InterswitchCommon from './interswitch.common'

export default class Interswitch extends InterswitchCommon {
	public pay(): Promise<Response> {
		return new Promise((resolve, reject) => {
			const info = IswPaymentInfo(this.id, this.name, this.email, this.phone, this.reference, this.amount)
			IswMobileSdk.pay(InterswitchDelegate.init(resolve, reject), info, InterswitchDelegate.init(resolve, reject))
		})
	}
}
@NativeClass()
class InterswitchDelegate extends UIViewController implements IswPaymentDelegate {
	public static ObjCProtocols = [IswPaymentDelegate]
	private resolve: any
	private reject: any

	public static init(resolve: any, reject: any) {
		const delegate = super.new() as InterswitchDelegate
		delegate.resolve = resolve
		delegate.reject = reject
		return delegate
	}

	public onUserCancel() {
		this.reject(new Error('Transaction Was Cancelled'))
	}
	public onPaymentCompleted(result: IswPaymentResult) {
		this.resolve({
			reference: result.getTransactionReference(),
			amount: result.getAmount(),
			channel: result.getChannel(),
			responseDescription: result.getResponseDescription(),
			responseCode: result.getResponseCode(),
			isSuccessful: result.isSuccessful()
		})
	}
}
