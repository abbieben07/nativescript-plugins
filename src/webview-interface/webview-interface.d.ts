export declare class WebViewInterface {
	parseJSON(data: string): any

	emit(eventName: string, data: any): void

	on(eventName: string, callback: () => void): void

	off(eventName: string, callback: () => void): void

	once(eventName: string, callback: () => void): void

	call(fname: string, arg: Object, callback: (data: Object[] | Object) => void): void
}
