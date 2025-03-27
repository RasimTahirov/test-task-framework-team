import { useLazyGetPaintingsQuery } from "../api/api";
import backIcon from "../../public/icon/back-arrow-icon.svg";
import nextIcon from "../../public/icon/next-arrow-icon.svg";
import style from "../styles/styles.module.scss";
import classNames from "classnames";
import { IPaintingsResponse } from "../types/types";

interface PaginationProps {
  setPagination: (page: number) => void;
  paintings: IPaintingsResponse;
  pagination: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setPagination,
  paintings,
  pagination,
  limit,
}) => {
  const [trigger] = useLazyGetPaintingsQuery();

  const totalPages = Math.ceil(paintings.total / limit);
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (newPage: number) => {
    setPagination(newPage);
    trigger({ _page: newPage, _limit: limit });
  };

  return (
    <nav className={style.pagination}>
      <ul className={style.paginationContainer}>
        <li>
          <button
            className={classNames(style.backArrow, style.arrow)}
            disabled={pagination === 1}
            onClick={() => handlePageChange(pagination - 1)}
          >
            <img src={backIcon} alt="back" />
          </button>
        </li>
        {pagesArray.map((page) => (
          <li
            className={`${style.paginationNumber} ${pagination === page && style.paginationNumberActive}`}
            key={page}
          >
            <button
              disabled={pagination === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={classNames(style.nextArrow, style.arrow)}
            disabled={pagination === totalPages}
            onClick={() => handlePageChange(pagination + 1)}
          >
            <img src={nextIcon} alt="next" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
