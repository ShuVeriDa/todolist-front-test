import {FC} from "react";

import ReactPaginate from "react-paginate";
import classes from './Pagination.module.scss'

type PaginationPropsType = {
   currentPage: number
   onChangePage: (currentPage: number) => void
   maxPage: number
}

export const Pagination: FC<PaginationPropsType> = ({currentPage,onChangePage, maxPage}) => {
   return (
      <ReactPaginate
         className={classes.root}
         breakLabel="..."
         nextLabel=">"
         previousLabel="<"
         onPageChange={(e) => onChangePage(e.selected + 1)}
         pageRangeDisplayed={4}
         pageCount={maxPage}
         forcePage={currentPage - 1}
      />
   );
};