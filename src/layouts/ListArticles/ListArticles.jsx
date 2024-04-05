import './ListArticles.scss';
import Pagination from '../../components/Pagination/Pagination';
import Button from '../../components/Button/Button';
import articles from "../../components/Data/Articles.jsx";
import {NavLink, useParams} from "react-router-dom";
import articlesList from "../../components/Data/ArticlesList.jsx";
const ListArticles = () => {
    const {name} = useParams();
    // const currentArticles = articlesList[name] || [];
    const renderButtons = (arr) => {
        return arr.map((item) => (
            <Button
                key={item.id}
                classStyle={item.name === name ? "button--line active" : "button--line"}
                content={item.name}
            />
        ));
    };

    const renderContent = (arr) => {
        return arr.map((item) => (
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
        ))
    }

    const buttons = renderButtons(articles);
    const content = renderContent(articlesList.mobileArticles)
    // const content = renderContent(currentArticles);

    return (
        <div className='listArticles container'>
            <h1 className="title-block">{name}</h1>

            <div className="listArticles__articles">
                <div className="listArticles__articles-filter">
                    {buttons}
                </div>
                <div className="listArticles__articles-inner">
                    {content}
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    )
};
export default ListArticles;


