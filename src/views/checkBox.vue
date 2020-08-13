<style lang="less">

</style>

<template>
    <div class="wrapper">
        <div>单选 ：{{valueData}}</div>
        <base-checkBox :checkBoxData="checkBoxData" :selectIndex="selectIndex" v-model="valueData" @valueChange="valueChange"></base-checkBox>
        <div>复选 ：{{valueData1}}</div>
        <base-checkBox :checkBoxData="checkBoxData1" :selectIndex="selectIndex1" labelType="flash" :multiple="true" v-model="valueData1" @valueChange="valueChange1"></base-checkBox>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectIndex: [0],
                valueData: '',
                checkBoxData: [
                    {
                        value: 'jack',
                        label: '杰克'
                    },
                    {
                        value: 'John',
                        label: '约翰'
                    }
                ],
                selectIndex1: [0,2],
                valueData1: '',
                checkBoxData1: [
                    {
                        value: 'man',
                        label: '男'
                    },
                    {
                        value: 'female',
                        label: '女'
                    },
                    {
                        value: 'gay',
                        label: 'gay'
                    },
                ],
            }
        },
        mounted() {
            let that = this;
        },
        methods: {
            valueChange(val) {
                console.log(val,'11')
            },
            valueChange1(val) {
                console.log(val,'22')
            }
        }
    }
</script>
