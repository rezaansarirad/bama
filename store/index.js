export const state = () => ({
  carKm: "",
});

export const mutations = {
  setCarWork(state, data) {
    state.carKm = data;
  },
};
