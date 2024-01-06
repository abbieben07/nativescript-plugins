import { ObservableArray } from '@nativescript/core'
import DropdownCommon, { itemsProperty, labelProperty, Value, valueProperty } from './dropdown.common'

export default class Dropdown extends DropdownCommon {
	_context: android.content.Context
	editText: com.google.android.material.textfield.MaterialAutoCompleteTextView
	nativeView: com.google.android.material.textfield.TextInputLayout

	public createNativeView() {
		const dropdown = new com.google.android.material.textfield.TextInputLayout(this._context)
		this.editText = new com.google.android.material.textfield.MaterialAutoCompleteTextView(this._context)
		this.editText.setOnItemClickListener(new DropdownListener(this))
		this.editText.setFocusable(false)
		const items = ['Working', 'now']
		const adapter = new android.widget.ArrayAdapter<string>(this._context, android.R.layout.simple_list_item_1, items)
		this.editText.setAdapter(adapter)
		dropdown.addView(this.editText)
		return dropdown
	}

	initNativeView(): void {
		;(this.nativeView as any).owner = this
		super.initNativeView()
	}

	disposeNativeView(): void {
		;(this.nativeView as any).owner = null
		super.disposeNativeView()
	}

	[valueProperty.setNative](value: string) {
		//this.nativeView.setSelectedItemByIndex(value)
	}

	[labelProperty.setNative](value: string) {
		this.editText.setHint(value)
	}

	[itemsProperty.setNative](value: ObservableArray<Value>) {
		console.log('Here')
		const items = Array.create(java.lang.String, value.length)
		value.forEach((e, i) => (items[i] = e.text))
		const adapter = new android.widget.ArrayAdapter<java.lang.String>(this._context, android.R.layout.simple_list_item_1, items)
		this.editText.setAdapter(adapter)
	}
}

// how to convert javascript string array to java string array in Nativescript ?

@NativeClass()
@Interfaces([android.widget.AdapterView.OnItemClickListener])
class DropdownListener extends java.lang.Object implements android.widget.AdapterView.OnItemClickListener {
	constructor(private parent: Dropdown) {
		super()
		return global.__native(this)
	}

	public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number) {
		console.log(position)
	}
}
