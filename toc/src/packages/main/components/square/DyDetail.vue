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
				:src="GetDyById.userAvatar"
				/>
					<span class="title">题目</span>
					<span class="time">时间</span>
		</div>

		<van-cell-group>
			<van-cell>
				<span class="comment">{{ GetDyById.dynamicComment }}</span>
			</van-cell>
			<van-cell>
				<van-image :src="GetDyById.dynmaicCover" class="showCover"></van-image>
			</van-cell>
			<!-- <van-cell>
				<van-row class="lar">
					<van-col span="10"><van-field value="发表热评~" readonly class="inputs"/></van-col>
					<van-row>
						<van-col span="5" v-debounce="likeDynamic"><van-icon name="like-o" size="0.5rem" class="icon1"></van-icon><span class="icon11">点赞</span></van-col>
						<van-col span="5" v-debounce="comments"><van-icon name="comment-o" size="0.5rem" class="icon2"></van-icon><span class="icon11">评论</span></van-col>
						<van-col span="4" v-debounce="star"><van-icon name="star-o" size="0.5rem" class="icon3"></van-icon><span class="icon11">收藏</span></van-col>
					</van-row>
				</van-row>
			</van-cell> -->
		</van-cell-group>
		<van-sticky>
		<div class="lar">
		<van-cell>
				<van-row>
					<van-col span="10" @click="test">
						<van-field value="发表热评~" readonly class="inputs"/>
					</van-col>
					<van-row>
						<van-col span="5" v-debounce="likeDynamic">
							<van-icon name="like-o" size="0.5rem" class="icon1" />
							  	<span class="icon11">点赞</span>
						</van-col>
						<van-col span="5" v-debounce="commentsShowAll">
							<van-icon name="comment-o" size="0.5rem" class="icon2" />
								<span class="icon11">评论</span>
						</van-col>
						<van-col span="4" v-debounce="star">
							<van-icon name="star-o" size="0.5rem" class="icon3" />
								<span class="icon11">收藏</span>
						</van-col>
					</van-row>
				</van-row>
			</van-cell>
		</div>
		</van-sticky>
		<van-popup v-model="show" position="left" :style="{ height: '80%', width: '100%'}" round>
			<span class="sumcomment">{{ this.total }}条评论</span>
			<van-cell-group  v-for="item in comments" :key="item.ID">
				<van-cell>
					<van-image
						width="1rem"
						height="1rem"
						:src="item.Avatar"
						/>
					<span class="nickname" @click="showFatherComment(item)">{{ item.NickName }}</span>
					<span class="content">{{ item.Comment }}</span>
					<van-collapse v-model="activeNames">
						<van-collapse-item v-if="item.SonID.length !== 0">
							<template #title>
							<div>展开{{ item.SonID.length }}条回复</div>
							</template>
							<van-cell-group v-for="sonItem in item.SonID" :key="sonItem.ID">
								<van-cell>
									<van-image
										width="1rem"
										height="1rem"
										:src="sonItem.Avatarson"
										/>
								<span class="nickname" @click="showFatherComment(item)">{{ sonItem.NickNameson }}</span>
								<span class="content">{{ sonItem.Commentson }}</span>
								</van-cell>
							</van-cell-group>
						</van-collapse-item>
					</van-collapse>
				</van-cell>
			</van-cell-group>
		</van-popup>
    </div>
</template>

<script>
import { mixin } from '@/mixins/instructions.js';
import { 
		GetDynamicByID, 
		DynamicLike, 
		DynamicStar,
		PushDynamicComment,
		PushDynamicCommentReply,
} from '../../server/api';
import { 
		getCookie,
		setCookie, 
} from '../../../../utils/cookie';
import { Notify } from 'vant';
export default {
	mixins: [mixin],
    data() {
        return {
			activeName: '0',
			loading: true,
			title: '',
			GetDyById: {
				userAvatar: '',
				userNickName: '',
				dynamicComment: '',
				dynmaicCover: '',
			},
			like:{
				id: 0,
				user_id: 0,
			},
			comments:[],
			show: false,
			activeNames: ['1'],
			total: 0,
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
			// console.log(id);
			try {
				setCookie('user_id', 1);
				const res = await GetDynamicByID(id);
				if (res.code === 200) {
					this.like.id = id;    // 动态ID
					// 获取存储在本地的Cookie(用户ID)
					let user_ids = getCookie('user_id');
					this.like.user_id = user_ids;
					this.comments = res.data.data;
					this.GetDyById.userAvatar = res.data.userAvatar;
					this.GetDyById.userNickName = res.data.userNickName;
					this.GetDyById.dynamicComment = res.data.dynamicComment;
					this.GetDyById.dynmaicCover = res.data.dynamicCover;
					this.total = res.data.total;
					console.log(res.data.data);
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
				console.log(this.like);
				if (res.code === 200) {
					Notify({ type: 'success', message:'成功' });
				}
			} catch (err) {
				Notify({ type: 'danger', message:'出错辣~' });
			}
		},
		// 评论
		commentsShowAll() {
			this.show = true;
			console.log(this.comments);
			
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
		test() {
			this.show = true;
		}
    },
};
</script>

<style lang="less" scoped>
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
.lar{
	display: fixed;
	padding-top: 4.5rem;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    width: 120px;
    height: 120px;
    background-color: #fff;
}
.sumcomment {
	font-size: 20px;
	margin-left: 30%;
}
/deep/ .van-image__img {
	border-radius: 10px;
}
.nickname {
    display: flex;
	font-weight:bold;
	margin-left: 1rem;
	color: #565E7D;
	margin-top: -1.1rem;
}
.content {
    display: flex;
	font-size: 18px;
	margin-left: 1rem;	
}
/deep/ .van-cell.van-cell--clickable.van-collapse-item__title {
	width: 3rem;
	margin-left: 0.9rem;
}
</style>