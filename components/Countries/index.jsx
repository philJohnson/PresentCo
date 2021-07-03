import Link from "next/link";
import { useRecoilValue } from "recoil";
import { countriesSearchState } from "../../atoms";
import { paginatedCountriesState } from "../../selectors";

const Countries = () => {
  const countries = useRecoilValue(paginatedCountriesState);
  const searchValue = useRecoilValue(countriesSearchState);
  if ((!countries || countries.length === 0) && searchValue) {
    return `no countries found for ${searchValue}`;
  }
  return (
    <ul>
      {countries?.map((country, key) => (
        <li key={key}>
          <Link href={`/${encodeURIComponent(country.alpha3Code)}`}>
            <a>{country.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
