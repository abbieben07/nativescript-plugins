import { PayPalResponse } from './paypal'
import PayPalCommon, { Response } from './paypal.common'

declare var com: { paypal: { pyplcheckout: any } }

export default class PayPal extends PayPalCommon {
	static setup(context, client_id: string) {
		const config = new com.paypal.pyplcheckout.config.pyplcheckoutConfig(
			context,
			client_id,
			'',
			com.paypal.pyplcheckout.createorder.CurrencyCode.USD,
			com.paypal.pyplcheckout.createorder.UserAction.PAY_NOW
		)
		com.paypal.pyplcheckout.PayPalCheckout.setConfig(config)
	}

	pay() {
		return new Promise<Response>((resolve, reject) => {
			this.validate()
				.then(() => {
					const paypal = new com.paypal.pyplcheckout.PayPalCheckout()
					paypal.registerCallbacks(
						(approval) => resolve({ code: PayPalResponse.SUCCESS, data: approval }),
						() => resolve({ code: PayPalResponse.CANCELLED }),
						(error) => resolve({ code: PayPalResponse.ERROR, data: error })
					)

					paypal.startCheckout((action) => {
						const currency = com.paypal.pyplcheckout.createorder.CurrencyCode.USD
						const amount = new com.paypal.pyplcheckout.order.Amount.Builder().currencyCode(currency).value(this.amount.toString()).build()
						const purchaseUnit = new com.paypal.pyplcheckout.order.PurchaseUnit.Builder().amount(amount).build()
						const purchaseUnits = new java.util.ArrayList()
						purchaseUnits.add(purchaseUnit)

						const order = new com.paypal.pyplcheckout.Order(
							com.paypal.pyplcheckout.createorder.OrderIntent.CAPTURE,
							new com.paypal.pyplcheckout.AppContext.Builder().userAction(com.paypal.pyplcheckout.createorder.UserAction.PAY_NOW).build(),
							purchaseUnits
						)

						action.create(order, (orderId) => {})
					})
				})
				.catch((e) => reject(e))
		})
	}
}
