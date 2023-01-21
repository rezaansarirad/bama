<template>
  <div class="select-holder">
    <h2>:سال تولید خودرو را انتخاب کنید</h2>
    <div class="list-holder">
      <div v-for="(item, c) in years" :key="c" class="list">
        <div @click="setYear(item)">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      years: "Cars/getYears",
    }),
  },

  methods: {
    setYear(value) {
      const years = value;
      this.$emit("carYear", years);
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
        background-color: #5ac1b810;
      }
    }
  }
}
</style>
