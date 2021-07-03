import { useRecoilValue, useSetRecoilState } from "recoil";
import { getPaginationState } from "../../selectors";
import { paginationState } from "../../atoms";

const Pagination = () => {
  const paginationStateValue = useRecoilValue(getPaginationState);
  const setPaginationState = useSetRecoilState(paginationState);
  const setPagination = (page) => {
    setPaginationState({
        ...paginationStateValue,
        page: page
    })
  }

  return (
    <ul>
        {paginationStateValue.hasPrevious && <li onClick={() => setPagination(paginationStateValue.page - 1)}>Previous</li>}
      {[...Array(paginationStateValue.pages)].map((e, i) => {
        const page = i + 1;
        return (
          <li key={i} isActive={page === paginationStateValue.page} onClick={() => setPagination(page)}>
            {page}
          </li>
        );
      })}
      {paginationStateValue.hasNext && <li onClick={() => setPagination(paginationStateValue.page + 1)}>Next</li>}
    </ul>
  );
};
export default Pagination;
