import { useRecoilValue, useSetRecoilState } from "recoil";
import { getPaginationState } from "../../selectors";
import { paginationState } from "../../atoms";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import {
  ButtonGroup,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@material-ui/core";

const Pagination = () => {
  const paginationStateValue = useRecoilValue(getPaginationState);
  const setPaginationState = useSetRecoilState(paginationState);
  const setPageSize = (e) => {
    setPaginationState({
      ...paginationStateValue,
      page: 1,
      pageSize: e.target.value,
    });
  };
  const setPagination = (page) => {
    setPaginationState({
      ...paginationStateValue,
      page: page,
    });
  };

  return (
    <>
      <ButtonGroup fullWidth={true}>
        <Button
          onClick={() => setPagination(paginationStateValue.page - 1)}
          disabled={!paginationStateValue.hasPrevious}
        >
          <ArrowLeft />
        </Button>
        {[...Array(paginationStateValue.pages)].map((e, i) => {
          const page = i + 1;
          return (
            <Button
              key={i}
              disabled={page === paginationStateValue.page}
              onClick={() => setPagination(page)}
            >
              {page}
            </Button>
          );
        })}
        <Button
          onClick={() => setPagination(paginationStateValue.page + 1)}
          disabled={!paginationStateValue.hasNext}
        >
          <ArrowRight />
        </Button>
      </ButtonGroup>
      <Box my={2}>
      <FormControl variant="outlined">
        <InputLabel>Page Size</InputLabel>
        <Select
          value={paginationStateValue.pageSize}
          label="Page Size"
          style={{ width: "100px" }}
          onChange={setPageSize}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  );
};
export default Pagination;
