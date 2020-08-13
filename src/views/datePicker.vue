<style lang="less">

</style>

<template>
    <div class="wrapper">
        <div>选中的时间是 ：{{date}}</div>
        <div>
            <date-picker v-model="date"
                         :maxDate="date"
                         :noAfterToday="true"
                         :clearBtn="true"
                         :initBtn="true"
                         @confirm="confirm"
                         @dateValueChange="dateValueChange">
            </date-picker>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: ''
            }
        },
        mounted() {
            let that = this;
        },
        methods: {
            confirm() {
                console.log('更改时间了')
            },
            dateValueChange() {
                console.log('选择了时间')
            }
        }
    }
</script>
