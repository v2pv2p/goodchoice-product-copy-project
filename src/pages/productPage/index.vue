<template>
  <!--  pc 모바일 여부 class 추가하기-->
  <div class="product-page">
    <!--    스크롤 여부 class 추가하기-->
    <header-component :isScroll="isScroll"></header-component>

    <div class="sub-header">
      <div class="sub-header-wrapper">
        <div class="sub-header-title">내주변</div>
        <div class="location-area">
          <div class="my-location">중구 태평로1가</div>
          <div class="location-reset">내 위치 재설정</div>
        </div>
      </div>
    </div>

    <div class="product-content">
      123데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터데이터
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
  computed: {},
  data() {
    return {
      isScroll: false,
      headerSize: 0
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

  .sub-header {
    background-color: #f7323f;

    .sub-header-wrapper {
      width: 1024px;
      height: 139px;

      padding-top: 72px;
      margin: 0 auto;

      .sub-header-title {
        margin-top: 21px;

        font-size: 38px;
        font-weight: normal;
        color: #ffffff;
      }

      .location-area {
        display: flex;
        margin-top: 15px;

        .my-location {
          margin: 0 10px 0 0;
          font-size: 18px;
          font-weight: bold;
          line-height: 32px;
          color: #ffffff;
        }

        .location-reset {
          height: 32px;
          padding: 0 6px;

          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 4px;

          background: rgba(0, 0, 0, 0.04);

          font-size: 14px;
          line-height: 32px;

          color: #fff;

          &:hover {
            background: rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.08);
          }
        }
      }
    }
  }

  .product-content {
    width: 1024px;
    height: 5000px;

    margin: 0 auto;
  }
}

</style>
