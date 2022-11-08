<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 1" />
		</ActionBar>

		<StackLayout>
			<Label text="The version is:" />
			<Button @tap="flutterwave" text="Start Flutterwave" />
		</StackLayout>
	</Page>
</template>

<script>
// @ts-nocheck
import { Flutterwave } from '@abbieben/flutterwave';
export default {
	methods: {
		flutterwave() {
			let flutterwave = new Flutterwave();
			flutterwave.countryCode = 'NG';
			flutterwave.currency = 'NGN';
			flutterwave.amount = 10000 / 100;
			flutterwave.email = 'john@smith.com';
			flutterwave.encryptionKey = 'FLWSECK_TEST2718d0be650e';
			flutterwave.publicKey = 'FLWPUBK_TEST-89a10bc73517180cff90fee98ff64746-X';
			flutterwave.firstName = 'John';
			flutterwave.lastName = 'Smith';
			flutterwave.phoneNumber = '0806123777567';
			flutterwave.cardPayments = true;
			flutterwave.accountPayments = true;
			flutterwave.ussdPayments = true;
			flutterwave.bankTransferPayment = true;
			flutterwave.barterPayments = true;
			flutterwave.saveCard = true;
			flutterwave.isStaging = true;
			flutterwave.narration = 'Nativescript Flutterwave Demo';
			flutterwave.txRef = '123tiur2323435677';
			flutterwave
				.pay()
				.then(({ status }) => {
					switch (status) {
						case Flutterwave.PAYMENT_SUCCESS:
							alert('PAID !!');
							break;

						case Flutterwave.PAYMENT_ERROR:
							alert('Payment Error');
							break;

						case Flutterwave.PAYMENT_CANCELLED:
							alert('Cancelled');
							break;
					}
				})
				.catch((e) => {
					console.log('Flutterwave Error', e);
				});
		}
	}
};
</script>

<style lang="scss" scoped></style>