<template>
  <!--  스크롤 여부 확인 추가 class="scroll"-->
  <div class="header-component" :class="{'is-scroll':isScroll}">
    <div class="header-wrapper">
      <div class="header-left">수정어때.</div>
      <div class="header-right">
        <div class="header-button icon-search"></div>
        <div class="header-button">내주변</div>
        <div class="header-button">예약내역</div>
        <div class="header-button">더보기</div>
        <div class="header-button">로그인</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    isScroll: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/styles/mixin";

.header-component {
  display: flex;
  align-items: center;

  width: 100%;
  height: 74px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.4s;

  background: #f7323f;

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    .header-left {
      display: flex;
      align-items: center;

      font-family: Jalnan;
      font-size: 21px;
      color: #fff8f8;

      cursor: pointer;
    }

    .header-right {
      display: flex;

      font-size: 18px;
      color: #fff8f8;

      .header-button {
        display: flex;
        align-items: center;

        margin: 0 0 0 30px;

        cursor: pointer;
      }
    }
  }
}

@include desktop {
  .header-component {
    &.is-scroll {
      background: #ffffff;

      box-shadow: 0 2px 3px 0 #e9e9e9;
      .header-left {
        color: #f7323f;
      }

      .header-right {
        color: #000000;
      }
    }

    .header-wrapper {
      width: 1024px;
      height: 64px;

      margin: 0 auto;
    }
  }
}

</style>
