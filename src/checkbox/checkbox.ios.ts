// @ts-nocheck
import { CheckboxCommon, checkedProperty } from './checkbox.common'

export class Checkbox extends CheckboxCommon {
        public createNativeView(): Object {
                //@ts-ignore
                const checkbox = NSCheckbox.new()
                checkbox.frame = CGRectMake(0, 0, 24, 24)
                // @ts-ignore
                checkbox.borderStyle = BorderStyle.Square
                // @ts-ignore
                checkbox.checkmarkStyle = CheckmarkStyle.Square
                checkbox.borderLineWidth = 3
                checkbox.borderCornerRadius = 1
                //checkbox.checkmarkColor = "white";
                checkbox.addDelegate(CheckboxDelegate.new())
                return checkbox
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

        /* get activeColor(): string {
        return (this.style as any).activeColor;
    } */
        set activeColor(color: string) {
                (this.style as any).activeColor = color
                this.nativeView.checkboxFillColor = color
                this.nativeView.checkedBorderColor = color
        }

        /* get inactiveColor(): string {
        return (this.style as any).inactiveColor;
    } */
        set inactiveColor(color: string) {
                (this.style as any).inactiveColor = color
                this.nativeView.checkboxFillColor = color
                this.nativeView.uncheckedBorderColor = color
        }
}

@NativeClass()
// @ts-ignore
class CheckboxDelegate extends NSObject implements NSCheckboxDelegate {
        // @ts-ignore
        static ObjCProtocols = [NSCheckboxDelegate];

        static new(): CheckboxDelegate {
                return super.new() as CheckboxDelegate
        }

        // @ts-ignore
        onCheckChange(checkbox: NSCheckbox) {
                const owner: Checkbox = (checkbox as any).owner

                if (owner) {
                        owner.notifyPropertyChange(checkedProperty.name, checkbox.isChecked)
                }
        }
}
