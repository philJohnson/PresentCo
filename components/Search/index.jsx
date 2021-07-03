import { useRef } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { getPaginationState } from "../../selectors";
import { countriesSearchState, paginationState } from "../../atoms";

const Search = () => {
    const paginationStateValue = useRecoilValue(getPaginationState);
    const setPaginationState = useSetRecoilState(paginationState);
    const [value, setValue] = useRecoilState(countriesSearchState);
    const searchEl = useRef(null);
    const SearchCountries = (e) => {
        e.preventDefault();
        setValue(searchEl.current.value);
        setPaginationState({
            ...paginationStateValue,
            page: 1
        })
    } 
    return <form onSubmit={(e) => SearchCountries(e)}>
        <input type="text" ref={searchEl} value={value} />
        <input type="submit" />
    </form>
}

export default Search;