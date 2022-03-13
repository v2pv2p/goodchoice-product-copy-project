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
      <div class="main-category">
        <div class="category-item selected">모텔</div>
        <div class="category-item">호텔</div>
        <div class="category-item">리조트</div>
        <div class="category-item">게스트하우스</div>
        <div class="category-item">캠핑</div>
      </div>
      <div class="category-main-wrapper">
        <div class="sub-category">
          <div class="date-area">
            <div class="date-title">날짜</div>
            <div class="date-picker">데이트피커</div>
          </div>
          <div class="category-detail">
            <div class="category-title">상세조건</div>
            <div class="button-area">
              <div class="button reset-button">초기화</div>
              <div class="button apply-button">적용</div>
            </div>
            <div>
              <div class="category-check-box-area" v-for="(item,index) in checkBoxList" :key="item + '' + index">
                <input class="check-box" :id="item" type="checkbox" v-model="checkBoxData" :value="item">
                <label :for="item" class="label_chk">{{ item }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="main-content">
          <div class="sort-category"></div>
          <!--          top 추천-->
          <div class="top-advertisement">

          </div>
          <!--          인기 추천-->
          <!--          거리순-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'

export default {
  name: 'ProductPage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HeaderComponent
  },
  computed: {},
  data() {
    return {
      checkBoxData: [],
      checkBoxList: ['대실 예약', '숙박 예약', '50% 할인'],
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

    .main-category {
      display: flex;
      align-items: center;

      height: 72px;

      border-bottom: 1px solid #9e9e9e;

      font-size: 18px;
      color: #9e9e9e;

      .category-item {
        margin: 0 24px 0 0;
      }

      & .selected {
        color: #E61C51;
      }
    }

    .category-main-wrapper {
      display: flex;
      padding-top: 40px;

      .sub-category {
        flex: 0 0 250px; /* 증가너비 감소너비 기본너비 */

        width: 250px;

        margin: 0 32px 0 0;
        padding: 27px;

        border: 1px solid #efefef;

        .date-area {
          border-bottom: 1px solid #efefef;

          .date-title {
            font-size: 18px;
            font-weight: bold;
          }

          .date-picker {
            margin: 13px 0 32px 0;
          }
        }

        .category-detail {
          padding-top: 30px;

          .category-title {
            font-size: 18px;
            font-weight: bold;
          }

          .button-area {
            display: flex;
            justify-content: space-between;

            margin: 13px 0 32px 0;

            .button {
              display: flex;
              align-items: center;
              justify-content: center;

              width: 120px;
              height: 40px;

              border-radius: 4px;

              &.reset-button {
                border: 1px solid #F2074C;

                color: #F2074C;
              }

              &.apply-button {
                border: 1px solid #F2074C;
                background-color: #F2074C;

                color: #ffffff;
              }
            }
          }

          .category-check-box-area {
            display: grid;
            grid-template-columns: 20px auto;
            grid-row-gap: 15px;
            grid-column-gap: 10px;

            align-items: center;

            color: #888284;


          }
        }
      }

      .main-content {
        flex: 1 0 0; /* 증가너비 감소너비 기본너비 */

        width: 742px;

        background-color: aquamarine;

        .sort-category {

        }

        .top-advertisement {

        }
      }
    }
  }
}

</style>
