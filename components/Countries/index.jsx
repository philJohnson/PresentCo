
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { paginatedCountriesState } from "../../selectors";

const Countries = () => {
  const countries = useRecoilValue(paginatedCountriesState);
  
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
