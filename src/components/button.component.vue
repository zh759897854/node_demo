<style lang="less">
   .common-button {
       width: auto;
       display: inline-block;
       .btn-waper {
           /*不带icon的按钮*/
           .common-btn {
               position: relative;
               display: inline-block;
               min-width: 52px;
               font-size: @font-size-base;
               background: @color-white;
               color: @color-primary;
               padding: 0;
               margin: 0;
               text-align: center;
               border: 1px solid @color-primary;
               border-radius: @btn-border-radius;
               outline: none;
               cursor: pointer;
               -webkit-background-size: 20px 20px;
               background-size: 20px 20px;
               background-repeat: @background-repeat;
               background-position: 5px 5px;
           }
           .common-btn:active {
               color: @btn-active-bg;
               border-color: @btn-active-bg;
           }
           .bgc-btn {
               background: @color-primary;
               color: @color-white;
           }
           .bgc-btn:active {
               color: @color-white;
               background: @btn-active-bg;
               border-color: @btn-active-bg;
           }
           /*带icon的按钮*/
           .btn-icon {
               min-width: 72px;
               padding-left: 25px;
           }
           .bgc-btn-color {
               color: @color-primary;
               -webkit-background-size: 20px 20px;
               background-size: 20px 20px;
               background-repeat: @background-repeat;
               background-position: 5px 5px;
           }
           .bgc-btn-color:active {
               color: @btn-active-bg;
               background-color: @color-white !important;
           }
       }
   }
</style>
<template>
    <div class="common-button">
        <div class="btn-waper">
            <!--普通按钮-->
            <button class="common-btn" :class="{'bgc-btn': btnBg}" :style="styleObject" @click="confirm" v-if="!btnIcon">{{btnText}}</button>

            <!--有icon的按钮-->
            <button class="common-btn btn-icon"
                    :class="{'bgc-btn-color': btnIcon}"
                    :style="styleObject"
                    @click="confirm"
                    @mousedown="ChangeIcon"
                    @mouseup="resetIcon" v-else> <slot></slot> {{btnText}}
            </button>
        </div>
    </div>
</template>
<script>
    /**
     * author: ZH
     * @description : 通用button组件
     * @params : btnText <string> 按钮文字
     *           btnBg <Boolean> 是否有背景颜色
     *           btnHeight <string> 高度默认是设计图32px
     *           btnIcon <Boolean,string> 是否有图标 默认没图标  传字符串直接传图片名 图片需要有active图片
     */
    export default{
        data() {
            return {
                iconTab: true
            }
        },
        props:{
            btnText: { // 按钮文字
                type: String,
                default: function() {
                    return '查询'
                }
            },
            btnBg: { // 是否有背景颜色
                type: Boolean,
                default: function() {
                    return false
                }
            },
            btnHeight: { // 按钮高度 默认32
                type: String,
                default: function() {
                    return '32'
                }
            },
            btnIcon: { // 是否有背景图片
                type: [String,Boolean],
                default: function() {
                    return false
                }
            },
        },
        computed: {
            styleObject() {
                let result = {};
                if(this.btnIcon) {
                    let btnIcon = this.btnIcon;
                    btnIcon = btnIcon.toString();
                    if(this.iconTab) {
                        result.backgroundImage = 'url('+ require('@/components/image/'+ this.btnIcon + ".png") +')';
                    }else {
                        result.backgroundImage = 'url('+ require('@/components/image/'+ this.btnIcon + "-active.png") +')';
                    }
                }
                result.height = this.btnHeight + 'px';
                return result;
            },
        },
        mounted(){},
        methods:{
            confirm() {
                this.$emit('confirm')
            },
            ChangeIcon() {
                this.iconTab = !this.iconTab;
            },
            resetIcon() {
                this.ChangeIcon();
            }
        },
    }
</script>
