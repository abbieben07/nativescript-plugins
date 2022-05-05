import FlutterwaveSDK
import UIKit

func jsonToString(_ jsonData: FlutterwaveDataResponse?) -> String {
  do {
    let data = try JSONSerialization.data(withJSONObject: jsonData!)
    guard let str = String(data: data, encoding: String.Encoding.utf8) else { return "" }
    return str
  } catch _ {
    return ""
  }
}

@objcMembers
public class NSFlutterwave: UIViewController, FlutterwavePayProtocol {

  public var amount: String?
  public var country: String?
  public var currencyCode: String?
  public var email: String? = ""
  public var firstName: String? = ""
  public var lastName: String? = ""
  public var phoneNumber: String? = ""
  public var narration: String?
  public var publicKey: String = ""
  public var encryptionKey: String = ""
  public var txRef: String?
  public var isPreAuth: Bool = false
  public var isStaging: Bool = true
  public var paymentOptionsToExclude: [String]?
  public var delegate: NSFlutterwaveDelegate?

  public func tranasctionSuccessful(flwRef: String?, responseData: FlutterwaveDataResponse?) {
    let data = jsonToString(responseData)
    self.delegate?.onSuccess(flwRef ?? "", data)
  }

  public func tranasctionFailed(flwRef: String?, responseData: FlutterwaveDataResponse?) {
    let data = jsonToString(responseData)
    self.delegate?.onError(flwRef ?? "", data)
  }

  public func onDismiss() {
    self.delegate?.onDismiss()
  }

  public func pay(view: UIViewController) -> NSFlutterwave {

    let config = FlutterwaveConfig.sharedConfig()
    config.country = self.country ?? "NG"
    config.currencyCode = self.currencyCode ?? "NGN"
    config.email = self.email
    config.firstName = self.firstName
    config.lastName = self.lastName
    config.phoneNumber = self.phoneNumber
    config.narration = self.narration ?? "Testing"
    config.publicKey = self.publicKey
    config.encryptionKey = self.encryptionKey
    config.transcationRef = self.txRef ?? "xxxxxxx"
    config.isPreAuth = self.isPreAuth
    config.isStaging = self.isStaging
    //config.paymentOptionsToExclude = self.paymentOptionsToExclude ?? []

    config.meta = [["metaname": "sdk", "metavalue": "ios"]]
    //config.delegate = Delegator.new()

    let controller = FlutterwavePayViewController()
    let nav = UINavigationController(rootViewController: controller)

    controller.amount = self.amount
    controller.delegate = self

    view.present(nav, animated: true)

    return self
  }
}
