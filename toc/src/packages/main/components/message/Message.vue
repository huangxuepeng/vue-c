<template>
  <div>
        <van-nav-bar title="消息" />
		<van-cell>
			<van-row>
				<van-col span="13">
					<div class="msgList">
						  <van-image
						    round
							width="1rem"
							height="1rem"
							fit="cover"
							src="https://img.yzcdn.cn/vant/cat.jpeg"
						  />
						  <div class="content" @click="toChat()">
							  <h3>木屋</h3>
							  <span class="msg">想要这样一间小木屋，夏天挫冰吃瓜，冬天...</span>
							  <span class="msgCounts"><van-badge :content="20" /></span>
						  </div>
					</div>
					<van-divider />
				</van-col>
				<van-col span="13">
					<div class="msgList">
						  <van-image
						    round
							width="1rem"
							height="1rem"
							fit="cover"
							src="https://img.yzcdn.cn/vant/cat.jpeg"
						  />
						  <div class="content">
							  <h3>admin</h3>
							  <span class="msg">消息内容</span>
							  <span class="msgCounts"><van-badge :content="20" /></span>
						  </div>
					</div>
				</van-col>
			</van-row>
		</van-cell>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
    data() {
        return {

        };
    },
	mounted() {
		
	},
	methods: {
		toChat() {
			this.$router.push('/home/chat');
		}
	}
};
</script>

<style>

div {
	display: block;
}

.msgList {
	display: flex;
	width: 380px;
	height: 55px;
	font-family: 宋体;
}

.content {
	padding-top: 6px;
	width: 330px;
}
.content h3{
	margin: 0;
	font-size: 18px;
	line-height: 20px;
}
.msgCounts {
	float: right;
}
.msg {
	color: dimgrey;
	font-family: "arial black";
}

</style>