/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export class BuildConfig {
				public static class: java.lang.Class<com.interswitchng.iswmobilesdk.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static ISW_PUBLIC_EXPONENT: string;
				public static ISW_PUBLIC_MODULUS: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export class IswMobileSdk {
				public static class: java.lang.Class<com.interswitchng.iswmobilesdk.IswMobileSdk>;
				public pay(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.IswMobileSdk.IswPaymentCallback): void;
				public cancelPayment$isw_mobile_payment_sdk_release(): void;
				public setPaymentManager$isw_mobile_payment_sdk_release(param0: com.interswitchng.iswmobilesdk.shared.statemanagers.PaymentManager): void;
				public static getInstance(): com.interswitchng.iswmobilesdk.IswMobileSdk;
				public static initialize(param0: globalAndroid.app.Application, param1: com.interswitchng.iswmobilesdk.shared.models.core.IswSdkConfig): com.interswitchng.iswmobilesdk.IswMobileSdk;
				public setResult$isw_mobile_payment_sdk_release(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): void;
				public getConfig(): com.interswitchng.iswmobilesdk.shared.models.core.IswSdkConfig;
				public getPaymentManager$isw_mobile_payment_sdk_release(): com.interswitchng.iswmobilesdk.shared.statemanagers.PaymentManager;
				public static payWith(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.IswMobileSdk.IswPaymentCallback): void;
			}
			export module IswMobileSdk {
				export class Companion {
					public static class: java.lang.Class<com.interswitchng.iswmobilesdk.IswMobileSdk.Companion>;
					public initialize(param0: globalAndroid.app.Application, param1: com.interswitchng.iswmobilesdk.shared.models.core.IswSdkConfig): com.interswitchng.iswmobilesdk.IswMobileSdk;
					public getInstance(): com.interswitchng.iswmobilesdk.IswMobileSdk;
					public payWith(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.IswMobileSdk.IswPaymentCallback): void;
				}
				export class IswPaymentCallback {
					public static class: java.lang.Class<com.interswitchng.iswmobilesdk.IswMobileSdk.IswPaymentCallback>;
					/**
					 * Constructs a new instance of the com.interswitchng.iswmobilesdk.IswMobileSdk$IswPaymentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUserCancel(): void;
						onPaymentCompleted(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): void;
					});
					public constructor();
					public onUserCancel(): void;
					public onPaymentCompleted(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): void;
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export class IswPaymentActivity implements com.interswitchng.iswmobilesdk.IswMobileSdk.IswPaymentCallback, com.interswitchng.iswmobilesdk.shared.statemanagers.StateObserver {
					public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentActivity>;
					public shouldReceiveUpdate(): boolean;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public onUserCancel(): void;
					public finish(): void;
					public onStop(): void;
					public onDestroy(): void;
					public onStateUpdated(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppState): void;
					public onResume(): void;
					public onPaymentCompleted(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): void;
				}
				export module IswPaymentActivity {
					export class Companion {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentActivity.Companion>;
						public setKEY_PAYMENT_INFO(param0: string): void;
						public getKEY_PAYMENT_INFO(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export class IswPaymentBottomSheetFragment implements com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.GestureSheetCallback {
					public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentBottomSheetFragment>;
					public paymentInfo: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onMove(param0: number): void;
					public setPaymentInfo(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo): void;
					public getPaymentInfo(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
					public dismiss(): void;
					public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppState): void;
					public onDismiss(): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module IswPaymentBottomSheetFragment {
					export class ColorState {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentBottomSheetFragment.ColorState>;
						public getRed(): number;
						public component2(): number;
						public getBlue(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: number, param1: number, param2: number): com.interswitchng.iswmobilesdk.modules.IswPaymentBottomSheetFragment.ColorState;
						public constructor(param0: number, param1: number, param2: number);
						public component1(): number;
						public getGreen(): number;
						public component3(): number;
						public toString(): string;
					}
					export class Companion {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentBottomSheetFragment.Companion>;
						public newInstance(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo): com.interswitchng.iswmobilesdk.modules.IswPaymentBottomSheetFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export class IswPaymentFragment {
					public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentFragment>;
					public paymentInfo: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
					public cancelCurrentPayment(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public setPaymentInfo(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo): void;
					public getPaymentInfo(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
					public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppState): void;
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
				export module IswPaymentFragment {
					export class Companion {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.IswPaymentFragment.Companion>;
						public newInstance(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo): com.interswitchng.iswmobilesdk.modules.IswPaymentFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module card {
					export class IswCardFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.card.IswCardFragment>;
						public constructor();
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardState): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
					export module IswCardFragment {
						export class Companion {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.card.IswCardFragment.Companion>;
							public newInstance(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo): com.interswitchng.iswmobilesdk.modules.card.IswCardFragment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module home {
					export class IswPaymentOptionsFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.home.IswPaymentOptionsFragment>;
						public constructor();
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public setOptions(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
					export module IswPaymentOptionsFragment {
						export class WhenMappings {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.home.IswPaymentOptionsFragment.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module ussdqr {
					export class IswQrFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBaseCodeFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.ussdqr.IswQrFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onClick(param0: globalAndroid.view.View): void;
					}
					export module IswQrFragment {
						export class Companion {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.ussdqr.IswQrFragment.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module ussdqr {
					export class IswUssdBankAdapter extends globalAndroid.widget.ArrayAdapter<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer> {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.ussdqr.IswUssdBankAdapter>;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>);
						public getItemId(param0: number): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
						public getItem(param0: number): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
						public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module ussdqr {
					export class IswUssdFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBaseCodeFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.ussdqr.IswUssdFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState): void;
						public onNothingSelected(param0: globalAndroid.widget.AdapterView<any>): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onItemSelected(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module wallet {
					export class IswWalletFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.IswWalletFragment>;
						public constructor();
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
					export module IswWalletFragment {
						export class Companion {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.IswWalletFragment.Companion>;
							public newInstance(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo): com.interswitchng.iswmobilesdk.modules.wallet.IswWalletFragment;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.IswWalletFragment.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module wallet {
					export module fragments {
						export class IswWalletCardsFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.fragments.IswWalletCardsFragment>;
							public constructor();
							public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module wallet {
					export module fragments {
						export class IswWalletFormFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.fragments.IswWalletFormFragment>;
							public constructor();
							public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module wallet {
					export module utils {
						export class DisablingLayoutManager {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.utils.DisablingLayoutManager>;
							public canScrollHorizontally(): boolean;
							public setEnabled(param0: boolean): void;
							public constructor(param0: globalAndroid.content.Context);
							public canScrollVertically(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module wallet {
					export module utils {
						export class IswCardAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.interswitchng.iswmobilesdk.modules.wallet.utils.IswCardAdapter.IswCardViewHolder> {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.utils.IswCardAdapter>;
							public onBindViewHolder(param0: com.interswitchng.iswmobilesdk.modules.wallet.utils.IswCardAdapter.IswCardViewHolder, param1: number): void;
							public getItemCount(): number;
							public constructor(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>, param1: androidx.recyclerview.widget.RecyclerView, param2: com.interswitchng.iswmobilesdk.modules.wallet.utils.SingleItemSnapHelper, param3: any<any,any>);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.interswitchng.iswmobilesdk.modules.wallet.utils.IswCardAdapter.IswCardViewHolder;
						}
						export module IswCardAdapter {
							export class IswCardViewHolder {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.utils.IswCardAdapter.IswCardViewHolder>;
								public bindCard(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod): void;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module modules {
				export module wallet {
					export module utils {
						export class SingleItemSnapHelper {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.modules.wallet.utils.SingleItemSnapHelper>;
							public constructor();
							public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export class IswConstants {
					public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.IswConstants>;
					public static INSTANCE: com.interswitchng.iswmobilesdk.shared.IswConstants;
					public static ecashName: string;
					public static KEY_PAYMENT_INFO: string;
					public static ANIMATION_DURATION: number;
					public static MERCHANT_DETAILS: string;
					public static USSD_GENERATE: string;
					public static QR_GENERATE: string;
					public static USSD_BANKS: string;
					public static QR_CONFIRM: string;
					public static WALLET_ENDPOINT: string;
					public static AUTH_ENDPOINT: string;
					public static CARD_PAY_ENDPOINT: string;
					public static CARD_VERIFY_TOKEN_ENDPOINT: string;
					public static CARD_BIN_CONFIG_ENDPOINT: string;
					public getVisaCallbackUrl(): string;
					public getBaseUrl(): string;
					public getVisaAuthenticateUrl(): string;
					public getCardBaseUrl(): string;
					public getAuthBaseUrl(): string;
				}
				export module IswConstants {
					export class WhenMappings {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.IswConstants.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export abstract class IswBaseCodeFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswBaseCodeFragment>;
						public constructor();
						public showConfirmationAlert(param0: string, param1: string): void;
						public startStatusCheck(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export abstract class IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment>;
						public getPaymentInfo(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
						public constructor();
						public getIdTag(): string;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public getStateManager(): com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public getParent(): com.interswitchng.iswmobilesdk.modules.IswPaymentFragment;
						public toast(param0: string): void;
						public cancelCurrentPayment(): void;
						public onClick(param0: globalAndroid.view.View): void;
						public isSetup(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export class IswLoaderFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public setState(param0: com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
					export module IswLoaderFragment {
						export abstract class LoadingState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState>;
						}
						export module LoadingState {
							export class ErrorLoading extends com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState.ErrorLoading>;
								public getCancelAction(): any;
								public component1(): string;
								public constructor(param0: string, param1: any, param2: com.interswitchng.iswmobilesdk.shared.models.state.AppAction);
								public getErrorMessage(): string;
								public toString(): string;
								public component3(): com.interswitchng.iswmobilesdk.shared.models.state.AppAction;
								public component2(): any;
								public getRetryAction(): com.interswitchng.iswmobilesdk.shared.models.state.AppAction;
								public equals(param0: any): boolean;
								public copy(param0: string, param1: any, param2: com.interswitchng.iswmobilesdk.shared.models.state.AppAction): com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState.ErrorLoading;
								public hashCode(): number;
							}
							export class Loading extends com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState.Loading>;
								public component1(): string;
								public toString(): string;
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.fragments.IswLoaderFragment.LoadingState.Loading;
								public equals(param0: any): boolean;
								public getMessage(): string;
								public constructor(param0: string);
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export class IswOtpFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswOtpFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onDestroy(): void;
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.OTPState): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export class IswPinFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswPinFragment>;
						public constructor();
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardState): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onClick(param0: globalAndroid.view.View): void;
					}
					export module IswPinFragment {
						export class Companion {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswPinFragment.Companion>;
							public newInstance(): com.interswitchng.iswmobilesdk.shared.fragments.IswPinFragment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export class IswResultFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswResultFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
					export module IswResultFragment {
						export class Companion {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswResultFragment.Companion>;
							public getKEY_RESULT(): string;
							public newInstance(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): com.interswitchng.iswmobilesdk.shared.fragments.IswResultFragment;
							public setKEY_RESULT(param0: string): void;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswResultFragment.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module fragments {
					export class IswVisaFragment extends com.interswitchng.iswmobilesdk.shared.fragments.IswBasePaymentFragment {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswVisaFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onClick(param0: globalAndroid.view.View): void;
						public setState(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaState): void;
					}
					export module IswVisaFragment {
						export class Companion {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswVisaFragment.Companion>;
							public newInstance(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaState): com.interswitchng.iswmobilesdk.shared.fragments.IswVisaFragment;
						}
						export class VisaCallback extends com.interswitchng.iswmobilesdk.shared.views.webview.VisaWebClient.VisaCallback {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.fragments.IswVisaFragment.VisaCallback>;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.fragments.IswVisaFragment);
							public onLoading(): void;
							public onError(): void;
							public onLoadComplete(): void;
							public onCallbackLoaded(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module library {
						export class CardService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.library.CardService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.library.CardService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBinConfig(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								pay(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment, param2: string, param3: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								resendOtp(param0: string, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								confirmOtp(param0: string, param1: string, param2: boolean, param3: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								checkVisaStatus(param0: number, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								authenticateVisa(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo, param2: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							});
							public constructor();
							public authenticateVisa(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo, param2: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public confirmOtp(param0: string, param1: string, param2: boolean, param3: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public pay(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment, param2: string, param3: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public resendOtp(param0: string, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public getBinConfig(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public checkVisaStatus(param0: number, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module library {
						export class MerchantInfoService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.library.MerchantInfoService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.library.MerchantInfoService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getResponse(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
								hasMerchantDetails(): boolean;
								getMerchantDetails(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							});
							public constructor();
							public getResponse(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
							public getMerchantDetails(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public hasMerchantDetails(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module library {
						export class UssdQrService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.library.UssdQrService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.library.UssdQrService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasQr(): boolean;
								hasBanks(): boolean;
								qrData(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData;
								banks(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>;
								getBanks(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								generateQr(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								generateUssd(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest, param2: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
								confirmCode(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: any<any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							});
							public constructor();
							public generateQr(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public confirmCode(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: any<any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public generateUssd(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest, param2: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public hasBanks(): boolean;
							public hasQr(): boolean;
							public qrData(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData;
							public banks(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>;
							public getBanks(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module library {
						export class WalletService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.library.WalletService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.library.WalletService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getResponse(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet;
								hasWalletResponse(): boolean;
								getUserWallet(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							});
							public constructor();
							public getUserWallet(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
							public hasWalletResponse(): boolean;
							public getResponse(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module retrofit {
						export class IswAuthService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswAuthService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswAuthService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getToken(param0: string, param1: string): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.core.AuthToken>;
							});
							public constructor();
							public getToken(param0: string, param1: string): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.core.AuthToken>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module retrofit {
						export class IswCardPaymentService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswCardPaymentService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswCardPaymentService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								payCard(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
								verifyOtp(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.OtpRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
								getVisaStatus(param0: string, param1: number): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
								authenticateVisa(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
								getBinConfig(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardBinConfigRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardBinConfigResponse>;
							});
							public constructor();
							public authenticateVisa(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
							public verifyOtp(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.OtpRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
							public getBinConfig(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardBinConfigRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardBinConfigResponse>;
							public payCard(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
							public getVisaStatus(param0: string, param1: number): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module interfaces {
					export module retrofit {
						export class IswPaymentService {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswPaymentService>;
							/**
							 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswPaymentService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMerchantDetails(): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>;
								getBanks(): retrofit2.Call<java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>>;
								getQr(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>;
								getUssd(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>;
								confirmCode(param0: number, param1: string, param2: string): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse>;
								getWalletCards(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>;
							});
							public constructor();
							public confirmCode(param0: number, param1: string, param2: string): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse>;
							public getQr(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>;
							public getWalletCards(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>;
							public getBanks(): retrofit2.Call<java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>>;
							public getMerchantDetails(): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>;
							public getUssd(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest): retrofit2.Call<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class AuthToken {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.AuthToken>;
							public accessToken: string;
							public tokenType: string;
							public expiresIn: number;
							public merchantCode: string;
							public scope: string;
							public jti: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class Environment {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.Environment>;
							public static TEST: com.interswitchng.iswmobilesdk.shared.models.core.Environment;
							public static SANDBOX: com.interswitchng.iswmobilesdk.shared.models.core.Environment;
							public static PRODUCTION: com.interswitchng.iswmobilesdk.shared.models.core.Environment;
							public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.models.core.Environment;
							public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.core.Environment>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class IswPaymentInfo {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo>;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number, param6: java.util.List<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount>);
							public getAmount(): number;
							public getAccessToken$isw_mobile_payment_sdk_release(): string;
							public getReference(): string;
							public getCustomerId(): string;
							public setAccessToken$isw_mobile_payment_sdk_release(param0: string): void;
							public getSettlementAccounts$isw_mobile_payment_sdk_release(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount>;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getCustomerMobile(): string;
							public describeContents(): number;
							public getCustomerName(): string;
							public setSettlementAccounts$isw_mobile_payment_sdk_release(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount>): void;
							public getAmountString(): string;
							public withToken(param0: string): void;
							public getCustomerEmail(): string;
						}
						export module IswPaymentInfo {
							export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo> {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo.CREATOR>;
								public newArray(param0: number): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo>;
								public createFromParcel(param0: globalAndroid.os.Parcel): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class IswPaymentResult {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult>;
							public getChannel(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getResponseDescription(): string;
							public isSuccessful(): boolean;
							public getAmount(): number;
							public getResponseCode(): string;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: string, param1: string, param2: boolean, param3: string, param4: number, param5: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel);
							public getTransactionReference(): string;
						}
						export module IswPaymentResult {
							export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult> {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult.CREATOR>;
								public newArray(param0: number): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult>;
								public createFromParcel(param0: globalAndroid.os.Parcel): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class IswSdkConfig {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswSdkConfig>;
							public clientId: string;
							public clientSecret: string;
							public merchantCode: string;
							public currencyCode: string;
							public env: com.interswitchng.iswmobilesdk.shared.models.core.Environment;
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public constructor(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.core.Environment);
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.interswitchng.iswmobilesdk.shared.models.core.Environment);
							public setEnv(param0: com.interswitchng.iswmobilesdk.shared.models.core.Environment): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class IswSettlementAccount {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount>;
							public component5(): boolean;
							public hashCode(): number;
							public getAmount(): number;
							public component2(): number;
							public copy(param0: string, param1: number, param2: number, param3: string, param4: boolean): com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount;
							public toString(): string;
							public getDescription(): string;
							public component1(): string;
							public getAlias(): string;
							public isPrimary(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getPercentage(): number;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: string, param1: number, param2: number, param3: string, param4: boolean);
							public component3(): number;
							public component4(): string;
							public equals(param0: any): boolean;
						}
						export module IswSettlementAccount {
							export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount> {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount.CREATOR>;
								public createFromParcel(param0: globalAndroid.os.Parcel): com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount;
								public newArray(param0: number): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module core {
						export class PaymentChannel {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel>;
							public static CARD: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public static WALLET: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public static QR: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public static USSD: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel>;
							public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class BinConfig {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig>;
								public getSupportsExpiryDate(): boolean;
								public toString(): string;
								public getSupportsPin(): boolean;
								public component3(): boolean;
								public component2(): boolean;
								public equals(param0: any): boolean;
								public getSupportsCvv2(): boolean;
								public component4(): boolean;
								public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean);
								public copy(param0: boolean, param1: boolean, param2: boolean, param3: boolean): com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig;
								public getEnabled(): boolean;
								public component1(): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class CardBinConfigRequest {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardBinConfigRequest>;
								public getPaymentId(): string;
								public constructor(param0: string, param1: string);
								public getAuthData(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class CardBinConfigResponse {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardBinConfigResponse>;
								public getCardTypeGatewayConfiguration(): com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig;
								public getIssuer(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
								public setIssuer(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer): void;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig);
								public setCardTypeGatewayConfiguration(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class CardPayment {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment>;
								public getChannel(): string;
								public getCustomerEmail(): string;
								public getDateOfPayment(): string;
								public getMerchantCustomerId(): string;
								public getAmount(): number;
								public getSplitSettlementInformation(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.core.IswSettlementAccount>;
								public getCurrencyCode(): string;
								public getTransactionReference(): string;
								public getCustomerMobile(): string;
							}
							export module CardPayment {
								export class Companion {
									public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment.Companion>;
									public from(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: string): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class CardRequest {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardRequest>;
								public getPayment(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment, param1: string, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo, param3: string, param4: string);
								public getPaymentId(): string;
								public setPaymentId(param0: string): void;
								public getDeviceInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo;
								public getInstrumentIdentifier(): string;
								public getAuthData(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class CardResponse {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse>;
								public toString(): string;
								public component7(): number;
								public setTransactionReference(param0: string): void;
								public setCardinalInfo(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo): void;
								public component9(): string;
								public getRequiresCentinelAuthorization(): boolean;
								public equals(param0: any): boolean;
								public component12(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
								public component2(): string;
								public getTransactionReference(): string;
								public getCardinalInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
								public getFingerPrintData(): com.interswitchng.iswmobilesdk.shared.models.payment.card.FingerPrintAuth;
								public component1(): string;
								public setResponseCode(param0: string): void;
								public setEmail(param0: string): void;
								public getResponseDescription(): string;
								public setFingerPrintData(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.FingerPrintAuth): void;
								public setAmount(param0: number): void;
								public getMobilePhoneNumber(): string;
								public component11(): boolean;
								public getPaymentId(): number;
								public component10(): string;
								public setMobilePhoneNumber(param0: string): void;
								public component5(): string;
								public setRetrievalReferenceNumber(param0: string): void;
								public constructor(param0: string, param1: string, param2: boolean, param3: number, param4: string, param5: string, param6: number, param7: boolean, param8: string, param9: string, param10: boolean, param11: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo, param12: com.interswitchng.iswmobilesdk.shared.models.payment.card.FingerPrintAuth);
								public component3(): boolean;
								public component13(): com.interswitchng.iswmobilesdk.shared.models.payment.card.FingerPrintAuth;
								public constructor();
								public getResponseCode(): string;
								public setRequiresCentinelAuthorization(param0: boolean): void;
								public getRetrievalReferenceNumber(): string;
								public setPaymentId(param0: number): void;
								public getEmail(): string;
								public setResponseDescription(param0: string): void;
								public getResponseEnabled(): boolean;
								public setRequiresToken(param0: boolean): void;
								public component6(): string;
								public component4(): number;
								public copy(param0: string, param1: string, param2: boolean, param3: number, param4: string, param5: string, param6: number, param7: boolean, param8: string, param9: string, param10: boolean, param11: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo, param12: com.interswitchng.iswmobilesdk.shared.models.payment.card.FingerPrintAuth): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public setResponseEnabled(param0: boolean): void;
								public getAmount(): number;
								public getRequiresToken(): boolean;
								public hashCode(): number;
								public component8(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class DeviceInfo {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo>;
								public getDeviceId(): string;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class FingerPrintAuth {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.FingerPrintAuth>;
								public getAllowFingerPrintAuthorization(): boolean;
								public constructor(param0: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class IswCard {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard>;
								public setCardCvv(param0: string): void;
								public toString(): string;
								public setInstrumentIdentifier(param0: string): void;
								public constructor(param0: string, param1: string, param2: string, param3: string);
								public equals(param0: any): boolean;
								public getCardPan(): string;
								public getCardPin(): string;
								public getCardCvv(): string;
								public constructor(param0: string, param1: string, param2: string);
								public component2(): string;
								public component1(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
								public getCardExpiryMonth(): string;
								public getCardExpiryYear(): string;
								public copy(param0: string, param1: string, param2: string): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public getInstrumentIdentifier(): string;
								public setCardPin(param0: string): void;
								public component3(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class OtpRequest {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.OtpRequest>;
								public setTokenValidationParameters(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.TokenValidation): void;
								public getPaymentId(): string;
								public setInstrumentIdentifier(param0: string): void;
								public getDeviceInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo;
								public getTwoFactorAuthenticationCode(): string;
								public getInstrumentIdentifier(): string;
								public getAuthData(): string;
								public constructor(param0: string, param1: string, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo, param3: string, param4: string, param5: com.interswitchng.iswmobilesdk.shared.models.payment.card.TokenValidation);
								public getTokenValidationParameters(): com.interswitchng.iswmobilesdk.shared.models.payment.card.TokenValidation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class TokenValidation {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.TokenValidation>;
								public getEnableFingerPrintAuthorization(): string;
								public constructor(param0: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class VisaCardinalInfo {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo>;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
								public setUrl(param0: string): void;
								public getUrl(): string;
								public getEciFlag(): string;
								public getCallBackUrl(): string;
								public setPayLoad(param0: string): void;
								public setTransactionId(param0: string): void;
								public getTransactionId(): string;
								public setEciFlag(param0: string): void;
								public setCallBackUrl(param0: string): void;
								public getPayLoad(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module card {
							export class VisaRequest {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaRequest>;
								public copy(param0: string, param1: string, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo, param3: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaRequest;
								public toString(): string;
								public getPaymentId(): string;
								public setCardinalInfo(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo): void;
								public component3(): com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo;
								public equals(param0: any): boolean;
								public getAuthData(): string;
								public component2(): string;
								public component4(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
								public getCardinalInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
								public component1(): string;
								public getDeviceInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo;
								public constructor(param0: string, param1: string, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.DeviceInfo, param3: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo);
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module merchant {
							export class MerchantInfo {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo>;
								public toString(): string;
								public getName(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string);
								public equals(param0: any): boolean;
								public getLogoUrl(): string;
								public component4(): string;
								public getCorporateApprovalStatus(): string;
								public component2(): string;
								public component1(): string;
								public setCorporateApprovalStatus(param0: string): void;
								public setName(param0: string): void;
								public getSettlementType(): string;
								public setLogoUrl(param0: string): void;
								public setSettlementType(param0: string): void;
								public copy(param0: string, param1: string, param2: string, param3: string): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo;
								public component3(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module merchant {
							export class MerchantPaymentOption {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>;
								public component1(): string;
								public toString(): string;
								public component3(): boolean;
								public getPayableCode(): string;
								public equals(param0: any): boolean;
								public getEnabled(): boolean;
								public component2(): string;
								public copy(param0: string, param1: string, param2: boolean): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption;
								public hashCode(): number;
								public constructor(param0: string, param1: string, param2: boolean);
								public getProviderCode(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module merchant {
							export class MerchantResponse {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>;
								public getPaymentOptions(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>;
								public component2(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo, param1: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>);
								public setPaymentOptions(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>): void;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo;
								public equals(param0: any): boolean;
								public setMerchant(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo): void;
								public getMerchant(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo;
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantInfo, param1: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantPaymentOption>): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module ussdqr {
							export class CodeRequest {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest>;
								public toString(): string;
								public getSurcharge(): string;
								public setBankCode(param0: string): void;
								public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);
								public equals(param0: any): boolean;
								public getMerchantTransactionReference(): string;
								public getBankCode(): string;
								public component4(): string;
								public component2(): string;
								public setCurrencyCode(param0: string): void;
								public component1(): number;
								public setAmount(param0: number): void;
								public getAmount(): number;
								public setSurcharge(param0: string): void;
								public component5(): string;
								public getCurrencyCode(): string;
								public setMerchantTransactionReference(param0: string): void;
								public component3(): string;
								public hashCode(): number;
								public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module ussdqr {
							export class ConfirmRequest {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest>;
								public toString(): string;
								public constructor(param0: number, param1: string, param2: string);
								public setTransactionReference(param0: string): void;
								public copy(param0: number, param1: string, param2: string): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
								public equals(param0: any): boolean;
								public setMerchantCode(param0: string): void;
								public component2(): string;
								public getTransactionReference(): string;
								public getMerchantCode(): string;
								public component1(): number;
								public setAmount(param0: number): void;
								public getAmount(): number;
								public component3(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module ussdqr {
							export class ConfirmResponse {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse>;
								public toString(): string;
								public setBankCode(param0: string): void;
								public getMerchantReference(): string;
								public equals(param0: any): boolean;
								public getBankCode(): string;
								public setTransactionDate(param0: string): void;
								public getAmount(): string;
								public component2(): string;
								public component1(): string;
								public setResponseCode(param0: string): void;
								public getResponseDescription(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
								public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
								public isPending(): boolean;
								public isError(): boolean;
								public component5(): string;
								public getTransactionDate(): string;
								public setAmount(param0: string): void;
								public component7(): string;
								public setMerchantReference(param0: string): void;
								public component4(): string;
								public setCardNumber(param0: string): void;
								public getResponseCode(): string;
								public getCardNumber(): string;
								public setResponseDescription(param0: string): void;
								public component6(): string;
								public isCompleted(): boolean;
								public component3(): string;
								public hashCode(): number;
							}
							export module ConfirmResponse {
								export class Companion {
									public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse.Companion>;
									public getOK(): string;
									public getPENDING(): androidNative.Array<string>;
									public getSERVER_ERROR(): string;
									public getBAD_REQUEST(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module ussdqr {
							export abstract class PollStatus {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus>;
							}
							export module PollStatus {
								export class Complete extends com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus {
									public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus.Complete>;
									public hashCode(): number;
									public getTransaction(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
									public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
									public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse);
									public equals(param0: any): boolean;
									public toString(): string;
									public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus.Complete;
								}
								export class Error extends com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus {
									public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus.Error>;
									public component2(): string;
									public hashCode(): number;
									public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse, param1: string);
									public getTransaction(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
									public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
									public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse, param1: string): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus.Error;
									public equals(param0: any): boolean;
									public toString(): string;
									public getErrorMsg(): string;
								}
								export class Pending extends com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus {
									public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus.Pending>;
									public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse);
									public hashCode(): number;
									public getTransaction(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
									public component2(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse;
									public equals(param0: any): boolean;
									public toString(): string;
									public getRequest(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
									public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
									public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmResponse): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus.Pending;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module ussdqr {
							export class QrData {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>;
								public setRawQRData(param0: string): void;
								public toString(): string;
								public getQrCodeId(): string;
								public setTransactionReference(param0: string): void;
								public equals(param0: any): boolean;
								public getQrCodeImage(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.Bitmap;
								public constructor(param0: string, param1: string, param2: string);
								public copy(param0: string, param1: string, param2: string): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData;
								public component2(): string;
								public getTransactionReference(): string;
								public component1(): string;
								public setQrCodeId(param0: string): void;
								public getRawQRData(): string;
								public component3(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module ussdqr {
							export class UssdCode {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>;
								public toString(): string;
								public getDefaultShortCode(): string;
								public setTransactionReference(param0: string): void;
								public equals(param0: any): boolean;
								public component4(): string;
								public constructor();
								public getResponseCode(): string;
								public component2(): string;
								public getTransactionReference(): string;
								public component1(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
								public setReference(param0: string): void;
								public setResponseCode(param0: string): void;
								public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode;
								public getReference(): string;
								public getBankShortCode(): string;
								public setBankShortCode(param0: string): void;
								public component5(): string;
								public setDefaultShortCode(param0: string): void;
								public component3(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module wallet {
							export class Issuer {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>;
								public component1(): string;
								public toString(): string;
								public setName(param0: string): void;
								public getCode(): string;
								public constructor(param0: string, param1: string);
								public getName(): string;
								public equals(param0: any): boolean;
								public copy(param0: string, param1: string): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
								public component2(): string;
								public hashCode(): number;
								public setCode(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module wallet {
							export class Wallet {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>;
								public getUser(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser;
								public component2(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser;
								public toString(): string;
								public setUser(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser): void;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser, param1: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>);
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser, param1: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet;
								public setPaymentMethods(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>): void;
								public hashCode(): number;
								public getPaymentMethods(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module wallet {
							export class WalletPaymentMethod {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod>;
								public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param8: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletPaymentMethod;
								public getCardTypeGatewayConfiguration(): com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig;
								public toString(): string;
								public equals(param0: any): boolean;
								public component2(): string;
								public setCardHash(param0: string): void;
								public setCardTypeGatewayConfiguration(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig): void;
								public component1(): string;
								public getExpiryMonth(): string;
								public setExpiryMonth(param0: string): void;
								public getCardHash(): string;
								public setCardIdentifier(param0: string): void;
								public getExpiryYear(): string;
								public setIssuer(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer): void;
								public setExpiryYear(param0: string): void;
								public getHasExpiryDate(): boolean;
								public component5(): string;
								public getCardIdentifier(): string;
								public getWalletInstrumentIdentifier(): string;
								public component7(): string;
								public component8(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
								public setWalletInstrumentIdentifier(param0: string): void;
								public setCardTypeName(param0: string): void;
								public getMaskedPan(): string;
								public getIssuer(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
								public component4(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param8: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig);
								public getCardTypeName(): string;
								public setMaskedPan(param0: string): void;
								public component6(): string;
								public component3(): string;
								public hashCode(): number;
								public component9(): com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module wallet {
							export class WalletUser {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser>;
								public setLastName(param0: string): void;
								public toString(): string;
								public equals(param0: any): boolean;
								public constructor(param0: string, param1: string, param2: string);
								public getFirstName(): string;
								public component2(): string;
								public component1(): string;
								public getEmail(): string;
								public setEmail(param0: string): void;
								public copy(param0: string, param1: string, param2: string): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUser;
								public getLastName(): string;
								public component3(): string;
								public hashCode(): number;
								public setFirstName(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module payment {
						export module wallet {
							export class WalletUserCredential {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential>;
								public component1(): string;
								public toString(): string;
								public constructor(param0: string, param1: string);
								public getPassword(): string;
								public equals(param0: any): boolean;
								public setUsername(param0: string): void;
								public setPassword(param0: string): void;
								public copy(param0: string, param1: string): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential;
								public getUsername(): string;
								public component2(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class AppAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction>;
						}
						export module AppAction {
							export class CancelPayment extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.CancelPayment>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.AppAction.CancelPayment;
							}
							export class ChooseAnOption extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ChooseAnOption>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getOptions(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse): com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ChooseAnOption;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse);
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
								public hashCode(): number;
							}
							export class CompletePayment extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.CompletePayment>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.AppAction.CompletePayment;
							}
							export class ErrorLoadingOptions extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ErrorLoadingOptions>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public toString(): string;
								public equals(param0: any): boolean;
								public getError(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public hashCode(): number;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError): com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ErrorLoadingOptions;
							}
							export class LoadOptions extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.LoadOptions>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.AppAction.LoadOptions;
							}
							export class ProcessSelectedOption extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ProcessSelectedOption>;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction): com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ProcessSelectedOption;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction;
								public equals(param0: any): boolean;
								public getOption(): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction;
								public hashCode(): number;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction);
							}
							export class ShowPaymentResult extends com.interswitchng.iswmobilesdk.shared.models.state.AppAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ShowPaymentResult>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): com.interswitchng.iswmobilesdk.shared.models.state.AppAction.ShowPaymentResult;
								public equals(param0: any): boolean;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class AppState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.AppState>;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
							public component4(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public getToResult(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult;
							public getLoading(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public getOptions(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>;
							public hashCode(): number;
							public getHasPaymentResult(): boolean;
							public getPaymentInfo(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
							public toString(): string;
							public isShowingOptions(): boolean;
							public getError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public getCurrentView(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView>;
							public component2(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public getPaymentState(): com.interswitchng.iswmobilesdk.shared.models.state.PaymentState;
							public component6(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView>;
							public component3(): com.interswitchng.iswmobilesdk.shared.models.state.PaymentState;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param2: com.interswitchng.iswmobilesdk.shared.models.state.PaymentState, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>, param5: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView>): com.interswitchng.iswmobilesdk.shared.models.state.AppState;
							public component5(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param2: com.interswitchng.iswmobilesdk.shared.models.state.PaymentState, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse>, param5: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView>);
							public equals(param0: any): boolean;
							public isSuccessfulPayment(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class BaseCardState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class CardAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardAction>;
						}
						export module CardAction {
							export class EnterCardDetails extends com.interswitchng.iswmobilesdk.shared.models.state.CardAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardAction.EnterCardDetails>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.CardAction.EnterCardDetails;
							}
							export class ProcessCardConfig extends com.interswitchng.iswmobilesdk.shared.models.state.CardAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardAction.ProcessCardConfig>;
								public toString(): string;
								public getConfig(): com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig, param2: string): com.interswitchng.iswmobilesdk.shared.models.state.CardAction.ProcessCardConfig;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig, param2: string);
								public getDeviceId(): string;
								public component2(): com.interswitchng.iswmobilesdk.shared.models.payment.card.BinConfig;
								public getCard(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public component3(): string;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
							}
							export class ProcessPayment extends com.interswitchng.iswmobilesdk.shared.models.state.CardAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardAction.ProcessPayment>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: string);
								public equals(param0: any): boolean;
								public getDeviceId(): string;
								public getCard(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public component2(): string;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: string): com.interswitchng.iswmobilesdk.shared.models.state.CardAction.ProcessPayment;
							}
							export class ProcessedPaymentResult extends com.interswitchng.iswmobilesdk.shared.models.state.CardAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardAction.ProcessedPaymentResult>;
								public toString(): string;
								public component2(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse);
								public equals(param0: any): boolean;
								public getCard(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): com.interswitchng.iswmobilesdk.shared.models.state.CardAction.ProcessedPaymentResult;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
							}
							export class RetrieveCardConfig extends com.interswitchng.iswmobilesdk.shared.models.state.CardAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardAction.RetrieveCardConfig>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: string);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: string): com.interswitchng.iswmobilesdk.shared.models.state.CardAction.RetrieveCardConfig;
								public equals(param0: any): boolean;
								public getDeviceId(): string;
								public getCard(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public component2(): string;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class CardInputState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardInputState>;
							public static Card: com.interswitchng.iswmobilesdk.shared.models.state.CardInputState;
							public static PIN: com.interswitchng.iswmobilesdk.shared.models.state.CardInputState;
							public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.state.CardInputState>;
							public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.CardInputState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class CardState extends com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.CardState>;
							public constructor();
							public component4(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public getLoading(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public hashCode(): number;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param1: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard>, param2: com.interswitchng.iswmobilesdk.shared.models.state.CardInputState, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>);
							public component3(): com.interswitchng.iswmobilesdk.shared.models.state.CardInputState;
							public getCard(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard>;
							public component2(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard>;
							public toString(): string;
							public getError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param1: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard>, param2: com.interswitchng.iswmobilesdk.shared.models.state.CardInputState, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>): com.interswitchng.iswmobilesdk.shared.models.state.CardState;
							public equals(param0: any): boolean;
							public getInputState(): com.interswitchng.iswmobilesdk.shared.models.state.CardInputState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class Data<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.Data<any>>;
						}
						export module Data {
							export class Pending<T>  extends com.interswitchng.iswmobilesdk.shared.models.state.Data<any> {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.Data.Pending<any>>;
								public constructor();
							}
							export class Value<T>  extends com.interswitchng.iswmobilesdk.shared.models.state.Data<any> {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.Data.Value<any>>;
								public constructor(param0: any);
								public toString(): string;
								public component1(): any;
								public getValue(): any;
								public equals(param0: any): boolean;
								public copy(param0: any): com.interswitchng.iswmobilesdk.shared.models.state.Data.Value<any>;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class Loading {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.Loading>;
						}
						export module Loading {
							export class IsLoading extends com.interswitchng.iswmobilesdk.shared.models.state.Loading {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.Loading.IsLoading>;
								public component1(): string;
								public toString(): string;
								public equals(param0: any): boolean;
								public getMessage(): string;
								public constructor(param0: string);
								public hashCode(): number;
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.Loading.IsLoading;
							}
							export class NotLoading extends com.interswitchng.iswmobilesdk.shared.models.state.Loading {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.Loading.NotLoading>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.Loading.NotLoading;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class OTPAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPAction>;
						}
						export module OTPAction {
							export class EnterOTP extends com.interswitchng.iswmobilesdk.shared.models.state.OTPAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.EnterOTP>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: number, param2: string, param3: boolean, param4: string);
								public equals(param0: any): boolean;
								public getError(): string;
								public component4(): boolean;
								public getCanDisableOtp(): boolean;
								public getOtpMessage(): string;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
								public getPaymentId(): number;
								public component2(): number;
								public component5(): string;
								public getChannel(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: number, param2: string, param3: boolean, param4: string): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.EnterOTP;
								public component3(): string;
								public hashCode(): number;
							}
							export class ProcessOtp extends com.interswitchng.iswmobilesdk.shared.models.state.OTPAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ProcessOtp>;
								public component1(): string;
								public toString(): string;
								public getOtp(): string;
								public constructor(param0: string, param1: boolean);
								public component2(): boolean;
								public equals(param0: any): boolean;
								public getDisableOtp(): boolean;
								public hashCode(): number;
								public copy(param0: string, param1: boolean): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ProcessOtp;
							}
							export class ProcessedOtpResult extends com.interswitchng.iswmobilesdk.shared.models.state.OTPAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ProcessedOtpResult>;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ProcessedOtpResult;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse);
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public hashCode(): number;
							}
							export class ProcessedResendOtpResult extends com.interswitchng.iswmobilesdk.shared.models.state.OTPAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ProcessedResendOtpResult>;
								public component1(): string;
								public toString(): string;
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ProcessedResendOtpResult;
								public equals(param0: any): boolean;
								public constructor();
								public constructor(param0: string);
								public getError(): string;
								public hashCode(): number;
							}
							export class ResendOtp extends com.interswitchng.iswmobilesdk.shared.models.state.OTPAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ResendOtp>;
								public component1(): string;
								public toString(): string;
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction.ResendOtp;
								public getPaymentId(): string;
								public equals(param0: any): boolean;
								public constructor(param0: string);
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class OTPState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.OTPState>;
							public component3(): boolean;
							public getResendError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param2: boolean, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param5: number, param6: string, param7: boolean): com.interswitchng.iswmobilesdk.shared.models.state.OTPState;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public component7(): string;
							public getLoading(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public hashCode(): number;
							public component4(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public getOtpMessage(): string;
							public getCanDisableOtp(): boolean;
							public toString(): string;
							public component8(): boolean;
							public component2(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public getOtpError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public getChannel(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public component5(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public component6(): number;
							public getResending(): boolean;
							public getPaymentId(): number;
							public equals(param0: any): boolean;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param2: boolean, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param5: number, param6: string, param7: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class PaymentAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction>;
						}
						export module PaymentAction {
							export class Card extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.Card>;
								public toString(): string;
								public getAction(): com.interswitchng.iswmobilesdk.shared.models.state.CardAction;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.CardAction;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardAction): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.Card;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardAction);
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export class OTP extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.OTP>;
								public toString(): string;
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.OTPAction): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.OTP;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.OTPAction);
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction;
								public getAction(): com.interswitchng.iswmobilesdk.shared.models.state.OTPAction;
							}
							export class QrCode extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.QrCode>;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction);
								public toString(): string;
								public equals(param0: any): boolean;
								public getAction(): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.QrCode;
								public hashCode(): number;
							}
							export class UssdCode extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.UssdCode>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.UssdCode;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getAction(): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction;
							}
							export class VerveWallet extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.VerveWallet>;
								public toString(): string;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.VerveWallet;
								public equals(param0: any): boolean;
								public getAction(): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction;
								public hashCode(): number;
							}
							export class Visa extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.Visa>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaAction);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaAction): com.interswitchng.iswmobilesdk.shared.models.state.PaymentAction.Visa;
								public getAction(): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class PaymentState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentState>;
							public static ONGOING: com.interswitchng.iswmobilesdk.shared.models.state.PaymentState;
							public static CANCELLED: com.interswitchng.iswmobilesdk.shared.models.state.PaymentState;
							public static COMPLETED: com.interswitchng.iswmobilesdk.shared.models.state.PaymentState;
							public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.state.PaymentState>;
							public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.PaymentState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class PaymentView {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView>;
						}
						export module PaymentView {
							export class Card extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Card>;
								public toString(): string;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.state.CardState;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardState);
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.CardState;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardState): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Card;
								public hashCode(): number;
							}
							export class OTP extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.OTP>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.OTPState;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.OTPState): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.OTP;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.OTPState);
								public equals(param0: any): boolean;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.state.OTPState;
								public hashCode(): number;
							}
							export class Options extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Options>;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Options;
								public toString(): string;
								public equals(param0: any): boolean;
								public getOptions(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse);
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
								public hashCode(): number;
							}
							export class QrCode extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.QrCode>;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.QrCode;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState);
								public hashCode(): number;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState;
							}
							export class Result extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Result>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult);
								public equals(param0: any): boolean;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult;
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentResult): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Result;
							}
							export class UssdCode extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.UssdCode>;
								public toString(): string;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState;
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.UssdCode;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState);
								public hashCode(): number;
							}
							export class Visa extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Visa>;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaState);
								public toString(): string;
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaState): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Visa;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.state.VisaState;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.VisaState;
							}
							export class Wallet extends com.interswitchng.iswmobilesdk.shared.models.state.PaymentView {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Wallet>;
								public toString(): string;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState);
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState;
								public hashCode(): number;
								public getState(): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState): com.interswitchng.iswmobilesdk.shared.models.state.PaymentView.Wallet;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class ProcessingError {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public copy(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.state.AppAction): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
							public hashCode(): number;
							public component2(): com.interswitchng.iswmobilesdk.shared.models.state.AppAction;
							public toString(): string;
							public constructor(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.state.AppAction);
							public equals(param0: any): boolean;
							public getMessage(): string;
							public component1(): string;
							public getRetryAction(): com.interswitchng.iswmobilesdk.shared.models.state.AppAction;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class QrCodeAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction>;
						}
						export module QrCodeAction {
							export class GenerateQr extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.GenerateQr>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest;
								public toString(): string;
								public getCode(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest);
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.GenerateQr;
							}
							export class InitializeQr extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.InitializeQr>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.InitializeQr;
							}
							export class PollQrStatus extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.PollQrStatus>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
								public toString(): string;
								public isUserTriggered(): boolean;
								public component2(): boolean;
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: boolean): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.PollQrStatus;
								public hashCode(): number;
								public getConfirmRequest(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: boolean);
							}
							export class PollStatusMessage extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.PollStatusMessage>;
								public component1(): string;
								public toString(): string;
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.PollStatusMessage;
								public getMsg(): string;
								public equals(param0: any): boolean;
								public constructor(param0: string);
								public hashCode(): number;
							}
							export class QrStatusResult extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.QrStatusResult>;
								public toString(): string;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus);
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.QrStatusResult;
							}
							export class ShowQrCode extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.ShowQrCode>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.ShowQrCode;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData);
								public getQrData(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData;
								public hashCode(): number;
							}
							export class ShowQrCodeError extends com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.ShowQrCodeError>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public toString(): string;
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction.ShowQrCodeError;
								public getError(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public hashCode(): number;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class QrCodeState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState>;
							public component3(): boolean;
							public constructor();
							public hashCode(): number;
							public getPollMessage(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>;
							public getWasManualPoll(): boolean;
							public getLoadingQr(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public toString(): string;
							public getError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public component2(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>, param1: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param2: boolean, param3: boolean, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param5: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>);
							public getPolling(): boolean;
							public component5(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public getQrCode(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>;
							public component6(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData>, param1: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param2: boolean, param3: boolean, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param5: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>): com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState;
							public equals(param0: any): boolean;
							public component4(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class UssdCodeAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction>;
						}
						export module UssdCodeAction {
							export class GetUSSD extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.GetUSSD>;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest);
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
								public toString(): string;
								public component2(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest;
								public getIssuer(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer;
								public equals(param0: any): boolean;
								public getRequest(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest;
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.GetUSSD;
							}
							export class InitializeUssd extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.InitializeUssd>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.InitializeUssd;
							}
							export class LoadBanks extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.LoadBanks>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.LoadBanks;
							}
							export class PollStatusMessage extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.PollStatusMessage>;
								public component1(): string;
								public toString(): string;
								public getMsg(): string;
								public equals(param0: any): boolean;
								public constructor(param0: string);
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.PollStatusMessage;
								public hashCode(): number;
							}
							export class PollUssdStatus extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.PollUssdStatus>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
								public toString(): string;
								public isUserTriggered(): boolean;
								public component2(): boolean;
								public equals(param0: any): boolean;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: boolean): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.PollUssdStatus;
								public hashCode(): number;
								public getConfirmRequest(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: boolean);
							}
							export class ShowBanks extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowBanks>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getBanks(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>;
								public component1(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>;
								public copy(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowBanks;
								public hashCode(): number;
								public constructor(param0: java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>);
							}
							export class ShowBanksError extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowBanksError>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowBanksError;
								public equals(param0: any): boolean;
								public getError(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public hashCode(): number;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError);
							}
							export class ShowUssd extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowUssd>;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowUssd;
								public equals(param0: any): boolean;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode);
								public getUssd(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode;
								public hashCode(): number;
							}
							export class ShowUssdError extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowUssdError>;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public toString(): string;
								public equals(param0: any): boolean;
								public getError(): com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError;
								public hashCode(): number;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.ShowUssdError;
							}
							export class UssdStatusResult extends com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.UssdStatusResult>;
								public toString(): string;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction.UssdStatusResult;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus);
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class UssdCodeState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState>;
							public constructor();
							public component3(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public component5(): boolean;
							public hashCode(): number;
							public getLoadingBanks(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public getPollMessage(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public getUssd(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>;
							public getBanks(): com.interswitchng.iswmobilesdk.shared.models.state.Data<java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>>;
							public getWasManualPoll(): boolean;
							public toString(): string;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.Data<java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>>, param1: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>, param2: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>, param3: boolean, param4: boolean, param5: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param6: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param7: com.interswitchng.iswmobilesdk.shared.models.state.Loading);
							public getLoadingUssd(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public component6(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public getError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>;
							public component7(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public component8(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.Data<java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>>, param1: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>, param2: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.state.ProcessingError>, param3: boolean, param4: boolean, param5: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param6: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param7: com.interswitchng.iswmobilesdk.shared.models.state.Loading): com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState;
							public getPolling(): boolean;
							public component2(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.UssdCode>;
							public equals(param0: any): boolean;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.state.Data<java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>>;
							public component4(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class VerveWalletAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction>;
						}
						export module VerveWalletAction {
							export class EnterCredentials extends com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.EnterCredentials>;
								public component1(): string;
								public toString(): string;
								public equals(param0: any): boolean;
								public copy(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.EnterCredentials;
								public constructor();
								public constructor(param0: string);
								public getError(): string;
								public hashCode(): number;
							}
							export class InitializeWallet extends com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.InitializeWallet>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.InitializeWallet;
							}
							export class ProcessCredentials extends com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessCredentials>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential);
								public getCredentials(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessCredentials;
							}
							export class ProcessPayment extends com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessPayment>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: string);
								public equals(param0: any): boolean;
								public getDeviceId(): string;
								public getCard(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public component2(): string;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: string): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessPayment;
							}
							export class ProcessedCredentialResult extends com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessedCredentialResult>;
								public toString(): string;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.WalletResult);
								public equals(param0: any): boolean;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.state.WalletResult;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.state.WalletResult;
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.WalletResult): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessedCredentialResult;
							}
							export class ProcessedPaymentResult extends com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessedPaymentResult>;
								public toString(): string;
								public component2(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction.ProcessedPaymentResult;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse);
								public equals(param0: any): boolean;
								public getCard(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public hashCode(): number;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class VerveWalletState extends com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState>;
							public constructor();
							public component4(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>;
							public getLoading(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public getInvalidCredential(): boolean;
							public hashCode(): number;
							public component2(): boolean;
							public toString(): string;
							public component3(): com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public component5(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param1: boolean, param2: com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>): com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState;
							public getErrorAuthenticating(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public equals(param0: any): boolean;
							public getWallet(): com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>;
							public getInputState(): com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param1: boolean, param2: com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState, param3: com.interswitchng.iswmobilesdk.shared.models.state.Data<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet>, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class VisaAction {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction>;
						}
						export module VisaAction {
							export class CheckVisaStatus extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.CheckVisaStatus>;
								public toString(): string;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.CheckVisaStatus;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo);
								public hashCode(): number;
								public getCardinalInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
							}
							export class EnterVisaOTP extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.EnterVisaOTP>;
								public toString(): string;
								public component3(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
								public equals(param0: any): boolean;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
								public getPaymentId(): number;
								public component2(): number;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: number, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: number, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.EnterVisaOTP;
								public getChannel(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
								public hashCode(): number;
								public getCardinalInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
							}
							export class ProcessVisa extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.ProcessVisa>;
								public toString(): string;
								public constructor(param0: number);
								public component1(): number;
								public copy(param0: number): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.ProcessVisa;
								public equals(param0: any): boolean;
								public getPaymentId(): number;
								public hashCode(): number;
							}
							export class ProcessedVisaAuthResult extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.ProcessedVisaAuthResult>;
								public toString(): string;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse);
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.ProcessedVisaAuthResult;
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public hashCode(): number;
							}
							export class ProcessedVisaCheckResult extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.ProcessedVisaCheckResult>;
								public toString(): string;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.ProcessedVisaCheckResult;
								public equals(param0: any): boolean;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse);
								public getResult(): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
								public hashCode(): number;
							}
							export class VisaViewLoadError extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.VisaViewLoadError>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.VisaViewLoadError;
							}
							export class VisaViewLoaded extends com.interswitchng.iswmobilesdk.shared.models.state.VisaAction {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.VisaViewLoaded>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.VisaAction.VisaViewLoaded;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class VisaState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.VisaState>;
							public getError(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public component3(): boolean;
							public component1(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public getLoading(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public hashCode(): number;
							public component2(): boolean;
							public component7(): number;
							public getConfirmedStatus(): boolean;
							public toString(): string;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: boolean, param2: boolean, param3: number, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param5: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param6: number, param7: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo);
							public component6(): com.interswitchng.iswmobilesdk.shared.models.state.Loading;
							public getChannel(): com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel;
							public getCheckingStatus(): boolean;
							public component5(): com.interswitchng.iswmobilesdk.shared.models.state.Data<string>;
							public component4(): number;
							public getCardinalInfo(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
							public getVisaTimeout(): number;
							public component8(): com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo;
							public getPaymentId(): number;
							public equals(param0: any): boolean;
							public copy(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: boolean, param2: boolean, param3: number, param4: com.interswitchng.iswmobilesdk.shared.models.state.Data<string>, param5: com.interswitchng.iswmobilesdk.shared.models.state.Loading, param6: number, param7: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo): com.interswitchng.iswmobilesdk.shared.models.state.VisaState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export class WalletInputState {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState>;
							public static Auth: com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState;
							public static Card: com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState;
							public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState;
							public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.models.state.WalletInputState>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module models {
					export module state {
						export abstract class WalletResult {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.WalletResult>;
						}
						export module WalletResult {
							export class ErrorGettingWallet extends com.interswitchng.iswmobilesdk.shared.models.state.WalletResult {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.WalletResult.ErrorGettingWallet>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.WalletResult.ErrorGettingWallet;
							}
							export class InvalidCredential extends com.interswitchng.iswmobilesdk.shared.models.state.WalletResult {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.WalletResult.InvalidCredential>;
								public static INSTANCE: com.interswitchng.iswmobilesdk.shared.models.state.WalletResult.InvalidCredential;
							}
							export class Success extends com.interswitchng.iswmobilesdk.shared.models.state.WalletResult {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.models.state.WalletResult.Success>;
								public getWallet(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet;
								public toString(): string;
								public equals(param0: any): boolean;
								public component1(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet);
								public hashCode(): number;
								public copy(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet): com.interswitchng.iswmobilesdk.shared.models.state.WalletResult.Success;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module services {
					export class CardServiceImpl extends com.interswitchng.iswmobilesdk.shared.interfaces.library.CardService {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.services.CardServiceImpl>;
						public authenticateVisa(param0: string, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.VisaCardinalInfo, param2: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public pay(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardPayment, param2: string, param3: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public getBinConfig(param0: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public resendOtp(param0: string, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswCardPaymentService);
						public confirmOtp(param0: string, param1: string, param2: boolean, param3: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public checkVisaStatus(param0: number, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module services {
					export class MerchantInfoServiceImpl extends com.interswitchng.iswmobilesdk.shared.interfaces.library.MerchantInfoService {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.services.MerchantInfoServiceImpl>;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswPaymentService);
						public getResponse(): com.interswitchng.iswmobilesdk.shared.models.payment.merchant.MerchantResponse;
						public hasMerchantDetails(): boolean;
						public getMerchantDetails(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module services {
					export class ServiceProvider {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.services.ServiceProvider>;
						public static INSTANCE: com.interswitchng.iswmobilesdk.shared.services.ServiceProvider;
						public getCardService(): com.interswitchng.iswmobilesdk.shared.interfaces.library.CardService;
						public tearDown(): void;
						public getMerchantService(): com.interswitchng.iswmobilesdk.shared.interfaces.library.MerchantInfoService;
						public getWalletService(): com.interswitchng.iswmobilesdk.shared.interfaces.library.WalletService;
						public getQrService(): com.interswitchng.iswmobilesdk.shared.interfaces.library.UssdQrService;
						public initialize(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module services {
					export class UssdQrServiceImpl extends com.interswitchng.iswmobilesdk.shared.interfaces.library.UssdQrService {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.services.UssdQrServiceImpl>;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswPaymentService);
						public generateUssd(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest, param2: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public generateQr(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.CodeRequest, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public getBanks(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public confirmCode(param0: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest, param1: any<any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public banks(): java.util.List<com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Issuer>;
						public hasBanks(): boolean;
						public hasQr(): boolean;
						public qrData(): com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.QrData;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module services {
					export class WalletServiceImpl extends com.interswitchng.iswmobilesdk.shared.interfaces.library.WalletService {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.services.WalletServiceImpl>;
						public getResponse(): com.interswitchng.iswmobilesdk.shared.models.payment.wallet.Wallet;
						public getHasWalletResponse(): boolean;
						public getUserWallet(param0: com.interswitchng.iswmobilesdk.shared.models.payment.wallet.WalletUserCredential, param1: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.interfaces.retrofit.IswPaymentService);
						public setHasWalletResponse(param0: boolean): void;
						public hasWalletResponse(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export abstract class BaseCardManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCardManager>;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
						public processCardPayment(param0: com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard, param2: string): any<com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState,any;
						public handlePaymentResult(param0: com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState, param1: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): any<com.interswitchng.iswmobilesdk.shared.models.state.BaseCardState,any;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export abstract class BaseCodeManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCodeManager>;
						public pollCodeStatus(param0: any, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest): any;
						public clearSubscription(): void;
						public confirmCodeStatus(param0: any, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.ConfirmRequest): any;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
						public handleStatusResult(param0: any, param1: com.interswitchng.iswmobilesdk.shared.models.payment.ussdqr.PollStatus): any;
					}
					export module BaseCodeManager {
						export class CodeObsever extends com.interswitchng.iswmobilesdk.shared.statemanagers.StateObserver {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCodeManager.CodeObsever>;
							public constructor(param0: com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCodeManager);
							public shouldReceiveUpdate(): boolean;
							public onStateUpdated(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppState): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export abstract class BaseManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.BaseManager>;
						public getPaymentInfo(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
						public toResponse(param0: java.lang.Throwable): com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse;
						public getStateManager(): com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager;
						public getCurrentDisposable(): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public clearSubscription(): void;
						public setCurrentDisposable(param0: com.interswitchng.iswmobilesdk.shared.utils.IswSubscription): void;
						public handleResult(param0: com.interswitchng.iswmobilesdk.shared.models.core.PaymentChannel, param1: any, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.CardResponse): any;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class CardManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCardManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.CardManager>;
						public handleCard(param0: com.interswitchng.iswmobilesdk.shared.models.state.CardState, param1: com.interswitchng.iswmobilesdk.shared.models.state.CardAction): any<com.interswitchng.iswmobilesdk.shared.models.state.CardState,any;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class OTPManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.OTPManager>;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
						public handleCardOTP(param0: com.interswitchng.iswmobilesdk.shared.models.state.OTPState, param1: com.interswitchng.iswmobilesdk.shared.models.state.OTPAction): any<com.interswitchng.iswmobilesdk.shared.models.state.OTPState,any;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class PaymentManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.PaymentManager>;
						public getPaymentInfo(): com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo;
						public getStateManager(): com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager;
						public closePaymentProcess(): void;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class QrManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCodeManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.QrManager>;
						public handleQr(param0: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState, param1: com.interswitchng.iswmobilesdk.shared.models.state.QrCodeAction): any<com.interswitchng.iswmobilesdk.shared.models.state.QrCodeState,any;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class StateManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager>;
						public removeObserver(param0: com.interswitchng.iswmobilesdk.shared.statemanagers.StateObserver): void;
						public publishAction(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppAction): void;
						public addObserver(param0: com.interswitchng.iswmobilesdk.shared.statemanagers.StateObserver): void;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: any<any,any,any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class StateObserver {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.StateObserver>;
						/**
						 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.statemanagers.StateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shouldReceiveUpdate(): boolean;
							onStateUpdated(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppState): void;
						});
						public constructor();
						public onStateUpdated(param0: com.interswitchng.iswmobilesdk.shared.models.state.AppState): void;
						public shouldReceiveUpdate(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class UssdManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCodeManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.UssdManager>;
						public handleUssd(param0: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState, param1: com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeAction): any<com.interswitchng.iswmobilesdk.shared.models.state.UssdCodeState,any;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class VisaManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.VisaManager>;
						public handleVisaCard(param0: com.interswitchng.iswmobilesdk.shared.models.state.VisaState, param1: com.interswitchng.iswmobilesdk.shared.models.state.VisaAction): any<com.interswitchng.iswmobilesdk.shared.models.state.VisaState,any;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module statemanagers {
					export class WalletManager extends com.interswitchng.iswmobilesdk.shared.statemanagers.BaseCardManager {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.statemanagers.WalletManager>;
						public constructor(param0: com.interswitchng.iswmobilesdk.shared.models.core.IswPaymentInfo, param1: com.interswitchng.iswmobilesdk.shared.statemanagers.StateManager);
						public handleVerveInput(param0: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState, param1: com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletAction): any<com.interswitchng.iswmobilesdk.shared.models.state.VerveWalletState,any;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class CallResponse<T>  extends retrofit2.Callback<any> {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.CallResponse<any>>;
						public process(param0: any<any,any,any>): com.interswitchng.iswmobilesdk.shared.utils.IswSubscription;
						public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
						public constructor(param0: retrofit2.Call<any>);
						public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class CardDisplayUtil {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.CardDisplayUtil>;
						public static INSTANCE: com.interswitchng.iswmobilesdk.shared.utils.CardDisplayUtil;
						public getCardIcon(param0: string, param1: boolean): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class DeviceUtils {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.DeviceUtils>;
						public static INSTANCE: com.interswitchng.iswmobilesdk.shared.utils.DeviceUtils;
						public getDeviceId(param0: globalAndroid.content.Context): string;
						public saveToDisk(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: string): string;
						public isConnectedToInternet(param0: globalAndroid.content.Context): boolean;
						public writeAccessGranted(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class DisplayUtils {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.DisplayUtils>;
						public static INSTANCE: com.interswitchng.iswmobilesdk.shared.utils.DisplayUtils;
						public getAmountString(param0: number): string;
						public getIsoString(param0: java.util.Date): string;
						public convertPixelsToDp(param0: globalAndroid.content.Context, param1: number): number;
						public convertSpToPixels(param0: globalAndroid.content.Context, param1: number): number;
						public convertDpToPixel(param0: globalAndroid.content.Context, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class ErrorTextWatcher {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.ErrorTextWatcher>;
						public afterTextChanged(param0: globalAndroid.text.Editable): void;
						public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public constructor(param0: globalAndroid.widget.TextView);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class IswSubscription {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.IswSubscription>;
						public constructor();
						public isDisposed(): boolean;
						public onDispose(param0: java.lang.Runnable): void;
						public dispose(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class Logger {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.Logger>;
						public log(param0: string): void;
						public logWarning(param0: string): void;
						public logErr(param0: string): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class PaymentResponseCode {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.PaymentResponseCode>;
						public static INSTANCE: com.interswitchng.iswmobilesdk.shared.utils.PaymentResponseCode;
						public setOTP_VISA_TXN_REQUIRED(param0: string): void;
						public setPAYMENT_ERROR(param0: string): void;
						public getOTP_VISA_TXN_REQUIRED(): string;
						public setTXN_APPROVED(param0: string): void;
						public getPAYMENT_ERROR(): string;
						public getTXN_APPROVED(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module utils {
					export class SecurityUtil {
						public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.utils.SecurityUtil>;
						public static INSTANCE: com.interswitchng.iswmobilesdk.shared.utils.SecurityUtil;
						public getAuthData(param0: string, param1: string, param2: com.interswitchng.iswmobilesdk.shared.models.payment.card.IswCard): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module views {
					export module edittext {
						export class CardExpiryEditText {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.edittext.CardExpiryEditText>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public getCardExpiryMonth(): string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getCardExpiryYear(): string;
							public isValid(): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public getStringValue(): string;
						}
						export module CardExpiryEditText {
							export class CardExpiryTextWatcher {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.edittext.CardExpiryEditText.CardExpiryTextWatcher>;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module views {
					export module edittext {
						export class CardPanEditText {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.edittext.CardPanEditText>;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public isValid(): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public getStringValue(): string;
						}
						export module CardPanEditText {
							export class CardPanTextWatcher {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.edittext.CardPanEditText.CardPanTextWatcher>;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public afterTextChanged(param0: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module views {
					export module edittext {
						export class PinEditText {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.edittext.PinEditText>;
							public static XML_NAMESPACE_ANDROID: string;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
							public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module views {
					export module sheetbehavior {
						export class ToggleSheetGesture {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture>;
							public isDraggable(): boolean;
							public onDown(param0: globalAndroid.view.MotionEvent): boolean;
							public setDraggable(param0: boolean): void;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
							public setDetector(param0: globalAndroid.view.GestureDetector): void;
							public dismiss(): void;
						}
						export module ToggleSheetGesture {
							export class Companion {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.Companion>;
								public create(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number, param3: com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.GestureSheetCallback): com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture;
							}
							export class GestureSheetCallback {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.GestureSheetCallback>;
								/**
								 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture$GestureSheetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onDismiss(): void;
									onMove(param0: number): void;
								});
								public constructor();
								public onMove(param0: number): void;
								public onDismiss(): void;
							}
							export class State {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.State>;
								public static Dismissing: com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.State;
								public static Reverting: com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.State;
								public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.State>;
								public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.State;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.sheetbehavior.ToggleSheetGesture.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module views {
					export module viewpagers {
						export class PagerIndicator {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator>;
							public attachToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
							public onMeasure(param0: number, param1: number): void;
							public attachToViewPager(param0: androidx.viewpager.widget.ViewPager): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
						export module PagerIndicator {
							export class AttachedViewType {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.AttachedViewType>;
								public static ViewPager: com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.AttachedViewType;
								public static RecyclerView: com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.AttachedViewType;
								public static values(): androidNative.Array<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.AttachedViewType>;
								public static valueOf(param0: string): com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.AttachedViewType;
							}
							export class Companion {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.Companion>;
							}
							export class InternalPagerListener {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.InternalPagerListener>;
								public onPageSelected(param0: number): void;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator);
								public onPageScrollStateChanged(param0: number): void;
								public onPageScrolled(param0: number, param1: number, param2: number): void;
							}
							export class InternalRecyclerScrollListener {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.InternalRecyclerScrollListener>;
								public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
								public constructor(param0: com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator);
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.viewpagers.PagerIndicator.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module interswitchng {
		export module iswmobilesdk {
			export module shared {
				export module views {
					export module webview {
						export class VisaWebClient {
							public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.webview.VisaWebClient>;
							public removeCallback(): void;
							public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
							public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
							public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
							public constructor(param0: string, param1: com.interswitchng.iswmobilesdk.shared.views.webview.VisaWebClient.VisaCallback);
							public onReceivedError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest, param2: globalAndroid.webkit.WebResourceError): void;
							public onLoadResource(param0: globalAndroid.webkit.WebView, param1: string): void;
						}
						export module VisaWebClient {
							export class VisaCallback {
								public static class: java.lang.Class<com.interswitchng.iswmobilesdk.shared.views.webview.VisaWebClient.VisaCallback>;
								/**
								 * Constructs a new instance of the com.interswitchng.iswmobilesdk.shared.views.webview.VisaWebClient$VisaCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onError(): void;
									onLoading(): void;
									onLoadComplete(): void;
									onCallbackLoaded(): void;
								});
								public constructor();
								public onError(): void;
								public onLoading(): void;
								public onCallbackLoaded(): void;
								public onLoadComplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.interswitchng.iswmobilesdk.shared.models.state.Data:1
//com.interswitchng.iswmobilesdk.shared.models.state.Data.Pending:1
//com.interswitchng.iswmobilesdk.shared.models.state.Data.Value:1
//com.interswitchng.iswmobilesdk.shared.utils.CallResponse:1

