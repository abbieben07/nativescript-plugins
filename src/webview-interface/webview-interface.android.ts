import { Device, WebView } from '@nativescript/core'
import { WebViewInterfaceCommon } from './webview-interface.common'

declare namespace com {
	namespace novacio {
		namespace webview {
			class WebviewInterface {
				emit: (name: string, data: string) => void
				//_emit: (name: string, data: string) => void
			}
		}
	}
}
export class WebViewInterface extends WebViewInterfaceCommon {
	constructor(webView: WebView) {
		super(webView)
		this.initWebView()
	}

	initWebView() {
		if (this.webView.isLoaded) {
			this.setupWebView()
		} else {
			this.webView.once(WebView.loadedEvent, () => this.setupWebView())
		}
	}

	public setupWebView() {
		;(this.webView.nativeViewProtected as android.webkit.WebView).getSettings().setJavaScriptEnabled(true)
		;(this.webView.nativeViewProtected as android.webkit.WebView).getSettings().setAllowFileAccess(true)
		;(this.webView.nativeViewProtected as android.webkit.WebView).getSettings().setAllowContentAccess(true)
		const JSInterface = new JavascriptInterface(new WeakRef(this))
		;(this.webView.nativeViewProtected as android.webkit.WebView).addJavascriptInterface(JSInterface, 'Android')
	}

	call(fname: string, arg: Object, callback: (data: any) => void) {
		const params = JSON.stringify(arg)
		if (callback) {
			this.once(fname, ({ data }: any) => callback(data))
		}
		const caller = `Bridge.call('${fname}', '${params}');`
		if (Device.sdkVersion >= '19') {
			// @ts-ignore
			;(this.webView.nativeView as android.webkit.WebView).evaluateJavascript(caller, null)
		} else {
			;(this.webView.nativeView as android.webkit.WebView).loadUrl(`javascript: ${caller}`)
		}
	}
}

@NativeClass()
class JavascriptInterface extends com.novacio.webview.WebviewInterface {
	constructor(private webViewInterface: WeakRef<WebViewInterface>) {
		super()
		return global.__native(this)
	}

	public _emit(eventName: string, jsonData: string) {
		const webViewInterface = this.webViewInterface.get()
		const data = webViewInterface.parseJSON(jsonData)
		webViewInterface.emit(eventName, data)
	}
}
