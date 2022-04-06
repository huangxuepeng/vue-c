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
					<h3>昵称（id：209876567）</h3>
					<p class="target">
						<van-tag plain type="danger">小姐姐</van-tag>
						<van-tag plain type="success">健身</van-tag>
						<van-tag plain type="primary">打球</van-tag>
						<van-tag plain type="primary">跑步</van-tag>
						<div class="dy-line">
							________________________________________________
						</div>
                </p>
				</div>
        </div>
        </van-row>
		<van-row>
			<div class="dy-body">
				他/她的动态：
				<div class="dy-line">
					________________________________________________
				</div>
				<div>
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
					<span class="dy-zhuye">
						>
					</span>
				</div>
			</div>
		</van-row>
    </div>
</template>
<script>
import { UserDetail } from '../../server/api';
export default {
    data() {
        return {
            Articless: [],
        };
    },

    mounted () {
        this.showUserdetail();
    },
    methods: {
        async showUserdetail() {
            var id = this.$route.query.id;
            console.log(id);
            const res = await UserDetail(id);
            console.log(res);
        }
    },
};
</script>
<style>
	.dy-zhuye {
		margin-top: 0;
		font-size: 85px;
		color: lightgray;
	}
	.target {
		font-family: "arial black";
	}
	.dy-body {
		font-size: 20px;
		font-family: "arial black";
	}
</style>
