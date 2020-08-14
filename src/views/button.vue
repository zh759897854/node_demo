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
        <span>用户：{{role || '--'}}</span><span>自</span><span>{{startDate || '--'}}</span><span>起您的学习时长还剩</span><span>{{date || '--'}}</span><span>小时</span>
    </div>
</template>

<script>
    import axios from 'axios'
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
                axios.post('/sqlapi/studyStatus', {
                    name: 'admin'
                }).then(function (res) {
                    let data = res.data || {};
                    data = data.data_list || {};

                    that.startDate = data.time;
                    that.role = data.user;
                    that.date = data.belong;
                }).catch(function (error) {
                    console.log(error);
                });
            },
            updata() {
                let that = this;
                let roleInfo = JSON.parse(decodeURIComponent(window.localStorage.getItem('roleInfo')));
                axios.post('/sqlapi/updataStudyStatus', {
                    name: '18613361046'
                }).then(function (res) {
                    console.log('修改成功', res)
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
