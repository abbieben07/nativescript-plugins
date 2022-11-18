import '@nativescript/core'
import { DatePickerDialog } from './datepicker.android'

declare module '@nativescript/core' {
	interface EditableTextBase {
		textWatcher?: globalAndroid.text.TextWatcher
		datePicker?: DatePickerDialog
		datePickerDialog?: android.app.DatePickerDialog
		dateTitle?: string
		format?: string
		maxDate?: string
		minDate?: string
		_delegate?: UITextFieldDelegate
	}
}

declare global {
	interface String {
		decode: () => string
	}
}
