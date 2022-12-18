import { ObservableArray } from '@nativescript/core'
import DropdownCommon, { itemsProperty, Value, valueProperty } from './dropdown.common'

export class Dropdown extends DropdownCommon {
	nativeView: android.widget.Spinner

	public createNativeView(): Object {
		const spinner = new android.widget.Spinner(this._context)
		//spinner.setOnSpinnerItemSelectedListener(new DropdownListener(new WeakRef(this)))
		//spinner.setOnDismissListener(new DropdownListener(new WeakRef(this)))
		//checkbox.setOnCheckedChangeListener(new CheckboxListener())
		return spinner
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
		this.nativeView.setSelectedItemByIndex(value)
	}

	[itemsProperty.setNative](_value: ObservableArray<Value>) {
		//this.nativeView.
	}

	get activeColor(): string {
		return (this.style as any).activeColor
	}
	set activeColor(color: string) {
		;(this.style as any).activeColor = color
	}

	get inactiveColor(): string {
		return (this.style as any).inactiveColor
	}
	set inactiveColor(color: string) {
		;(this.style as any).inactiveColor = color
	}
}

@NativeClass()
class DropDownAdapter extends android.widget.SpinnerAdapter implements android.widget.AdapterView.OnItemSelectedListener {
	constructor(private owner: WeakRef<Dropdown>) {
		super()
		return global.__native(this)
	}

	public getCount() {
		if (!this.owner.get()) return 0

		return this.owner.get().items.length
	}

	public isEnabled(i: number) {
		return i !== 0
	}

	public getItemId(i: number) {
		return long(i)
	}

	public hasStableIds(): boolean {
		return true
	}

	public getView(index: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
		return this._generateView(index, convertView, parent, RealizedViewType.ItemView)
	}

	public getDropDownView(index: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
		return this._generateView(index, convertView, parent, RealizedViewType.DropDownView)
	}

	private _generateView(index: number, convertView: android.view.View, parent: android.view.ViewGroup, realizedViewType: RealizedViewType): android.view.View {
		// In some strange situations owner can become null (see #181)
		if (!this.owner) {
			return null
		}

		const owner = this.owner.get()

		if (!owner) {
			return null
		}

		const view = owner._getRealizedView(convertView, realizedViewType)

		if (view) {
			if (!view.parent) {
				owner._addView(view)
				convertView = view.android
			}

			const label = view.getViewById<Label>(LABELVIEWID)
			label.text = this.getItem(index)

			// Copy root styles to view
			if (owner.style.color) {
				label.style.color = owner.style.color
			}
			if (owner.style.placeholderColor) {
				label.style.placeholderColor = owner.style.placeholderColor
			}
			label.style.textDecoration = owner.style.textDecoration

			label.style.textAlignment =
				owner.nativeView.itemsTextAlignment !== itemsTextAlignmentProperty.defaultValue && realizedViewType === 1 ? owner.nativeView.itemsTextAlignment : owner.style.textAlignment

			label.style.fontInternal = owner.style.fontInternal
			if (owner.style.fontSize) {
				label.style.fontSize = owner.style.fontSize
			}
			view.style.backgroundColor = owner.style.backgroundColor

			view.style.padding = owner.nativeView.itemsPadding !== itemsPaddingProperty.defaultValue && realizedViewType === 1 ? owner.nativeView.itemsPadding : owner.style.padding

			view.style.height = owner.style.height

			if (realizedViewType === RealizedViewType.DropDownView) {
				view.style.opacity = owner.style.opacity
			}

			;(view as any).isHintViewIn = false

			// Hint View styles
			if (index === 0) {
				if (label.style.placeholderColor) {
					label.style.color = label.style.placeholderColor
				} else {
					label.style.color = new Color(255, 148, 150, 148)
				}
				;(view as any).isHintViewIn = true

				// HACK: if there is no hint defined, make the view in the drop down virtually invisible.
				if (realizedViewType === RealizedViewType.DropDownView && (Utils.isNullOrUndefined(owner.hint) || owner.hint === '')) {
					view.height = 1
				}
				// END HACK
			}

			owner._realizedItems[realizedViewType].set(convertView, view)
		}

		return convertView
	}

	public onItemSelected(_parent: android.widget.AdapterView<any>, _view: android.view.View, _position: number, _id: number): void {
		throw new Error('Method not implemented.')
	}
	public onNothingSelected(_parent: android.widget.AdapterView<any>): void {
		throw new Error('Method not implemented.')
	}
}
