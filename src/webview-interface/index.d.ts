import { WebView } from '@nativescript/core'

export declare class WebViewInterface {
	constructor(webview: WebView)
<<<<<<< Updated upstream:src/webview-interface/index.d.ts
=======

	start(): Promise<any>
>>>>>>> Stashed changes:src/webview-interface/webview-interface.d.ts
	parseJSON(data: string): any
	emit(eventName: string, data: any): void
	on(eventName: string, callback: () => void): void
	off(eventName: string, callback: () => void): void
	once(eventName: string, callback: () => void): void
	call(fname: string, arg: Object, callback: (data: Object[] | Object) => void): void
	start(): Promise<unknown>
}
