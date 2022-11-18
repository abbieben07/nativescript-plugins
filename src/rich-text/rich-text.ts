import { EditableTextBase, Property } from '@nativescript/core'
import { isNullOrUndefined } from '@nativescript/core/utils/types'
import { CurrencyTextField } from './currency'
import { DatePickerField } from './datepicker'
import { MaskedTextField } from './mask'
import { PhoneTextField } from './phone'

export const maskProperty = new Property<EditableTextBase, string>({
	name: 'mask',
	valueChanged: MaskedTextField
})

export const currencyProperty = new Property<EditableTextBase, string>({
	name: 'currency',
	valueChanged: CurrencyTextField
})

export const phoneProperty = new Property<EditableTextBase, string>({
	name: 'phone',
	valueChanged: PhoneTextField
})
export const dateProperty = new Property<EditableTextBase, string>({
	name: 'date',
	valueChanged: DatePickerField
})

export const maxDateProperty = new Property<EditableTextBase, string>({
	name: 'maxDate',
	valueChanged: (target, _oldvalue, value) => (target.maxDate = value)
})

export const minDateProperty = new Property<EditableTextBase, string>({
	name: 'minDate',
	valueChanged: (target, _oldvalue, value) => (target.minDate = value)
})

export const dateTitleProperty = new Property<EditableTextBase, string>({
	name: 'dateTitle',
	valueChanged: (target, _oldvalue, value) => (target.dateTitle = value)
})

export function installRichText(): void {
	// @ts-ignore
	maskProperty.register(EditableTextBase)
	// @ts-ignore
	currencyProperty.register(EditableTextBase)
	// @ts-ignore
	phoneProperty.register(EditableTextBase)
	// @ts-ignore
	dateProperty.register(EditableTextBase)
	// @ts-ignore
	maxDateProperty.register(EditableTextBase)
	// @ts-ignore
	minDateProperty.register(EditableTextBase)
	// @ts-ignore
	dateTitleProperty.register(EditableTextBase)
}

export function getNativeView(target: EditableTextBase) {
	return isNullOrUndefined(target.nativeTextViewProtected) ? target.nativeTextViewProtected : target.nativeView
}
