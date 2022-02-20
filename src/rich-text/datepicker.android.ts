// @ts-nocheck
import { Application, EditableTextBase, View } from '@nativescript/core';
import { textProperty } from '@nativescript/core/ui/text-base';
import Theme from '@nativescript/theme';
import moment from 'moment';

export const DatePickerField = (target: EditableTextBase, _oldvalue: string, value: string): void => {
    target.once(View.loadedEvent, (_) => {
        const view: android.widget.EditText = target.nativeTextViewProtected;
        const listener = new DatePickerListener(new WeakRef(target));
        view.setOnFocusChangeListener(listener);
        view.setOnClickListener(listener);
        view.setCursorVisible(false);
        view.setShowSoftInputOnFocus(false);

        target.format = value ?? 'DD/MM/YYYY';
        target.datePicker = new DatePickerDialog(new WeakRef(target));
    });
};

@NativeClass()
@Interfaces([android.view.View.OnFocusChangeListener, android.view.View.OnClickListener])
class DatePickerListener extends java.lang.Object implements android.view.View.OnFocusChangeListener, android.view.View.OnClickListener {
    constructor(private owner: WeakRef<EditableTextBase>) {
        super();
        return global.__native(this);
    }

    public onClick(_view: globalAndroid.view.View): void {
        const owner = this.owner.get();
        if (!owner.datePicker.isAdded()) {
            owner.datePicker.show(Application.android.startActivity.getFragmentManager(), owner.dateTitle ?? 'Select Date');
        } else {
            owner.datePicker.getDialog().show();
        }
    }

    public onFocusChange(_view: globalAndroid.view.View, hasFocus: boolean): void {
        if (hasFocus) {
            const owner = this.owner.get();
            if (!owner.datePicker.isAdded()) {
                owner.datePicker.show(Application.android.startActivity.getFragmentManager(), owner.dateTitle ?? 'Select Date');
            } else {
                owner.datePicker.getDialog().show();
            }
        }
    }
}

@NativeClass()
@Interfaces([android.app.DatePickerDialog.OnDateSetListener, android.content.DialogInterface.OnDismissListener, android.content.DialogInterface.OnShowListener])
export class DatePickerDialog extends android.app.DialogFragment implements android.app.DatePickerDialog.OnDateSetListener, android.content.DialogInterface.OnDismissListener, android.content.DialogInterface.OnShowListener {
    constructor(private owner: WeakRef<EditableTextBase>) {
        super();
        return global.__native(this);
    }
    public onShow(_dialog: android.content.DialogInterface): void {}

    public onDismiss(_dialog: android.content.DialogInterface): void {}

    public onCreateDialog() {
        const owner = this.owner.get();

        if (!owner.datePickerDialog) {
            const now = moment(owner.text, owner.format) ?? moment();
            const theme = Theme.getMode() === Theme.Dark ? android.app.AlertDialog.THEME_DEVICE_DEFAULT_DARK : android.app.AlertDialog.THEME_DEVICE_DEFAULT_LIGHT;
            owner.datePickerDialog = new android.app.DatePickerDialog(Application.android.startActivity, theme, this, now.year(), now.month(), now.date());
        }

        if (!!owner.maxDate) {
            const maxDate = moment(owner.maxDate, owner.format);
            owner.datePickerDialog.getDatePicker().setMaxDate(maxDate.unix() * 1000);
        }

        if (!!owner.minDate) {
            const minDate = moment(owner.maxDate, owner.format);
            owner.datePickerDialog.getDatePicker().setMaxDate(minDate.unix() * 1000);
        }

        return owner.datePickerDialog;
    }
    public onDateSet(_view: android.widget.DatePicker, year: number, month: number, date: number) {
        const owner = this.owner.get();
        const result = moment({ year, month, date }).format(owner.format);
        //owner.text = result;

        owner.setProperty(textProperty.name, result);
        //owner.notifyPropertyChange(textProperty.name, result);
        textProperty.nativeValueChange(owner, result);
    }
}
