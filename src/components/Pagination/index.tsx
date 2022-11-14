import "./paginate.scss"
import rightArrow from "../../assets/right-arrow.svg"

export interface IPaginationProps {
    ItemsPerPage: number
    totalTemplates: number
    paginate: (pageNumber: number) => void
    onPreviousClick: () => void
    currentPage: number
    onNextClick: () => void
    totalTemplatesCount: number
}

export const Pagination = ({
    ItemsPerPage,
    totalTemplates,
    paginate,
    currentPage,
    onPreviousClick,
    onNextClick,
    totalTemplatesCount,
}: IPaginationProps) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalTemplates / ItemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="paginate__container">
            <ul className="pagination ">
                {currentPage !== 1 && (
                    <li className="page__item">
                        <span
                            className="page__link"
                            style={{ cursor: "pointer" }}
                            onClick={onPreviousClick}
                        >
                            Previous
                        </span>
                    </li>
                )}
                <li className="page__item ">
                    <p>
                        <span className="page__link__number">
                            {currentPage}
                        </span>{" "}
                        of {pageNumbers.length}
                    </p>
                </li>

                {currentPage !== totalTemplatesCount && (
                    <li className="page__item">
                        <span
                            className="page__next"
                            style={{ cursor: "pointer" }}
                            onClick={onNextClick}
                        >
                            Next <img src={rightArrow} alt="right-arrow" />
                        </span>
                    </li>
                )}
            </ul>
        </nav>
    )
}
