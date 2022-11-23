import { PayPalResponse } from './paypal'
import PayPalCommon, { Response } from './paypal.common'

declare var com: any

export default class PayPal extends PayPalCommon {
	pay() {
		return new Promise<Response>((resolve, reject) => {
			this.validate()
				.then(() => {
					com.paypal.checkout.PayPalCheckout.registerCallbacks(
						(approval) => resolve({ code: PayPalResponse.SUCCESS, data: approval }),
						() => resolve({ code: PayPalResponse.CANCELLED }),
						(error) => resolve({ code: PayPalResponse.ERROR, data: error })
					)

					com.paypal.checkout.PayPalCheckout.startCheckout((action) => {
						const currency = com.paypal.checkout.CurrencyCode.USD
						const amount = new com.paypal.checkout.Amount.Builder().currencyCode(currency).value(this.amount).build()
						const purchaseUnit = new com.paypal.checkout.PurchaseUnit.Builder().amount(amount).build()
						const purchaseUnits = new java.util.ArrayList()
						purchaseUnits.add(purchaseUnit)

						const order = new com.paypal.checkout.Order(
							com.paypal.checkout.OrderIntent.CAPTURE,
							new com.paypal.checkout.AppContext.Builder().userAction(com.paypal.checkout.UserAction.PAY_NOW).build(),
							purchaseUnits
						)

						action.create(order, (orderId) => {})
					})
				})
				.catch((e) => reject(e))
		})
	}
}
