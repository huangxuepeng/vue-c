<template>
    <div>
        <div class="desc">
        <el-container>
            <el-header>
                
                 <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>font</el-footer>
        </el-container>
        </div>
    </div>
</template>

<script>
import { _exampleAPI } from '../../server/api.js';
export default {
    data() {
        return {
            input: '',
        };
    }    
};
</script>
<style lang="less" scoped>
</style>
