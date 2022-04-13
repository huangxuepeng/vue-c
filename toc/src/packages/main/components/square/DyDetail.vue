<template>
    <div>
		<van-nav-bar
		left-text="返回"
		title="详情"
		left-arrow
		@click-left="onClickLeft"
		/>
		<div class="head_box">
				<van-image
				round
				width="1.5rem"
				height="1.5rem"
				fit="fill"
				src="https://img01.yzcdn.cn/vant/cat.jpeg"
				/>
					<span class="title">题目</span>
					<span class="time">时间</span>
		</div>

		<span>
			{{GetDyById.Comment}}
		</span>
		
    </div>
</template>

<script>
import { GetDynamicByID } from '../../server/api';
export default {
    data() {
        return {
			loading: true,
			title: '',
			GetDyById: {},
        };
    },

    mounted () {
        this.loading = true;
		this.showDetail();
    },
    methods: {
		onClickLeft() {
			this.$router.go(-1);
		},
		async showDetail() {
			let id = this.$route.query.id;
			const res = await GetDynamicByID(id);
			this.GetDyById = res.data.data;
			// console.log(res.data.data);
		}
    },
};
</script>

<style langs="less" scoped>
span{
	display: flex;

	padding-left: 10px;
}
.head_box {
	background-color: antiquewhite;
	display: flex;
	/* justify-content: space-evenly; */
	padding-left: 4px;
}
.title{
	display: flex;
	font-size: 0.5rem;
	padding-left: 10px;
}
.time{
	display: flex;
	font-size: 0.1rem;
	padding-top: 1.1rem;
	padding-left: 3.5rem;
}
</style>