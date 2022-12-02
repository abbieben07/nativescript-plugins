import { PayPalResponse } from './paypal'
import PayPalCommon, { Response } from './paypal.common'

declare var com: { paypal: { checkout: any } }

export default class PayPal extends PayPalCommon {
	static setup(context, client_id: string) {
		const config = new com.paypal.checkout.config.CheckoutConfig(context, client_id, '', com.paypal.checkout.createorder.CurrencyCode.USD, com.paypal.checkout.createorder.UserAction.PAY_NOW)
		com.paypal.checkout.PayPalCheckout.setConfig(config)
	}

	pay() {
		return new Promise<Response>((resolve, reject) => {
			this.validate()
				.then(() => {
					const paypal = new com.paypal.checkout.PayPalCheckout()
					console.log('here')
					paypal.registerCallbacks(
						(approval) => resolve({ code: PayPalResponse.SUCCESS, data: approval }),
						() => resolve({ code: PayPalResponse.CANCELLED }),
						(error) => resolve({ code: PayPalResponse.ERROR, data: error })
					)

					paypal.startCheckout((action) => {
						const currency = com.paypal.checkout.createorder.CurrencyCode.USD
						const amount = new com.paypal.checkout.order.Amount.Builder().currencyCode(currency).value(this.amount.toString()).build()
						const purchaseUnit = new com.paypal.checkout.order.PurchaseUnit.Builder().amount(amount).build()
						const purchaseUnits = new java.util.ArrayList()
						purchaseUnits.add(purchaseUnit)

						const order = new com.paypal.checkout.Order(
							com.paypal.checkout.createorder.OrderIntent.CAPTURE,
							new com.paypal.checkout.AppContext.Builder().userAction(com.paypal.checkout.createorder.UserAction.PAY_NOW).build(),
							purchaseUnits
						)

						action.create(order, (orderId) => {})
					})
				})
				.catch((e) => reject(e))
		})
	}
}
