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
        <!--        선택 클래스추가 selected-->
        <div class="category-item" v-for="category in mainCategoryList" :key="category">{{ category }}</div>
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
          <div class="sort-category">
            <div class="top-sort-area">
              <div class="top-sort" v-for="category in sortCategoryList" :key="category">{{ category }}</div>
            </div>
            <div class="map-btn">지도</div>
          </div>

          <div class="product-list">
            <!--            광고인지 여부 확인 클래스 추가 배경색 변경, ?광고 추가-->
            <div class="product-area" v-for="productType in productTypeList" :key="productType">
              <div class="product-type">{{ productType }}</div>

              <div class="product-item-area" v-for="product in productList" :key="product.productName">
                <div class="product-item">
                  <div class="product-img">이미지</div>

                  <div class="product-detail">
                    <div class="product-name-area">
                      <div class="product-name">{{ product.name }}</div>
                      <div class="product-rating-area">
                        <div class="product-rating-score">{{ product.ratingScore }}</div>
                        <div class="product-rating-string">{{ product.ratingString }}</div>
                        <div class="product-review-count">({{ product.reviewCount }})</div>
                      </div>

                      <div class="product-location-area">
                        <div class="product-distance">{{ product.distance }}</div>
                        <div class="product-location">{{ product.location }}</div>
                      </div>
                    </div>
                    <div class="product-price-area">
                      <div class="half-rent-type">대실</div>
                      <div class="product-price">{{ '25,000' }}원</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

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
      mainCategoryList: ['모텔', '호텔', '리조트', '게스트하우스', '캠핑'],
      sortCategoryList: ['거리 순', '낮은 가격 순', '높은 가격 순'],
      productTypeList: ['Top 추천', '인기 추천', '거리 순'],
      productList: [
        {
          name: '수유 다니엘캄파넬라',
          ratingScore: '9.5',
          ratingString: '추천해요',
          reviewCount: '65',
          distance: '9.15km',
          location: '강남구 역삼동'
        },
        {
          name: '수유 다니엘캄파넬라',
          ratingScore: '9.5',
          ratingString: '추천해요',
          reviewCount: '65',
          distance: '9.15km',
          location: '강남구 역삼동'
        },
        {
          name: '수유 다니엘캄파넬라',
          ratingScore: '9.5',
          ratingString: '추천해요',
          reviewCount: '65',
          distance: '9.15km',
          location: '강남구 역삼동'
        }
      ],
      isScroll: false,
      headerSize: 0
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll)
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

          cursor: pointer;

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

      border-bottom: 1px solid #efefef;

      font-size: 18px;
      color: #9e9e9e;

      .category-item {
        margin: 0 24px 0 0;

        cursor: pointer;
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
              cursor: pointer;

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

            input {
              cursor: pointer;

            }

            label {
              cursor: pointer;

            }
          }
        }
      }

      .main-content {
        flex: 1 0 0; /* 증가너비 감소너비 기본너비 */

        width: 742px;
        height: 40px;

        //background-color: aquamarine;

        .sort-category {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 40px;

          .top-sort-area {
            flex: 1 0 0; /* 증가너비 감소너비 기본너비 */

            display: flex;

            height: 40px;

            border: 1px solid #efefef;

            .top-sort {
              flex: 1 0 0; /* 증가너비 감소너비 기본너비 */

              display: flex;
              justify-content: center;
              align-items: center;

              border-right: 1px solid #efefef;

              color: #a0a0a0;

              cursor: pointer;

              &:last-child {
                border: none;
              }
            }
          }

          .map-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 80px;
            height: 40px;

            margin-left: 8px;

            border: 1px solid #efefef;
            border-radius: 4px;

            color: #a0a0a0;

            cursor: pointer;

          }
        }

        .product-list {

          .product-area {

            .product-type {
              padding: 23px 0 12px 0;

              font-size: 18px;
              font-weight: bold;
              color: rgba(0, 0, 0, 0.56);

            }

            .product-item-area {
              .product-item {
                display: flex;
                padding: 16px 0;

                cursor: pointer;

                .product-img {
                  width: 152px;
                  background-color: coral;
                }

                .product-detail {
                  flex: 1 0 0;
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;

                  padding-left: 16px;

                  .product-name-area {
                    padding-bottom: 55px;

                    .product-name {
                      padding: 8px 0;

                      font-weight: bold;
                      font-size: 22px;
                    }

                    .product-rating-area {
                      display: flex;

                      .product-rating-score {
                        display: flex;
                        justify-content: center;

                        padding: 0 3px;
                        border-radius: 4px;
                        background-color: #ffa726;

                        color: #ffffff;
                      }

                      .product-rating-string {
                        margin: 0 0 0 10px;
                        font-size: 18px;
                        color: #ffa726;
                      }

                      .product-review-count {
                        margin: 0 0 0 5px;
                        font-size: 18px;
                        color: #ffa726;
                      }
                    }

                    .product-location-area {
                      display: flex;
                      margin: 8px 0 0 0;
                      font-size: 18px;

                      .product-distance {
                        padding-right: 8px;
                        border-right: 1.6px solid #000000;
                      }

                      .product-location {
                        padding-left: 8px;
                      }

                    }

                  }

                  .product-price-area {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    line-height: 20px;

                    font-size: 20px;

                    .half-rent-type {
                      padding-right: 10px;
                    }

                    .product-price {
                      font-weight: bold;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
