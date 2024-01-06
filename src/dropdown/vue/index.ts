import Dropdown from '../dropdown'
export default {
	install(Vue) {
		Vue.registerElement('Dropdown', () => Dropdown, {
			model: {
				prop: 'value',
				event: 'valueChange'
			}
		})
	}
}
