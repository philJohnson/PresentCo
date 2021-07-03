import { useRecoilValue, useSetRecoilState } from "recoil";
import { getPaginationState } from "../../selectors";
import { paginationState } from "../../atoms";
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import {ButtonGroup, Button} from '@material-ui/core';

const Pagination = () => {
  const paginationStateValue = useRecoilValue(getPaginationState);
  const setPaginationState = useSetRecoilState(paginationState);
  const setPagination = (page) => {
    setPaginationState({
      ...paginationStateValue,
      page: page,
    });
  };

  return (
    <ButtonGroup>
        <Button onClick={() => setPagination(paginationStateValue.page - 1)} disabled={!paginationStateValue.hasPrevious}>
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
        <Button onClick={() => setPagination(paginationStateValue.page + 1)} disabled={!paginationStateValue.hasNext}>
          <ArrowRight />
        </Button>
    </ButtonGroup>
  );
};
export default Pagination;
