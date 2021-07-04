import { useRecoilValue  } from "recoil";
import { countriesState } from "../atoms";

export const getCountry = (code) => {
    const countries = useRecoilValue(countriesState);
    if(countries){
        return countries.find(country => {
            return country.alpha3Code === code;
        })
    }
    return null; //Ideally this would throw 404.
}