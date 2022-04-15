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

		<van-cell-group>
			<van-cell>
				<span class="comment">{{ GetDyById.Comment }}</span>
			</van-cell>
			<van-cell>
				<van-image :src="GetDyById.Cover" class="showCover"></van-image>
			</van-cell>
			<van-cell>
				<van-row>
					<van-col span="10"><van-field value="发表热评~" readonly class="inputs"/></van-col>
					<van-row>
						<van-col span="5" v-debounce="likeDynamic"><van-icon name="like-o" size="0.5rem" class="icon1"></van-icon><span class="icon11">点赞</span></van-col>
						<van-col span="5" v-debounce="comments"><van-icon name="comment-o" size="0.5rem" class="icon2"></van-icon><span class="icon11">评论</span></van-col>
						<van-col span="4" v-debounce="star"><van-icon name="star-o" size="0.5rem" class="icon3"></van-icon><span class="icon11">收藏</span></van-col>
					</van-row>
				</van-row>
			</van-cell>
		</van-cell-group>

    </div>
</template>

<script>
import { mixin } from '@/mixins/instructions.js';
import { GetDynamicByID, DynamicLike, DynamicStar } from '../../server/api';
import { getCookie,setCookie } from '../../../../utils/cookie';
import { Notify } from 'vant';
export default {
	mixins: [mixin],
    data() {
        return {
			loading: true,
			title: '',
			GetDyById: {},
			like:{
				id: 0,
				user_id: 0,
			},
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
			try {
				setCookie('user_id', 1);
				const res = await GetDynamicByID(id);
				if (res.code === 200) {
					this.GetDyById = res.data.data;
					this.like.id = res.data.data.ID;
					// 获取存储在本地的Cookie(用户ID)
					let user_ids = getCookie('user_id');
					this.like.user_id = user_ids;
					// console.log(typeof this.like.user_id);
					// console.log(user_ids);
					// console.log(this.like.id);
				} else {
					Notify({ type: 'danger', message:'出错辣~' });
				}

			} catch (err) {
				Notify({ type: 'danger', message:'出错辣~' });
			}
		},
		// 点赞
		async likeDynamic() {
			try {
				let res = await DynamicLike(this.like);
				// console.log(this.like);
				if (res.code === 200) {
					Notify({ type: 'success', message:'成功' });
				}
			} catch (err) {
				Notify({ type: 'danger', message:'出错辣~' });
			}
		},
		// 评论
		comments() {
			console.log('这是评论');
		},
		// 收藏
		async star() {
			try {
				let res = await DynamicStar(this.like);
				// console.log(res);
				if (res.code === 200) {
					Notify({ type: 'success', message:'成功' });
				}
			} catch (err) {
				Notify({ type: 'danger', message:'出错辣~' });
			}
		},
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
.comment {
	text-indent: 0.5rem;
	letter-spacing: 0.03rem;
	font-size: 0.4rem;
}
.showCover {
	width: 2rem;
}
.inputs.van-cell.van-field {
	margin-left: -15px;
	padding-right: 1px;
}
.icon11 {
	display: flex;
	margin-left: -11px;
}
</style>