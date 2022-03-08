<template>
  <!--  pc 모바일 여부 class 추가하기-->
  <div class="product-page">
    <!--    스크롤 여부 class 추가하기-->
    <header-component class="header" :isScroll="isScroll"></header-component>
    <div class="product-content">123데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터</div>
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
  computed: {

  },
  data() {
    return {
      isScroll: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.isScroll = !!document.documentElement.scrollTop
    }
  }
}
</script>

<style scoped lang="scss">
.product-page {
  height: 100%;

  background-color: #42b983;

  .product-content {
    width: 1024px;
    height: 5000px;

    margin: 0 auto;
  }
}

</style>
