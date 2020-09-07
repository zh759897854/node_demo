<style lang="less">
    .login {
        width: 300px;
        margin: 0 auto;
        text-align: center;
        .login-box {
            position: fixed;
            width: 300px;
            height: auto;
            left: 50%;
            margin-left: -150px;
            top: 150px;
            padding: 10px;
            box-shadow: 1px 1px 5px #e9e9e9;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            > div {
                margin-bottom: 10px;
            }
            .label {
                display: inline-block;
                width: 55px;
                padding-right: 5px;
                text-align: right;
            }
            .tip {
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
                font-size: 12px;
                color: #999;
                margin-bottom: 0;
            }
        }
    }
</style>

<template>
    <div class="login">
        <div class="login-box">
            <div>
                <span class="label">用户名:</span>
                <base-input :iptPlaceholder="'请输入用户名'"
                            @iptEvent="setUser"
                            :errorInfo="'输入有误'">
                </base-input>
            </div>
            <div>
                <span class="label">密码:</span>
                <base-input :iptPlaceholder="'请输入密码'"
                            @iptEvent="setPassWord"
                            :errorInfo="'输入有误'"
                            iptType="password">
                </base-input>
            </div>
            <base-button btnText="登录" :btnBg="true" @confirm="confirm"></base-button>
            <div class="tip">{{alertText}}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                userName: '',
                passWord: '',
                alertText: ''
            }
        },
        methods: {
            setUser(data) {
                this.userName = data || '';
            },
            setPassWord(data) {
                this.passWord = data || '';
            },
            confirm() {
                // node+express前端服务器
                // axios.post('/get_data', {
                //     name: encodeURIComponent('test.data')
                // }).then(function (res) {
                //     console.log(res.data)
                // }).catch(function (error) {
                //     console.log(error);
                // });

                // node+express+mysql前端服务器
                let that = this;
                axios.post('/sqlapi/login', {
                    username: that.userName,
                    password: that.passWord
                }).then(function (res) {
                    var data =  res.data || {};
                    if (data.status === 200) {
                        window.localStorage.setItem('roleInfo', encodeURIComponent(JSON.stringify(data.data_list)));
                        that.alertText = '登录成功';
                        setTimeout(function () {
                            that.alertText = '';
                            that.$router.push({path: '/index'});
                        },250)
                    }else {
                        that.alertText = '登录失败';
                        setTimeout(function () {
                            that.alertText = '';
                        },250);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>