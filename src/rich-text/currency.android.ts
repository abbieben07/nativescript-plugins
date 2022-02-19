import { EditableTextBase, View } from '@nativescript/core';
import { textProperty } from '@nativescript/core/ui/text-base';
import { FormatMoney } from './currency.common';

export const CurrencyTextField = (target: EditableTextBase, oldvalue: string, value: string) => {

    target.once(View.loadedEvent, (_) => {
        const view: android.widget.EditText = target.nativeTextViewProtected;

        //@ts-ignore
        view.removeTextChangedListener(view.listener)
        view.setText(FormatMoney(view.getText().toString(), value));

        //@ts-ignore
        if (target.textWatcher) view.removeTextChangedListener(target.textWatcher);
        //@ts-ignore
        target.textWatcher = new CurrencyTextWatcher(new WeakRef(target), value);
        //@ts-ignore
        view.addTextChangedListener(target.textWatcher);
    });
};

@NativeClass()
@Interfaces([android.text.TextWatcher])
class CurrencyTextWatcher extends java.lang.Object implements android.text.TextWatcher {
    constructor(private owner: WeakRef<EditableTextBase>, private symbol: string) {
        super();
        return global.__native(this);
    }

    afterTextChanged(s: any) { }

    beforeTextChanged(s: string, start: number, before: number, count: number) { }

    onTextChanged(s: string, start: number, before: number, count: number) {
        const owner: EditableTextBase = this.owner.get();
        const editText: android.widget.EditText = owner.nativeTextViewProtected;
        editText.removeTextChangedListener(this);

        const formatted = FormatMoney(s.toString(), this.symbol);
        editText.setText(formatted);
        editText.setSelection(formatted.length);
        textProperty.nativeValueChange(owner, formatted);

        editText.addTextChangedListener(this);
    }
}
