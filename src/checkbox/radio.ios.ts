// @ts-nocheck
import { checkedProperty, RadioCommon, valueProperty } from './radio.common'
import { RadioGroup, selectedProperty } from './radiogroup'

export class Radio extends RadioCommon {
    public createNativeView(): Object {
        //@ts-ignore
        const radio = NSCheckbox.new()
        radio.frame = CGRectMake(0, 0, 24, 24)
        //@ts-ignore
        radio.borderStyle = BorderStyle.Circle
        //@ts-ignore
        radio.checkmarkStyle = CheckmarkStyle.Circle
        radio.borderLineWidth = 2
        //radio.checkmarkColor = new Color("yellow").ios;
        radio.addDelegate(CheckboxDelegate.new())
        return radio
    }

    initNativeView(): void {
        this.nativeView.owner = this
        super.initNativeView()
    }

    disposeNativeView(): void {
        this.nativeView.owner = null
        super.disposeNativeView()
    }

    [checkedProperty.setNative](value: boolean) {
        this.nativeView.isChecked = value
    }

    get activeColor(): string {
        return (this.style as any).activeColor
    }
    set activeColor(color: string) {
        (this.style as any).activeColor = color
        this.nativeView.checkboxFillColor = color
        this.nativeView.checkedBorderColor = color
    }

    get inactiveColor(): string {
        return (this.style as any).inactiveColor
    }
    set inactiveColor(color: string) {
        (this.style as any).inactiveColor = color
        this.nativeView.uncheckedBorderColor = color
    }
}

@NativeClass()
// @ts-ignore
class CheckboxDelegate extends NSObject implements NSCheckboxDelegate {
    //@ts-ignore
    static ObjCProtocols = [NSCheckboxDelegate];

    static new(): CheckboxDelegate {
        return super.new() as CheckboxDelegate
    }

    //@ts-ignore
    onCheckChange(radio: NSCheckbox) {
        const owner: Radio = (radio as any).owner

        if (owner) {
            owner.notifyPropertyChange(checkedProperty.name, radio.isChecked)
            if (owner.group && radio.isChecked && owner.group.get(selectedProperty.name) != owner.get(valueProperty.name)) {
                (owner.group as RadioGroup).setProperty(selectedProperty.name, owner.get(valueProperty.name))
            }
        }
    }
}