
import React from 'react';
import './Pagination.scss';

const Pagination = ({ nextPage, prevPage, totalPages, page, setPage }) => {
        const renderPageNumbers = () => {
            const pageNumbers = [];
            const maxVisiblePages = 5;

            let start = Math.max(1, page - Math.floor(maxVisiblePages / 2));
            let end = Math.min(totalPages, start + maxVisiblePages - 1);

            if (end - start < maxVisiblePages - 1) {
                start = Math.max(1, end - maxVisiblePages + 1);
            }

            if (start > 1) {
                pageNumbers.push(
                    <li key={1} className="pagination__item">
                        <a className={`pagination__link ${1 === page ? 'active' : ''}`} onClick={() => setPage(1)}>1</a>
                    </li>
                );

                pageNumbers.push(
                    <li key="ellipsis_start" className="pagination__item">
                        <span className="pagination__ellipsis">...</span>
                    </li>
                );
            }

            for (let i = start; i <= end; i++) {
                pageNumbers.push(
                    <li key={i} className="pagination__item">
                        <a className={`pagination__link ${i === page ? 'active' : ''}`} onClick={() => setPage(i)}>{i}</a>
                    </li>
                );
            }

            if (end < totalPages) {
                pageNumbers.push(
                    <li key="ellipsis_end" className="pagination__item">
                        <span className="pagination__ellipsis">...</span>
                    </li>
                );
                pageNumbers.push(
                    <li key={totalPages} className="pagination__item">
                        <a className={`pagination__link ${totalPages === page ? 'active' : ''}`} onClick={() => setPage(totalPages)}>{totalPages}</a>
                    </li>
                );
            }

            return pageNumbers;
        };

    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={prevPage}
                disabled={page === 1}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M6 1L1 6L6 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <ul className="pagination__list">{renderPageNumbers()}</ul>
            <button
                className="pagination__button"
                onClick={nextPage}
                disabled={page === totalPages}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M1 1L6 6L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
