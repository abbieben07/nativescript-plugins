// @ts-nocheck
import { EditableTextBase, Property } from '@nativescript/core';
import { isNullOrUndefined } from '@nativescript/core/utils/types';
import { CurrencyTextField } from './currency';
import { DatePickerField } from './datepicker';
import { MaskedTextField } from './mask';
import { PhoneTextField } from './phone';

export const maskProperty = new Property<EditableTextBase, string>({
    name: 'mask',
    valueChanged: MaskedTextField
});

export const currencyProperty = new Property<EditableTextBase, string>({
    name: 'currency',
    valueChanged: CurrencyTextField
});

export const phoneProperty = new Property<EditableTextBase, string>({
    name: 'phone',
    valueChanged: PhoneTextField
});
export const dateProperty = new Property<EditableTextBase, string>({
    name: 'date',
    valueChanged: DatePickerField
});

export const maxDateProperty = new Property<EditableTextBase, string>({
    name: 'maxDate',

    valueChanged: (target, oldvalue, value) => (target.maxDate = value)
});

export const minDateProperty = new Property<EditableTextBase, string>({
    name: 'minDate',

    valueChanged: (target, oldvalue, value) => (target.minDate = value)
});

export const dateTitleProperty = new Property<EditableTextBase, string>({
    name: 'dateTitle',

    valueChanged: (target, oldvalue, value) => (target.dateTitle = value)
});

export function installRichText(): void {
    maskProperty.register(EditableTextBase);
    currencyProperty.register(EditableTextBase);
    phoneProperty.register(EditableTextBase);

    dateProperty.register(EditableTextBase);
    maxDateProperty.register(EditableTextBase);
    minDateProperty.register(EditableTextBase);
    dateTitleProperty.register(EditableTextBase);
}

export function getNativeView(target: EditableTextBase): any {
    return isNullOrUndefined(target.nativeTextViewProtected) ? target.nativeTextViewProtected : target.nativeView;
}
