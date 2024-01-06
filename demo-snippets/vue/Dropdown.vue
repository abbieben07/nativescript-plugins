<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Development Demo" />
		</ActionBar>

		<StackLayout class="dropdown-box">
			<Dropdown :items="items" label="Select Option" />
		</StackLayout>
	</Page>
</template>

<script>
import { ObservableArray } from '@nativescript/core'

export default {
	data: {
		items: new ObservableArray([
			{
				value: 1,
				label: 'First'
			}
		])
	}
}
</script>

<style lang="scss" scoped>
.dropdown-box {
	padding: 5px;
}
</style>
