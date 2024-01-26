
const Pagination = () => {
    return (
        <div className="pagination">
            <button>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#D1CFFF" />
                    <path d="M20 13L15 18L20 23" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <ul className="pagination__list">
                <li className="pagination__item"><a className="pagination__link" href="/1">1</a></li>
                <li className="pagination__item"><a className="pagination__link" href="/2">2</a></li>
                <li className="pagination__item"><a className="pagination__link" href="/3">3</a></li>
            </ul>
            <button><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>
        </div>
    )
}
export default Pagination;