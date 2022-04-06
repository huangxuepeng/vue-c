<template>
    <div>
        <van-row>
			<div class="dy-avatar">
				<van-col span="12">
					<van-image
					  round
					  width="1.4rem"
					  height="1.4rem"
					  fit="cover"
					  :src="'http://localhost:8080/images/tx.jpg'"
					/>
				</van-col>
				<div class="dy-comment">
					<h3>昵称</h3>
					<p></p>
						<span class="dy-time">发布于&nbsp;2022-04-06 13:18</span>
					<p>
						<div>
							内容内容内容内容内容内容内容内容内容内容内
							<div class="dy-add">
								内容内容内容内容内容内容内容内容内容内容内
							</div>
							<div class="dy-add">
								内容内容内容内容内容内容内容内容内容内容
							</div>
						</div>
						<div class="dy-img">
							<van-image
							  fit="cover"
							  width="70px"
							  height="70px"
							  :src="'http://localhost:8080/images/yasuo.jpg'"
							/>
							<van-image
							  fit="cover"
							  width="70px"
							  height="70px"
							  :src="'http://localhost:8080/images/yasuo.jpg'"
							/>
							<van-image
							  fit="cover"
							  width="70px"
							  height="70px"
							  :src="'http://localhost:8080/images/yasuo.jpg'"
							/>
							<van-image
							  fit="cover"
							  width="70px"
							  height="70px"
							  :src="'http://localhost:8080/images/yasuo.jpg'"
							/>
							<div></div>
							<van-image
							  fit="cover"
							  width="70px"
							  height="70px"
							  :src="'http://localhost:8080/images/yasuo.jpg'"
							/>
						</div>
						<span class="dy-line">
							________________________________________________________________________
						</span>
					</p>
				</div>
			</div>
			<div class="dy-talk">
				<div id="dy-fathertalk">
					<font color="steelblue">用户一：</font>
					回复的内容
				</div>
				<div id="dy-sontalk">
					<font color="steelblue">用户一</font>回复<font color="steelblue">用户二：</font>
					回复的内容
				</div>
			</div>
			
        </van-row>
    </div>
</template>

<style>

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
	}
	.dy-talk {
		font-size: 15px;
		font-family: arial;
		background-color: lightgrey;
	}
	.dy-line {
		color: lightgray;
	}
	.dy-time {
		color: darkgray;
	}
	.dy-avatar {
		display: flex;
		padding: ;
	}
	.dy-comment {
		margin: 13px;
		font-size: 14px;
		line-height: 20px;
		font-family: "arial";
	}
	.dy-comment h3 {
		margin: 0;
		font-size: 18px;
		line-height: 20px;
		color: royalblue;
	}
	.dy-img {
		margin-top: 0;
		margin-left: 0;
	}
	p {
	    display: block;
	    margin-block-start: 1em;
	    margin-block-end: 1em;
	    margin-inline-start: 0px;
	    margin-inline-end: 0px;
	}

</style>