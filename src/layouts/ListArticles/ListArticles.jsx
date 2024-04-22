import './ListArticles.scss';
import Pagination from '../../components/Pagination/Pagination';
import Button from '../../components/Button/Button';
import articles from "../../components/Data/Articles.jsx";
import {NavLink, useParams} from "react-router-dom";
import articlesList from "../../components/Data/ArticlesList.jsx";
import React, {useEffect, useState} from "react";

const ListArticles = () => {
    const {value} = useParams();
    const filteredArticles = articlesList[value];
    const totalPages = Math.ceil(filteredArticles.length / 3);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [value]);

    const renderButtons = (arr) => {
        return arr.map((item) => (
            <NavLink to={`/article/${item.value}`} key={item.id}>
                <Button
                    key={item.id}
                    classStyle={item.value === value ? "button--line active" : "button--line"}
                    content={item.name}
                /></NavLink>
        ));
    };
    const renderContent = () => {
        const startIndex = (page - 1) * 3;
        const endIndex = startIndex + 3;
        return filteredArticles.slice(startIndex, endIndex).map((item) => (
            <NavLink to={item.reference} key={item.id}>
                <div className="listArticles__article" key={item.id}>
                    <div className="listArticles__article-img">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="listArticles__article-text">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            </NavLink>
        ));
    };


    const buttons = renderButtons(articles);
    const nextPage = () => {
        setPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };
    const content = renderContent(filteredArticles)

    return (
        <div className='listArticles container'>
            <h1 className="title-block">{value}</h1>

            <div className="listArticles__articles">
                <div className="listArticles__articles-filter">
                    {buttons}
                </div>
                <div className="listArticles__articles-inner">
                    {content}
                </div>
            </div>
            <Pagination
                nextPage={nextPage}
                prevPage={prevPage}
                totalPages={totalPages}
                page={page}
                setPage={setPage}
            />
        </div>
    )
};

export default ListArticles;