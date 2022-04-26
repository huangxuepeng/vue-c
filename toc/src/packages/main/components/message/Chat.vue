<template>
	<div>
		<van-nav-bar
		  title="admin"
		  left-text=""
		  left-arrow
		  @click-left="onClickLeft"
		/>

	</div>
	
</template>

<script>
export default {
	data() {
		
	},
	methods: {
		onClickLeft() {
		    this.$router.push('/home/message');
			  location.reload();
		},
	}
}
</script>

<style>
	
</style>
