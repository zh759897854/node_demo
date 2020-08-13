<style lang="less">

</style>

<template>
    <div class="wrapper">
        <div>输入的内容为 : {{iptValue}}</div>
        <div>
            <base-input :iptPlaceholder="'请输入内容'"
                        :iptValue="iptValue"
                        :iptReadonly="iptReadonly"
                        :iptError="iptError"
                        :errorInfo="'输入有误'"
                        :isRelated="isRelated"
                        :relateData="relateData"
                        @iptEvent="input"
                        @chooseData="chooseCompany"
                        @iptKeyup="iptKeyup"
                        @iptClick="iptClick">
            </base-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                iptValue: '',
                iptReadonly: false,
                iptError: false,
                isRelated: false,
                relateData : [],
            }
        },
        mounted() {
            let that = this;
        },
        methods: {
            input(value) {
                this.iptValue = value;
                if(value == 1){
                    this.iptError = true
                }else{
                    this.iptError = false
                }

                if(value === '银行'){
                    this.isRelated = true;
                    this.relateData = [
                        {name : '中国银行', code : '686425'},
                        {name : '交通银行', code : '688688'},
                        {name : '建设银行', code : '686425'},
                        {name : '招商银行', code : '686425'},
                        {name : '农业银行', code : '686425'},
                        {name : '工商银行', code : '686425'},
                        {name : '民生银行', code : '686425'},
                    ]
                }else{
                    this.isRelated = false;
                }
            },
            chooseCompany(data) {
                this.iptValue = data.name || '';
                this.isRelated = false;
            },
            iptKeyup() {
                console.log('1111')
            },
            iptClick() {
                console.log('2222')
            }
        }
    }
</script>
