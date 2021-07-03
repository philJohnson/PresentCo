import { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { getPaginationState } from "../../selectors";
import { countriesSearchState, paginationState } from "../../atoms";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { TextField, Button, IconButton, Box } from "@material-ui/core";
import { SearchBox, StyledReset } from './styles'
const Search = () => {
  const searchEl = useRef(null);

  const paginationStateValue = useRecoilValue(getPaginationState);
  const setPaginationState = useSetRecoilState(paginationState);

  const [searchValue, setSearchValue] = useRecoilState(countriesSearchState);

  const [value, setValue] = useState(searchValue);

  const resetPagination = () => {
    setPaginationState({
      ...paginationStateValue,
      page: 1,
    });
  };

  const SearchCountries = (e) => {
    e.preventDefault();
    setSearchValue(searchEl.current.value);
    resetPagination();
  };

  const resetSearch = (e) => {
    e.preventDefault();
    setValue("");
    setSearchValue("");
    resetPagination();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={(e) => SearchCountries(e)}>
      <Box display="flex" alignItems="center" my={2}>
        <SearchBox flexGrow={1}>
          <TextField
            type="text"
            label="Search Country Name"
            inputRef={searchEl}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{width: '100%'}}
          />
          {value && (
            <StyledReset
              type="reset"
              onClick={(e) => resetSearch(e)}
              aria-label="reset search"
            >
              <HighlightOffIcon />
            </StyledReset>
          )}
        </SearchBox>
        <Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            aria-label="search"
          >
            Search
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Search;
