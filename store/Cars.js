export const state = () => ({
  cars: [
    {
      cccategory: "ب",
      brands: [
        {
          id: "bmw",
          name: "ب ام و",
        },
        {
          id: "brilliance",
          name: "برلیانس",
        },
      ],
    },
    {
      cccategory: "پ",
      brands: [
        {
          id: "Pride",
          name: "پراید",
        },
        {
          id: "Peugeot",
          name: "پژو",
        },
      ],
    },
    {
      cccategory: "ت",
      brands: [
        {
          id: "Toyota",
          name: "تویوتا",
        },
      ],
    },
    {
      cccategory: "ج",
      brands: [
        {
          id: "Jac",
          name: "جک",
        },
      ],
    },
    {
      cccategory: "چ",
      brands: [
        {
          id: "Changan",
          name: "چانگان",
        },
      ],
    },
    {
      cccategory: "د",
      brands: [
        {
          id: "Dena",
          name: "دنا",
        },
      ],
    },
    {
      cccategory: "ر",
      brands: [
        {
          id: "Rana",
          name: "رانا",
        },
        {
          id: "Reno",
          name: "رنو",
        },
      ],
    },
    {
      cccategory: "س",
      brands: [
        {
          id: "Suzuki",
          name: "سوزوکی",
        },
      ],
    },
    {
      cccategory: "ف",
      brands: [
        {
          id: "Folex",
          name: "فولکس",
        },
      ],
    },
    {
      cccategory: "ک",
      brands: [
        {
          id: "Quik",
          name: "کوییک",
        },
        {
          id: "Kia",
          name: "کیا",
        },
      ],
    },
    {
      cccategory: "م",
      brands: [
        {
          id: "Mazda",
          name: "مزدا",
        },
      ],
    },
    {
      cccategory: "ن",
      brands: [
        {
          id: "Nissan",
          name: "نیسان",
        },
      ],
    },
    {
      cccategory: "ه",
      brands: [
        {
          id: "Haima",
          name: "هایما",
        },
        {
          id: "Hyundai",
          name: "هیوندای",
        },
      ],
    },
  ],

  model: [
    {
      id: "bmw",
      models: ["x3", "x6"],
    },
    {
      id: "brilliance",
      models: ["x330", "x230"],
    },
    {
      id: "Pride",
      models: ["133", "111"],
    },
    {
      id: "Peugeot",
      models: ["206", "207"],
    },
  ],
  years: ["1390", "1395", "1400", "1401"],
});

export const mutations = {};

export const actions = {};

export const getters = {
  getCars: (state) => state.cars,
  getModels: (state) => state.model,
  getYears: (state) => state.years,

};
