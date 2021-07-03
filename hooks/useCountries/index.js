import { useQuery } from 'react-query'

const fetchCountries = async () => {
    const parsed = await fetch("https://restcountries.eu/rest/v2/all").then((res) => res.json());
    return parsed;
}

const useCountries = () => {
  return useQuery(['countries'], () => fetchCountries())
}

export { useCountries, fetchCountries }