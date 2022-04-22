<template>
  <div>
  <van-nav-bar title="缘分" />
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item.id">
     <!-- 显示异性的样式 -->
    </van-cell>
  </van-list>
  </div>
</template>

<script>
import { 
    getCookie,
    removeCookie,
    setCookie,
} from '../../../../utils/cookie';
import { OppositeSex } from '../../server/api';
export default {
    data() {
        return {
          list: [],
          total: 0,
          loading: false,
          finished: false,
          params: {
            sex: '',
          }
        };
    },
    mounted() {
      
    },
    methods: {
      // 获取异性列表, 并且完成赋值
      async getOppositeSexList() {
        let sex = getCookie('user_sex');
        this.params.sex = sex;
        const res = await OppositeSex(this.params);
        console.log(res.data.data);
        if ((res.data.data).length === 0) {
          this.list = 0;
          this.finished = true;    // 停止加载
        }
        // 如数据不为零
        this.total = (res.data.data).length;
        this.list.push(...res.data.data)   // 将数据全部插入数组中
        this.loading = false;   // 加载状态结束
        // 如果list长度大于等于总数据条数,数据全部加载完成
        if (this.list.length >= (res.data.data).length) {
            this.finished = true;		// 结束加载状态
        }
      },
      // 加载异性的列表
       onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        let timer = setTimeout(() => {	// 定时器仅针对本地数据渲染动画效果,项目中axios请求不需要定时器
        this.getOppositeSexList();				// 调用上面方法,请求数据
        this.finished && clearTimeout(timer);//清除计时器
      }, 1000);
      },
    },
};
</script>

<style>

</style>