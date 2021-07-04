import { atom } from "recoil";

export const countriesState = atom({
  key: "countriesState",
  default: [],
});

export const countriesSearchState = atom({
  key: "countriesSearchState",
  default: null,
});

export const paginationState = atom({
  key: "paginationState",
  default: {
    page: 1,
    pages: 1,
    pageSize: 10,
    hasPrevious: false,
    hasNext: true,
  },
})