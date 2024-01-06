import PayPal
import UIKit

@objcMembers
public class PayPalAdapter: UIViewController {

    public var amount: Int
    public var currency: String? = "NG"
    public var client_id: String
    public var sandbox: Bool? = false
    public var delegate: PayPalDelegate

    public func pay() {
        let config = CheckoutConfig(clientID: self.client_id, environment: self.sandbox)

        Checkout.set(config: config)
        Checkout.start(
            createOrder: {action in
            
                let amount = PurchaseUnit.Amount(currencyCode: .usd, value: String(self.amount))
                let purchaseUnit = PurchaseUnit(amount: amount)
                let order = OrderRequest(intent: .capture, purchaseUnits: [purchaseUnit])

                action.create(order: order)
            },
            onApprove: { approval in
                self.delegate.onSuccess(approval)
            },
            onCancel: {
                self.delegate.onCancel()
            },
            onError: { error in
                self.delegate.onError(error)
            }
        )
    }
}
