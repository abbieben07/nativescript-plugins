<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 1" />
		</ActionBar>

		<StackLayout>
			<Label text="The version is:" />
			<Button @tap="paypal" text="Start Paypal" />
		</StackLayout>
	</Page>
</template>

<script>
// @ts-nocheck
import Paypal from '@abbieben/paypal'
export default {
	methods: {
		paypal() {
			const paypal = new Paypal()

			paypal.currency = 'USD'
			paypal.amount = 10000 / 100
			paypal.client_id = 'AcRDI9NjX54DSNc1D2JlkDOY68rslQhfXFqaYKC7NrjFB_7JujDgxSja_60dHCdhF3hjZahiZn1Bj6yU'
			paypal.sandbox = true

			paypal
				.pay()
				.then(({ code }) => {
					switch (code) {
						case Paypal.SUCCESS:
							alert('PAID !!')
							break

						case Paypal.ERROR:
							alert('Payment Error')
							break

						case Paypal.CANCELLED:
							alert('Cancelled')
							break
					}
				})
				.catch((e) => console.error('Paypal Error', e))
		}
	}
}
</script>

<style lang="scss" scoped></style>
