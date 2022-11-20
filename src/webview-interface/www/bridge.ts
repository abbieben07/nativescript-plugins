declare const Android, iOS

class Bridge {
	static parseJSON(data: string) {
		let result!: JSON
		try {
			result = JSON.parse(data)
		} catch (e) {
			console.error(e)
		}
		return result
	}

	static stringJSON(data: JSON) {
		let result!: string
		try {
			result = JSON.stringify(data)
		} catch (e) {
			console.error(e)
		}
		return result
	}

	public static call(name: string, data: string, callback?: Function) {
		const fn: Function = window[name]
		if (typeof fn === 'function') fn(this.parseJSON(data))
	}

	public static callback(name: string, data: JSON) {
		const params = this.stringJSON(data)
		if (Android) {
			Android.emit(name, params)
		} else if (iOS) {
			iOS.postMessage({ name, params })
		} else {
			console.error('Cannot find Bridge object')
		}
	}
}
