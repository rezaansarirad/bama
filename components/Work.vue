<template>
  <div class="select-holder">
    <h2>:کارکرد خودرو را وارد کنید</h2>
    <div class="range-holder">
      <div>
        <input v-model="kmRage" id="input" class="input-number" />
        <label for="input">km</label>
      </div>
      <div class="range">
        <input
          type="range"
          :min="minRange"
          :max="maxRange"
          class="slider"
          id="myRange"
          v-model="kmRage"
        />
        <div class="numbers">
          <span>0 km</span>
          <span>210,000 km</span>
        </div>
      </div>
    </div>
    <div class="btn-holder">
      <button>ادامه</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxRange: 210000,
      minRange: 0,
      kmRage: 130000,
    };
  },
  watch: {
    kmRage(value) {
      this.$store.commit("setCarWork", value);
    
    },
  },
};
</script>

<style lang="scss" scoped>
.select-holder {
  margin-right: 10px;
  h2 {
    font-size: 12px;
  }

  .range-holder {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .input-number {
      width: 60px;
      height: 30px;
      text-align: center;
      border: 1px solid var(--main-color);
    }
    .range {
      width: 100%;
      margin-top: 50px;
      .numbers {
        display: flex;
        justify-content: space-between;
      }
      .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
      }
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        background: #fff;
        border: 1px solid var(--main-color);
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  .btn-holder {
    display: flex;
    justify-content: flex-start;
    margin-top: 60px;
    button {
      padding: 10px;
      border-radius: 8px;
      background: var(--main-color);
      color: var(--white);
    }
  }
}
</style>
