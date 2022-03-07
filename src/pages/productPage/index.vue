<template>
  <div class="product-page">
    여기어때
    <div class="product-header">
      수정어때
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'

export default {
  name: 'ProductPage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HeaderComponent,
  },
  data() {
    return {
      checkBoxData: '',
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.product-page {
  padding: 5px;
  background-color: #42b983;
  .product-header {
    padding: 5px;
    background-color: bisque;

    font-family: Jalnan;
  }
}

</style>
