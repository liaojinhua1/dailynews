<template>
 <input
 :type="type"
 class="inp"
 :value="value"
 @input="handerinput"
 @blur="handerblur"
 :class="{error:!state,success:state}">
</template>

<script>
export default {
  props: ['type', 'value', 'rules', 'msg_err'],
  data () {
    return {
      state: false
    }
  },
  mounted () {
    this.state = !!this.value
  },
  methods: {
    //   响应文本框的数据变化
    handerinput (event) {
    //  要告诉父组件内容变化，并且要告诉父组件内容到底现在是什么值
      let value = event.target.value
      if (this.rules) {
        if (this.rules.test(value)) {
        //   console.log(this.msg_err)
          this.state = true
        } else {
          this.state = false
        }
      } else {
        this.state = !!value
      }
      this.$emit('input', value)
    },
    // 响应文本框失去焦点
    handerblur (event) {
      if (this.rules && !this.rules.test(event.target.value)) {
        // 给出提示
        // console.log(this.msg_err)
        // 使用vant弹出错误提示
        this.$toast.fail(this.msg_err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.inp{
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    width: 314*100vw/360;
    height: 48*100vw/360;
    border-bottom: 2px solid rgb(117,117,117);
    font-style: 20px;
    background-color: transparent;
}
.error{
     border-bottom-color:  rgb(248, 3, 3);
}
.success{
     border-bottom-color:  rgb(2, 252, 15);
}
</style>
