<style lang="less">

</style>

<template>
    <div class="wrapper">
        <base-table :scrollX="false"
                  :titleData="titleData"
                  :bodyData="bodyData"
                  :trClass="trClass"
                  @tdClick="tdClick"
                  @getSortData="getSortData">
        </base-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                trClass: [
                    {
                        index: 5,
                        className: 'detail'
                    },
                    {
                        index: 0,
                        className: 'companyName'
                    }
                ],
                titleData : [
                    {company: '公司名称',className: 'companyName'},
                    {type: '公司类型'},
                    {target: '收购标的'},
                    {legalPreson: '法人代表'},
                    {capital: '注册资本<br><small>(万元)</small>',sortValue: 'capital',sortType: ''},
                    {detail: '详情'},
                ],
                bodyData : [{
                    type: "非挂牌",
                    target: "2020-01-10",
                    company: "北京视野金融信息服务有限公司",
                    legalPreson: '张三',
                    capital: "1500",
                    detail: "详情",
                },
                    {
                        type: "A股上市",
                        target: "2020-01-10",
                        company: "字节跳动",
                        legalPreson: '李四',
                        capital: "2500",
                        detail: "详情",
                    }
                ],
            }
        },
        mounted() {
            let that = this;
        },
        methods: {
            tdClick(value) {
                console.log(value,'点击事件')
            },
            getSortData(sortData) {
                console.log(sortData,'排序事件')
                let that = this;
                let titleData = that.titleData || [];
                if(sortData.sortType){
                    for(let i = 0, l = titleData.length; i < l; i++){
                        if(titleData[i].hasOwnProperty(sortData.sortValue)){
                            titleData[i].sortType = sortData.sortType;
                        }
                    }
                }
            }
        }
    }
</script>
