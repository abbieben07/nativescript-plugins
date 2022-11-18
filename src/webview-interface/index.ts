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
