// Хук пагинации
import { useState } from 'react';

export const usePagination = ({ contentPerPage, count }) => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(count / contentPerPage);

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
