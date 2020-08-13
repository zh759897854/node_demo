<style lang="less">

</style>

<template>
    <div class="wrapper">
        <div>选中值为：{{slectValue}}</div>
        <base-select :options="options" @valueChange="valueChange"></base-select>
        <br/><br/>
        <div>选中值为：{{slectValue1}}</div>
        <base-select :options="options1" :selectIndex="selectIndex" v-model="slectValue1" :multiple="true"></base-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slectValue: '',
                slectValue1: '',
                selectIndex: [1,3],
                options: ['2019-06-28','2019-06-09','2019-06-10','2019-06-11','2019-06-12'],
                options1: ['2019-06-28','2019-06-09','2019-06-10','2019-06-11','2019-06-12'],
            }
        },
        mounted() {
            let that = this;
        },
        methods: {
            valueChange(data) {
                this.slectValue = data.text
            }
        }
    }
</script>
