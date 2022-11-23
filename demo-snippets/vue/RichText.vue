<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 1" />
		</ActionBar>

		<StackLayout>
			<Label text="The Date Picker:" />
			<TextField v-model="date" date="DD/MM/YYYY" :maxDate="maxDate" dateTitle="Set Birthday" />
			<Label :text="'Result is' + date" />
		</StackLayout>
	</Page>
</template>

<script>
import moment from 'moment'

export default {
	data() {
		return {
			date: '02/02/2022'
		}
	},
	computed: {
		maxDate() {
			return moment().format('DD/MM/YYYY')
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
