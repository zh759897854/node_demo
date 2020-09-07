<style lang="less">
.wrapper {
    > div {
        margin-right: 5px;
        display: inline-block;
    }
}
</style>

<template>
    <div class="wrapper">
        <div>
            <base-button btnText="查询" :btnBg="true" @confirm="confirm"></base-button>
        </div>
        <div>
            <base-button btnText="提交" @confirm="updata"></base-button>
        </div>
        <br>
       </div>
</template>

<script>
    export default {
        data() {
            return {
                role: '',
                date: '',
                startDate: ''
            }
        },
        mounted() {
            let that = this;
        },
        methods: {
            confirm() {
                let that = this;
                let roleInfo = JSON.parse(decodeURIComponent(window.localStorage.getItem('roleInfo')));
                this.$http.post('/sqlapi/common_api', {
                    table_name: 'study_status',
                    pageNumber: 1,
                    pageSize: 2
                }).then(function (res) {
                    let data = res.data || {};
                    data = data.data_list || {};
                    console.log(data)
                }).catch(function (error) {
                    console.error(error)
                });
            },
            updata() {

            }
        }
    }
</script>
