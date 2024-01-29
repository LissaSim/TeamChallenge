
import './Pagination.scss';
const Pagination = () => {
    return (
        <div className="pagination">
            <button className="pagination__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M6 1L1 6L6 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <ul className="pagination__list">
                <li className="pagination__item">
                    <a className="pagination__link active" href="/1">1</a>
                </li>
                <li className="pagination__item">
                    <a className="pagination__link" href="/2">2</a>
                </li>
                <li className="pagination__item">
                    <a className="pagination__link" href="/3">3</a>
                </li>
            </ul>
            <button className="pagination__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M1 1L6 6L1 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    )
}
export default Pagination;