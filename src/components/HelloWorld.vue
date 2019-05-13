<template>
  <div class="hello">
    hello组件
   <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { Button, Cell } from 'vant';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    VanButton: Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  color: $blue;
}
</style>
