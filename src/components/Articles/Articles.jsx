import { useState } from 'react';
import '../../scss/general.scss';
import './Articles.scss';
import CardPopularArticles from '../CardPopularArticles/CardPopularArticles.jsx';
import popularArticles from '../Data/PopularArticles.jsx';
import {NavLink} from "react-router-dom";

function Articles() {
    let initial = popularArticles.slice(0,3);
    let newArticles = popularArticles.slice(3,6)
    const [currentItems, setCurrentItems] = useState(initial);
    const [leftActive, setLeftActive] = useState(false);
    const [rightActive, setRightActive] = useState(true)

    const showNewItems = () => {
        setCurrentItems(newArticles);
        setRightActive(false);
        setLeftActive(true);
    };

    const resetItems = () => {
        setCurrentItems(initial);
        setRightActive(true);
        setLeftActive(false)
    };

    const renderContent = (arr) => {
        return arr.map((item) => (
          <NavLink to={item.reference} key={item.id}>
              <CardPopularArticles
                  name={item.title}
                  img={item.img}
                  description={item.description}/>
          </NavLink>
        ))
    }

    const content = renderContent(currentItems)

    return (
        <section className="articles">
            <div className="container">
                <div className="line">
                    <h2 className="title-block">Популярні статті </h2>
                    <div className="articles__wrap">
                        <button
                            className={`articles__nav articles__nav--left ${leftActive ? 'active' : ''}`}
                            onClick={resetItems}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                <path
                                    d="M6 1L1 6L6 11"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={`articles__nav articles__nav--right ${rightActive ? 'active': ''}`}
                            onClick={showNewItems}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                <path
                                    d="M1 1L6 6L1 11"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="articles__track">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Articles;