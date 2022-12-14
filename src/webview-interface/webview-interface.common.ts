import { WebView } from '@nativescript/core'
import { WebViewInterface } from './webview-interface'

export class WebViewInterfaceCommon implements WebViewInterface {
	constructor(public webView: WebView) { }

	start() {
		return new Promise((resolve) => {
			if (this.webView.isLoaded) {
				resolve(null)
			} else {
				this.webView.once(WebView.loadFinishedEvent, () => resolve(null))
			}
		})
	}

	parseJSON(data: string) {
		let result!: object | object[]
		try {
			result = JSON.parse(data)
		} catch (e) {
			console.error(e)
		}
		return result
	}

	emit(eventName: string, data: any) {
		this.webView.notify({ eventName, object: this.webView, data })
	}

	on(eventName: string, callback: (data: Object[] | Object) => void) {
		this.webView.on(eventName, callback)
	}

	off(eventName: string, callback: (data: Object[] | Object) => void) {
		this.webView.off(eventName, callback)
	}

	once(eventName: string, callback: (data: Object[] | Object) => void) {
		this.webView.once(eventName, callback)
	}

	call(fname: string, arg: Object, callback: (data: Object[] | Object) => void) {
	}
}
