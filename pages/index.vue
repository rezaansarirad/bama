<template>
  <div class="main-holder">
    <div class="title-page">
      <span>محاسبه قیمت خودرو کارکرده</span>
      <div></div>
      <h2>ماشین حساب</h2>
    </div>
    <div class="content">
      <div class="filter-holder">
        <Brand @carName="setBrand" v-if="showStep == 1" />
        <Model @carModel="setModel" :carId="carId" v-if="showStep == 2" />
        <Years @carYear="setYear" v-if="showStep == 3" />
        <Work @carWork="setWork" v-if="showStep == 4" />
      </div>

      <div class="showFilter">
        <p class="title">
          بر اساس <span>{{ totalOrder }}</span> معامله صورت گرفته
        </p>
        <div class="listFilter">
          <div v-for="(filter, f) in filterItem" :key="f" class="Itemfilter">
            <span @click="removeItemFormFilter(filter, f)">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.05029 5.05029L14.9498 14.9498"
                  stroke="#3D4F6D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.05029 14.9497L14.9498 5.05021"
                  stroke="#3D4F6D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            <h5 v-text="filter"></h5>
          </div>
          <div v-show="showStep == 4" class="Noun-holder">
            <span class="filterName">:کارکرد</span>
            <div class="Itemfilter">
              <span @click="removeNoun()">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.05029 5.05029L14.9498 14.9498"
                    stroke="#3D4F6D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.05029 14.9497L14.9498 5.05021"
                    stroke="#3D4F6D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
              <h5>{{ $formatKm(carKm) }} کیلومتر</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="des">
      قیمت خودرو ها براساس پایش تجمیع و تحلیل قیمت های اعلام شده از سوی نمایندگی
      ها قیمت معاملات انجام شده در بیش از ۱۵۰ نمایشگاه فعال سطح کشور و مراکز
      خرید و فروش پایتخت و نیز بررسی های میدانی در بازار خودرو به صورت روزانه
      استخراج می شود
    </p>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      totalOrder: "875,054",
      filterItem: [],
      showStep: 1,
    };
  },
  computed: {
    carKm() {
      return this.$store.state.carKm;
    },
  },
  methods: {
    removeNoun() {
      this.carKm = "";
      this.filterItem.length = 1;
      this.showStep = 2;
    },
    removeItemFormFilter(item) {
      this.filterItem.splice(this.filterItem.indexOf(item), 1);
      this.filterItem = [...this.filterItem];
      if (this.filterItem.length < 1) {
        this.showStep = 1;
      } else if (this.filterItem.length >= 1) {
        this.showStep = 2;
      }
    },
    setBrand(value) {
      this.carId = value.id;
      this.filterItem.push(value.name);
      this.showStep = 2;
    },
    setModel(value) {
      this.filterItem.push(value);
      this.showStep = 3;
    },
    setYear(value) {
      this.filterItem.push(value);
      this.showStep = 4;
    },
    setWork(value) {
      this.carKm = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-holder {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  .title-page {
    font-size: 14px;
    display: flex;
    align-items: center;
    h2 {
      color: #0b0b0b;
    }
    div {
      width: 2px;
      height: 15px;
      margin: 0 3px;
      background-color: #848484;
    }
    span {
      color: #9b9b9b;
    }
  }
  .content {
    .filter-holder {
      width: 544px;
      text-align: right;
    }
    display: flex;
    .showFilter {
      border-left: 1px solid #c2c2c2;
      width: 124px;
      height: 85vh;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      .listFilter {
        display: flex;
        flex-direction: column;
        .Itemfilter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #e9e9e9;
          border-radius: 3px;
          padding: 2px;
          height: 33px;
          margin-bottom: 10px;
        }
        .Noun-holder {
          display: flex;
          flex-direction: column;
          .filterName {
            text-align: right;
          }
        }
      }
      .title {
        text-align: center;
        span {
          color: #d59bcf;
        }
      }
    }
  }
  .des {
    color: #a1a1a1;
    text-align: right;
    width: 100%;
    margin-right: 89px;
    font-size: 14px;
  }
}
@media screen and (max-width: 330px) {
  .main-holder {
    width: 100%;
  }
}
</style>
