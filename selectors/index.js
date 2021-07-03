import { selector, useSetRecoilState } from "recoil";
import { countriesState, paginationState, countriesSearchState } from "../atoms";


export const filteredCountriesState = selector({
    key: "filteredCountriesState",
    get: ({get})  => {
        const countries = get(countriesState);
        const searchString = get(countriesSearchState);
        //reset pagination
        if(countries && searchString) {
            return countries.filter(country => {
                return country.name.toLowerCase().includes(searchString.toLowerCase()) ;
            })
        }
        return countries;
    }
})

export const paginatedCountriesState = selector({
  key: "paginatedCountriesState",
  get: ({ get }) => {
    const countries = get(filteredCountriesState);
    const pagination = get(paginationState);
    if(countries){ //at some stage countries is undefined. Unsure why
        return countries.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize);
    }
    return countries;
  },
});

export const getPaginationState = selector({
    key: "getPaginationState",
    get: ({get}) => {
        const countries = get(filteredCountriesState);
        const pagination = get(paginationState);
        const pages = countries ? Math.ceil(countries.length / pagination.pageSize) : 1;
        return {
            page: pagination.page,
            pages: pages,
            pageSize: pagination.pageSize,
            hasPrevious: (pagination.page !== 1),
            hasNext: (pagination.page < pages),
        }
    }
})