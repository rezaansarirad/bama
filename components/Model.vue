<template>
  <div class="select-holder">
    <h2>:مدل خودرو را انتخاب کنید</h2>
    <div
      class="list-holder"
      v-if="filteredData.length && filteredData[0].models"
    >
      <div v-for="(item, c) in filteredData[0].models" :key="c" class="list">
        <div @click="setModel(item)">{{ item }}</div>
      </div>
    </div>
    <span v-else>متاسفیم در حال حاضر این مدل ماشین ها را ساپورت نمیکنیم</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["carId"],
  computed: {
    ...mapGetters({
      CarsModel: "Cars/getModels",
    }),
    filteredData() {
      if (this.carId) {
        return this.CarsModel.filter((item) => item.id.includes(this.carId));
      } else {
        alert("Sorry, we do not support this car model at the moment ");
      }
    },
  },

  methods: {
    setModel(value) {
      const model = value;
      this.$emit("carModel", model);
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
    justify-content: flex-end;
    display: flex;
    .list {
      padding: 5px;
      border-radius: 8px;
      &:hover {
        cursor: pointer;
        border: 1px solid var(--main-color);
        background-color: var(--hover-bg);;
      }
    }
  }
}
</style>
