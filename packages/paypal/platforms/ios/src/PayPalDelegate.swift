import Foundation

@objc public protocol PayPalDelegate {
    func onSuccess(_ approval: Any)
    func onError(_ error: Any)
    func onCancel()
}
