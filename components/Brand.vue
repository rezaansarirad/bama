<template>
  <div class="select-holder">
    <h2>برند خودرو را انتخاب کنید (بین ب و پ :)</h2>
    <div class="list-holder">
      <div v-for="(item, c) in Cars" :key="c" class="list-car">
        <div class="category-holder">
          <h4>{{ item.cccategory }}</h4>
          <div class="dote"></div>
        </div>
        <ul>
          <li v-for="(car, b) in item.brands" :key="b" @click="selectCar(car)">
            {{ car.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      Cars: "Cars/getCars",
    }),
  },
  methods: {
    selectCar(value) {
      const name = value;
      this.$emit("carName", name);
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
  .list-holder {
    max-height: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    .list-car {
      ul {
        float: right;
      }
      ul li {
        width: fit-content;
        padding: 5px;
        border-radius: 8px;
        &:hover {
          cursor: pointer;
          border: 1px solid var(--main-color);
          background-color: var(--hover-bg);
        }
      }
      .category-holder {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .dote {
          margin-left: 2px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--main-color);
        }
        h4 {
          color: var(--main-color);
        }
      }
    }
  }
}
</style>
