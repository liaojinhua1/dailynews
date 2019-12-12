<template>

<div class="btn" @click="handerclick">
{{text}}
</div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    // 当被单击的时候，将事件传递给父组件，让父组件进行事件的响应
    handerclick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
    // margin: 0 auto;
    width: 314*100vw/360;
    height: 48 / 360 * 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
//   line-height: 48*100vw/360;
//   text-align: center;
  background-color: rgb(204, 51, 0);
  color: #fff;
  border-radius: 24*100/360vw;
  font-style: 20px;
}
</style>
