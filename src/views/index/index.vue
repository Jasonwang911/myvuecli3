<template>
  <div class="hello">
    hello组件{{ 'new' | newsize }}
    <van-button class="bottom-button" type="danger">
      危险按钮
    </van-button>
    {{ baseUrl }}
  </div>
</template>

<script>
import { baseUrl } from '@/config/env'
import { Button } from 'vant'

export default {
  name: 'Index',
  components: {
    VanButton: Button
  },
  data() {
    return {
      baseUrl: baseUrl
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  color: $blue;
}
</style>
