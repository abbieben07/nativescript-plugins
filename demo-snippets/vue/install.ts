// @ts-nocheck
import Checkbox from '@abbieben/checkbox/vue'
import Dropdown from '@abbieben/dropdown/vue'
import { installRichText } from '@abbieben/rich-text'
import Vue from 'nativescript-vue'
import CheckboxPage from './Checkbox.vue'
import DropdownPage from './Dropdown.vue'
import FlutterwavePage from './Flutterwave.vue'
import PayPalPage from './PayPal.vue'
import PaystackPage from './Paystack.vue'
import RichTextPage from './RichText.vue'

export function installPlugin() {
	installRichText()
	Vue.use(Checkbox)
	Vue.use(Dropdown)
}

export const demos = [
	{
		name: 'Rich Text',
		path: 'richtext',
		component: RichTextPage
	},
	{
		name: 'Flutterwave',
		path: 'flutterwave',
		component: FlutterwavePage
	},
	{
		name: 'Paypal',
		path: 'paypal',
		component: PayPalPage
	},
	{
		name: 'Paystack',
		path: 'paystack',
		component: PaystackPage
	},
	{
		name: 'Checkbox',
		path: 'checkbox',
		component: CheckboxPage
	},
	{
		name: 'Dropdown',
		path: 'dropdown',
		component: DropdownPage
	}
]
