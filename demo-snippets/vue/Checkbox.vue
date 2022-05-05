<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 1" />
		</ActionBar>
		<StackLayout>
			<StackLayout>
				<FlexboxLayout>
					<Checkbox value="remember" v-model="r1" @checkedChange="r1 = $event.value" activeColor="yellow" />
					<Label text="Remember Me" />
				</FlexboxLayout>
				<Label :text="r1 ? 'True' : 'False'" marginLeft="20" />
			</StackLayout>

			<StackLayout>
				<FlexboxLayout>
					<RadioGroup v-model="form" @selectedChange="form = $event.value">
						<Radio value="4" />
						<Radio value="5" />
						<FlexboxLayout>
							<Radio value="1" activeColor="purple" inactiveColor="brown" class="test" />
							<Label text="1" />
						</FlexboxLayout>
						<FlexboxLayout>
							<Radio value="2" />
							<Label text="2" />
						</FlexboxLayout>
						<FlexboxLayout>
							<Radio value="3" />
							<Label text="3" />
						</FlexboxLayout>
					</RadioGroup>
					<Label :text="r2" marginLeft="50" />
				</FlexboxLayout>
			</StackLayout>
			<StackLayout>
				<FlexboxLayout>
					<Checkbox value="remember" v-model="r1" @checkedChange="r1 = $event.value" activeColor="yellow" />
					<Label text="Remember Me" />
				</FlexboxLayout>
				<Label :text="r3 ? 'True' : 'False'" marginLeft="20" />
			</StackLayout>
		</StackLayout>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			r1: true,
			r2: false,
			r3: true,
			form: 1
		};
	}
};
</script>

<style lang="scss" scoped>
.test {
	active-color: pink;
	inactive-color: indigo;
}
</style>