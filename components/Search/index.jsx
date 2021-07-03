import { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { getPaginationState } from "../../selectors";
import { countriesSearchState, paginationState } from "../../atoms";

const Search = () => {
    const searchEl = useRef(null);

    const paginationStateValue = useRecoilValue(getPaginationState);
    const setPaginationState = useSetRecoilState(paginationState);

    const [searchValue, setSearchValue] = useRecoilState(countriesSearchState);

    const [value, setValue] = useState(searchValue);
    
    const resetPagination = () => {
        setPaginationState({
            ...paginationStateValue,
            page: 1
        })
    }

    const SearchCountries = (e) => {
        e.preventDefault();
        setSearchValue(searchEl.current.value);
        resetPagination();
    }

    const resetSearch = (e) => {
        e.preventDefault();
        setValue('');
        setSearchValue('');
        resetPagination();
    }


    return <form onSubmit={(e) => SearchCountries(e)}>
        <input type="text" ref={searchEl} value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={(e) => resetSearch(e)}>Clear Search</button>
        <input type="submit" />
    </form>
}

export default Search;