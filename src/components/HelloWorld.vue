<template>
  <div class="hello">
    hello组件{{ 'new' | newsize }}
    <van-button type="danger">
      危险按钮
    </van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
import { mineHelpApi } from '@/apis/modules'

export default {
  name: 'HelloWorld',
  components: {
    VanButton: Button
  },
  mounted() {
    mineHelpApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  color: $blue;
}
</style>
