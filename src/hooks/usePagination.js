// Хук пагинации
import { useState } from 'react';

export const usePagination = ({ contentPerPage, count }) => {
    const [page, setPage] = useState(1);
    let totalPages = (Math.floor(count / contentPerPage) - Math.ceil(count * 0.01));
    totalPages = totalPages < 1 ? 1 : totalPages

    const nextPage = () => {
        setPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const setPageSafe = (pageNum) => {
        setPage(Math.max(1, Math.min(pageNum, totalPages)));
    };

    return {
        page,
        totalPages,
        nextPage,
        prevPage,
        setPage: setPageSafe,
    };
};
