/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module skydoves {
		export module powerspinner {
			export class DefaultSpinnerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.skydoves.powerspinner.DefaultSpinnerAdapter.DefaultSpinnerViewHolder> implements com.skydoves.powerspinner.PowerSpinnerInterface<string>  {
				public static class: java.lang.Class<com.skydoves.powerspinner.DefaultSpinnerAdapter>;
				public getSpinnerView(): com.skydoves.powerspinner.PowerSpinnerView;
				public onBindViewHolder(param0: com.skydoves.powerspinner.DefaultSpinnerAdapter.DefaultSpinnerViewHolder, param1: number): void;
				public getOnSpinnerItemSelectedListener(): com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>;
				public getIndex(): number;
				public getOnSpinnerItemSelectedListener(): com.skydoves.powerspinner.OnSpinnerItemSelectedListener<string>;
				public notifyItemSelected(param0: number): void;
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>): void;
				public constructor(param0: com.skydoves.powerspinner.PowerSpinnerView);
				public setIndex(param0: number): void;
				public getItemCount(): number;
				public setItems(param0: java.util.List<any>): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.skydoves.powerspinner.DefaultSpinnerAdapter.DefaultSpinnerViewHolder;
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<string>): void;
			}
			export module DefaultSpinnerAdapter {
				export class DefaultSpinnerViewHolder {
					public static class: java.lang.Class<com.skydoves.powerspinner.DefaultSpinnerAdapter.DefaultSpinnerViewHolder>;
					public bind$powerspinner_release(param0: string, param1: com.skydoves.powerspinner.PowerSpinnerView): void;
					public constructor(param0: com.skydoves.powerspinner.databinding.PowerspinnerItemDefaultPowerBinding);
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class IconSpinnerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.skydoves.powerspinner.IconSpinnerAdapter.IconSpinnerViewHolder> implements com.skydoves.powerspinner.PowerSpinnerInterface<com.skydoves.powerspinner.IconSpinnerItem>  {
				public static class: java.lang.Class<com.skydoves.powerspinner.IconSpinnerAdapter>;
				public getSpinnerView(): com.skydoves.powerspinner.PowerSpinnerView;
				public getOnSpinnerItemSelectedListener(): com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>;
				public getIndex(): number;
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<com.skydoves.powerspinner.IconSpinnerItem>): void;
				public notifyItemSelected(param0: number): void;
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>): void;
				public constructor(param0: com.skydoves.powerspinner.PowerSpinnerView);
				public setIndex(param0: number): void;
				public getItemCount(): number;
				public getOnSpinnerItemSelectedListener(): com.skydoves.powerspinner.OnSpinnerItemSelectedListener<com.skydoves.powerspinner.IconSpinnerItem>;
				public setItems(param0: java.util.List<com.skydoves.powerspinner.IconSpinnerItem>): void;
				public setItems(param0: java.util.List<any>): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.skydoves.powerspinner.IconSpinnerAdapter.IconSpinnerViewHolder;
				public onBindViewHolder(param0: com.skydoves.powerspinner.IconSpinnerAdapter.IconSpinnerViewHolder, param1: number): void;
			}
			export module IconSpinnerAdapter {
				export class IconSpinnerViewHolder {
					public static class: java.lang.Class<com.skydoves.powerspinner.IconSpinnerAdapter.IconSpinnerViewHolder>;
					public bind$powerspinner_release(param0: com.skydoves.powerspinner.IconSpinnerItem, param1: com.skydoves.powerspinner.PowerSpinnerView): void;
					public constructor(param0: com.skydoves.powerspinner.databinding.PowerspinnerItemDefaultPowerBinding);
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class IconSpinnerItem {
				public static class: java.lang.Class<com.skydoves.powerspinner.IconSpinnerItem>;
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number);
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number, param5: number, param6: globalAndroid.graphics.Typeface, param7: java.lang.Integer, param8: java.lang.Float);
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number, param5: number);
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable);
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number, param5: number, param6: globalAndroid.graphics.Typeface);
				public getTextTypeface(): globalAndroid.graphics.Typeface;
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer);
				public getIcon(): globalAndroid.graphics.drawable.Drawable;
				public constructor(param0: string);
				public getTextSize(): java.lang.Float;
				public hashCode(): number;
				public getIconGravity(): number;
				public component2(): globalAndroid.graphics.drawable.Drawable;
				public equals(param0: any): boolean;
				public component6(): number;
				public getTextColor(): java.lang.Integer;
				public component4(): java.lang.Integer;
				public getTextStyle(): number;
				public getGravity(): java.lang.Integer;
				public component1(): string;
				public component8(): java.lang.Integer;
				public component3(): java.lang.Integer;
				public toString(): string;
				public component10(): java.lang.Integer;
				public getText(): string;
				public getIconRes(): java.lang.Integer;
				public component5(): number;
				public component9(): java.lang.Float;
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number, param5: number, param6: globalAndroid.graphics.Typeface, param7: java.lang.Integer);
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number, param5: number, param6: globalAndroid.graphics.Typeface, param7: java.lang.Integer, param8: java.lang.Float, param9: java.lang.Integer);
				public component7(): globalAndroid.graphics.Typeface;
				public constructor(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer);
				public getIconPadding(): java.lang.Integer;
				public copy(param0: string, param1: globalAndroid.graphics.drawable.Drawable, param2: java.lang.Integer, param3: java.lang.Integer, param4: number, param5: number, param6: globalAndroid.graphics.Typeface, param7: java.lang.Integer, param8: java.lang.Float, param9: java.lang.Integer): com.skydoves.powerspinner.IconSpinnerItem;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class OnSpinnerDismissListener {
				public static class: java.lang.Class<com.skydoves.powerspinner.OnSpinnerDismissListener>;
				/**
				 * Constructs a new instance of the com.skydoves.powerspinner.OnSpinnerDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDismiss(): void;
				});
				public constructor();
				public onDismiss(): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class OnSpinnerItemSelectedListener<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>>;
				/**
				 * Constructs a new instance of the com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemSelected(param0: number, param1: T, param2: number, param3: T): void;
				});
				public constructor();
				public onItemSelected(param0: number, param1: T, param2: number, param3: T): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class OnSpinnerOutsideTouchListener {
				public static class: java.lang.Class<com.skydoves.powerspinner.OnSpinnerOutsideTouchListener>;
				/**
				 * Constructs a new instance of the com.skydoves.powerspinner.OnSpinnerOutsideTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSpinnerOutsideTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): void;
				});
				public constructor();
				public onSpinnerOutsideTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class PowerSpinnerInterface<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerInterface<any>>;
				/**
				 * Constructs a new instance of the com.skydoves.powerspinner.PowerSpinnerInterface<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getIndex(): number;
					setIndex(param0: number): void;
					getSpinnerView(): com.skydoves.powerspinner.PowerSpinnerView;
					getOnSpinnerItemSelectedListener(): com.skydoves.powerspinner.OnSpinnerItemSelectedListener<T>;
					setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<T>): void;
					notifyItemSelected(param0: number): void;
					setItems(param0: java.util.List<any>): void;
					getItemCount(): number;
				});
				public constructor();
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<T>): void;
				public getSpinnerView(): com.skydoves.powerspinner.PowerSpinnerView;
				public setItems(param0: java.util.List<any>): void;
				public getOnSpinnerItemSelectedListener(): com.skydoves.powerspinner.OnSpinnerItemSelectedListener<T>;
				public getIndex(): number;
				public notifyItemSelected(param0: number): void;
				public setIndex(param0: number): void;
				public getItemCount(): number;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class PowerSpinnerPersistence {
				public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerPersistence>;
				public static getInstance(param0: globalAndroid.content.Context): com.skydoves.powerspinner.PowerSpinnerPersistence;
				public persistSelectedIndex(param0: string, param1: number): void;
				public getSelectedIndex(param0: string): number;
				public removePersistedData(param0: string): void;
				public clearAllPersistedData(): void;
			}
			export module PowerSpinnerPersistence {
				export class Companion {
					public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerPersistence.Companion>;
					public getInstance(param0: globalAndroid.content.Context): com.skydoves.powerspinner.PowerSpinnerPersistence;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class PowerSpinnerPreference {
				public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerPreference>;
				public onSetInitialValue(param0: any): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onGetDefaultValue(param0: globalAndroid.content.res.TypedArray, param1: number): any;
				public constructor(param0: globalAndroid.content.Context);
				public getPowerSpinnerView(): com.skydoves.powerspinner.PowerSpinnerView;
				public onBindViewHolder(param0: androidx.preference.PreferenceViewHolder): void;
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class PowerSpinnerView {
				public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerView>;
				public disableChangeTextWhenNotified: boolean;
				public showOrDismiss(param0: number, param1: number): void;
				public getSpinnerPopupAnimationStyle(): number;
				public setDismissWhenNotifiedItemSelected(param0: boolean): void;
				public setItems(param0: number): void;
				public onDestroy(param0: androidx.lifecycle.LifecycleOwner): void;
				public setSpinnerPopupElevation(param0: number): void;
				public getPreferenceName(): string;
				public setArrowSize(param0: com.skydoves.powerspinner.SpinnerSizeSpec): void;
				public calculateSpinnerHeight$powerspinner_release(): number;
				public show(): void;
				public isShowing(): boolean;
				public getArrowAnimationDuration(): number;
				public setPreferenceName(param0: string): void;
				public getArrowDrawable(): globalAndroid.graphics.drawable.Drawable;
				public show(param0: number): void;
				public setArrowPadding(param0: number): void;
				public setArrowDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSpinnerPopupAnimation(param0: com.skydoves.powerspinner.SpinnerAnimation): void;
				public getOnSpinnerDismissListener(): com.skydoves.powerspinner.OnSpinnerDismissListener;
				public getSpinnerRecyclerView(): androidx.recyclerview.widget.RecyclerView;
				public showOrDismiss(param0: number): void;
				public notifyItemSelected(param0: number, param1: string): void;
				public showOrDismiss(): void;
				public getArrowAnimate(): boolean;
				public setArrowAnimate(param0: boolean): void;
				public setIsFocusable(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getArrowSize(): com.skydoves.powerspinner.SpinnerSizeSpec;
				public getSelectedIndex(): number;
				public getDismissWhenNotifiedItemSelected(): boolean;
				public setArrowTint(param0: number): void;
				public setOnSpinnerDismissListener(param0: com.skydoves.powerspinner.OnSpinnerDismissListener): void;
				public setSpinnerAdapter(param0: com.skydoves.powerspinner.PowerSpinnerInterface<any>): void;
				public setSpinnerPopupWidth(param0: number): void;
				public getSpinnerPopupAnimation(): com.skydoves.powerspinner.SpinnerAnimation;
				public getSpinnerOutsideTouchListener(): com.skydoves.powerspinner.OnSpinnerOutsideTouchListener;
				public setSpinnerOutsideTouchListener(param0: com.skydoves.powerspinner.OnSpinnerOutsideTouchListener): void;
				public getArrowPadding(): number;
				public getSpinnerPopupWidth(): number;
				public setSpinnerPopupBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setArrowResource(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSpinnerItemHeight(param0: number): void;
				public getSpinnerPopupElevation(): number;
				public getSpinnerItemHeight(): number;
				public getSpinnerPopupBackground(): globalAndroid.graphics.drawable.Drawable;
				public getSpinnerBodyView(): globalAndroid.widget.FrameLayout;
				public onFinishInflate(): void;
				public getDividerSize(): number;
				public setSpinnerPopupAnimationStyle(param0: number): void;
				public clearSelectedItem(): void;
				public dismiss(): void;
				public setDisableChangeTextWhenNotified(param0: boolean): void;
				public getDebounceDuration(): number;
				public getArrowResource(): number;
				public getShowArrow(): boolean;
				public setLifecycleOwner(param0: androidx.lifecycle.LifecycleOwner): void;
				public getArrowTint(): number;
				public constructor(param0: globalAndroid.content.Context);
				public getSpinnerAdapter(): com.skydoves.powerspinner.PowerSpinnerInterface<any>;
				public getSpinnerPopupHeight(): number;
				public setItems(param0: java.util.List<any>): void;
				public setSpinnerPopupHeight(param0: number): void;
				public setSpinnerPopupMaxHeight(param0: number): void;
				public getShowDivider(): boolean;
				public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
				public setArrowAnimationDuration(param0: number): void;
				public show(param0: number, param1: number): void;
				public setDividerColor(param0: number): void;
				public selectItemByIndex(param0: number): void;
				public setShowDivider(param0: boolean): void;
				public getDividerColor(): number;
				public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>): void;
				public setDividerSize(param0: number): void;
				public setShowArrow(param0: boolean): void;
				public setArrowGravity(param0: com.skydoves.powerspinner.SpinnerGravity): void;
				public getSpinnerPopupMaxHeight(): number;
				public getArrowGravity(): com.skydoves.powerspinner.SpinnerGravity;
			}
			export module PowerSpinnerView {
				export class Builder {
					public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerView.Builder>;
					public setArrowTint(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setOnSpinnerDismissListener(param0: com.skydoves.powerspinner.OnSpinnerDismissListener): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setArrowAnimate(param0: boolean): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setArrowGravity(param0: com.skydoves.powerspinner.SpinnerGravity): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setPreferenceName(param0: string): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setDismissWhenNotifiedItemSelected(param0: boolean): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setDividerSize(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setOnSpinnerOutsideTouchListener(param0: com.skydoves.powerspinner.OnSpinnerOutsideTouchListener): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupAnimation(param0: com.skydoves.powerspinner.SpinnerAnimation): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setShowArrow(param0: boolean): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public build(): com.skydoves.powerspinner.PowerSpinnerView;
					public setArrowDrawableResource(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupBackgroundResource(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupHeight(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setShowDivider(param0: boolean): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setDisableChangeTextWhenNotified(param0: boolean): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupMaxHeight(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupBackground(param0: globalAndroid.graphics.drawable.Drawable): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public setSpinnerItemHeight(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupWidth(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setArrowPadding(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setDividerColor(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setLifecycleOwner(param0: androidx.lifecycle.LifecycleOwner): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setArrowAnimationDuration(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setOnSpinnerItemSelectedListener(param0: com.skydoves.powerspinner.OnSpinnerItemSelectedListener<any>): com.skydoves.powerspinner.PowerSpinnerView.Builder;
					public setSpinnerPopupAnimationStyle(param0: number): com.skydoves.powerspinner.PowerSpinnerView.Builder;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.skydoves.powerspinner.PowerSpinnerView.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class SpinnerAnimation {
				public static class: java.lang.Class<com.skydoves.powerspinner.SpinnerAnimation>;
				public static DROPDOWN: com.skydoves.powerspinner.SpinnerAnimation;
				public static FADE: com.skydoves.powerspinner.SpinnerAnimation;
				public static BOUNCE: com.skydoves.powerspinner.SpinnerAnimation;
				public static NORMAL: com.skydoves.powerspinner.SpinnerAnimation;
				public static valueOf(param0: string): com.skydoves.powerspinner.SpinnerAnimation;
				public static values(): androidNative.Array<com.skydoves.powerspinner.SpinnerAnimation>;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class SpinnerGravity {
				public static class: java.lang.Class<com.skydoves.powerspinner.SpinnerGravity>;
				public static START: com.skydoves.powerspinner.SpinnerGravity;
				public static TOP: com.skydoves.powerspinner.SpinnerGravity;
				public static END: com.skydoves.powerspinner.SpinnerGravity;
				public static BOTTOM: com.skydoves.powerspinner.SpinnerGravity;
				public static valueOf(param0: string): com.skydoves.powerspinner.SpinnerGravity;
				public static values(): androidNative.Array<com.skydoves.powerspinner.SpinnerGravity>;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export class SpinnerSizeSpec {
				public static class: java.lang.Class<com.skydoves.powerspinner.SpinnerSizeSpec>;
				public constructor(param0: number, param1: number);
				public getWidth(): number;
				public getHeight(): number;
				public copy(param0: number, param1: number): com.skydoves.powerspinner.SpinnerSizeSpec;
				public component2(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component1(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export module databinding {
				export class PowerspinnerItemDefaultPowerBinding {
					public static class: java.lang.Class<com.skydoves.powerspinner.databinding.PowerspinnerItemDefaultPowerBinding>;
					public itemDefaultText: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.skydoves.powerspinner.databinding.PowerspinnerItemDefaultPowerBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.skydoves.powerspinner.databinding.PowerspinnerItemDefaultPowerBinding;
					public getRoot(): androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.skydoves.powerspinner.databinding.PowerspinnerItemDefaultPowerBinding;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export module databinding {
				export class PowerspinnerLayoutBodyBinding {
					public static class: java.lang.Class<com.skydoves.powerspinner.databinding.PowerspinnerLayoutBodyBinding>;
					public body: globalAndroid.widget.FrameLayout;
					public recyclerView: androidx.recyclerview.widget.RecyclerView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.skydoves.powerspinner.databinding.PowerspinnerLayoutBodyBinding;
					public getRoot(): globalAndroid.widget.FrameLayout;
					public static bind(param0: globalAndroid.view.View): com.skydoves.powerspinner.databinding.PowerspinnerLayoutBodyBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.skydoves.powerspinner.databinding.PowerspinnerLayoutBodyBinding;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export module databinding {
				export class PowerspinnerLayoutPreferenceBinding {
					public static class: java.lang.Class<com.skydoves.powerspinner.databinding.PowerspinnerLayoutPreferenceBinding>;
					public powerSpinnerPreference: globalAndroid.widget.LinearLayout;
					public preferenceTitle: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.skydoves.powerspinner.databinding.PowerspinnerLayoutPreferenceBinding;
					public static bind(param0: globalAndroid.view.View): com.skydoves.powerspinner.databinding.PowerspinnerLayoutPreferenceBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.skydoves.powerspinner.databinding.PowerspinnerLayoutPreferenceBinding;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module powerspinner {
			export module internals {
				export class PowerSpinnerDsl {
					public static class: java.lang.Class<com.skydoves.powerspinner.internals.PowerSpinnerDsl>;
					/**
					 * Constructs a new instance of the com.skydoves.powerspinner.internals.PowerSpinnerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

//Generics information:
//com.skydoves.powerspinner.OnSpinnerItemSelectedListener:1
//com.skydoves.powerspinner.PowerSpinnerInterface:1

