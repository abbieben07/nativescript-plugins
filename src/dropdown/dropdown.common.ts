import { Color, CssProperty, ObservableArray, Property, Style, View } from '@nativescript/core'
import DropdownDefinition from './dropdown'

export default class DropdownCommon extends View implements DropdownDefinition {
	items!: ObservableArray<Value>
	public static selectedEvent = 'selected'
	public static openedEvent = 'opened'
	public static closedEvent = 'closed'
}

export interface Value {
	text: string
	id?: number
}

export const itemsProperty = new Property<DropdownCommon, ObservableArray<Value>>({
	name: 'items'
})
itemsProperty.register(DropdownCommon)

export const valueProperty = new Property<DropdownCommon, string>({
	name: 'value'
})
valueProperty.register(DropdownCommon)

export const popupBackgroundColor = new CssProperty<Style, Color>({
	name: 'popupBackgroundColor',
	cssName: 'popup-background-color',
	defaultValue: new Color('white'),
	equalityComparer: Color.equals,
	valueConverter: (v) => new Color(v)
})
popupBackgroundColor.register(Style)

export const popupColor = new CssProperty<Style, Color>({
	name: 'popupColor',
	cssName: 'popup-color',
	defaultValue: new Color('black'),
	equalityComparer: Color.equals,
	valueConverter: (v) => new Color(v)
})
popupColor.register(Style)
