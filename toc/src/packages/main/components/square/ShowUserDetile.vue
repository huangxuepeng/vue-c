<template>
    <div>
        <span>作者细节</span>
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
