<template>
  <div class="login">
      登录
<mybutton :text='text' @click="login"></mybutton>
  </div>
</template>

<script>
import mybutton from '@/components/dialynews_button.vue'
export default {
  data () {
    return {
      text: '登录'
    }
  },
  methods: {
    login () {
      console.log(event)
    }
  },
  components: {
    mybutton
  }
}
</script>

<style>

</style>
