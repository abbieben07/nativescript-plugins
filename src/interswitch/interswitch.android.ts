import { Utils } from '@nativescript/core'
import InterswitchCommon from './interswitch.common'

export default class Interswitch extends InterswitchCommon {
	public pay(): Promise<Response> {
		return new Promise((resolve, reject) => {
			const info = new com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo(this.id, this.name, this.email, this.phone, this.reference, this.amount)
			com.interswitchng.iswmobilesdk.IswMobileSdk.getInstance().pay(info, new InterswitchCallback(resolve, reject))
		})
	}
}

@NativeClass()
@Interfaces([android.widget.CompoundButton.OnCheckedChangeListener])
class InterswitchCallback extends java.lang.Object implements com.interswitchng.iswmobilesdk.IswMobileSdk.IswPaymentCallback {
	constructor(private resolve, private reject) {
		super()
		return global.__native(this)
	}
	public onUserCancel(): void {
		this.reject(new Error('Transaction Was Cancelled'))
	}
	public onPaymentCompleted(result: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): void {
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

export function configuration(id: string, key: string, code: string, isProduction = false) {
	const config = new com.interswitchng.iswmobilesdk.shared.models.core.IswSdkConfig(id, key, code, '566')
	if (isProduction) {
		config.env(com.interswitchng.iswmobilesdk.shared.models.core.Environment.PRODUCTION)
	}
	com.interswitchng.iswmobilesdk.IswMobileSdk.initialize(Utils.android.getApplicationContext(), config)
}
