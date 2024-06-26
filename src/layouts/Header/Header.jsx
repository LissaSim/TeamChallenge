import '../../scss/general.scss'
import './Header.scss'
import logo from '../../images/FS2S-head.svg'

import arrow from '../../images/arrow.svg'
import search from '../../images/search.svg'
import Button from '../../components/Button/Button';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import courses from "../../components/Data/Courses.jsx";

function Header() {
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const searchCourse = (term) => {
        navigate(`/courseList/${term}`)
    };

    const handleSearchCourse = (e) => {
        let key = e.keyCode
        if (key === 13) {
            searchCourse(searchTerm.replace(/[^a-zA-z0-9 ||^а-яА-я0-9]/g, ""))
            setSearchTerm('');
        } else {
            searchCourse(searchTerm.replace(/[^a-zA-z0-9 ||^а-яА-я0-9]/g, ""))
            setSearchTerm('');
        }
    };
    const toggleCategoryList = () => {
        setIsCategoryVisible(!isCategoryVisible)
    };
    const renderArticles = (arr) => {
        return arr.map((item) => (
            <NavLink to={`courseList/${item.value}`} key={item.id} className="block">
                <li key={item.id}>{item.name}</li>
            </NavLink>
        ))
    }
    const content = renderArticles(courses)

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <Link to={`/`}>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className="header__search">
                        <input
                            className="header__search-input"
                            type="text"
                            placeholder="Пошук "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSearchCourse(e);
                              }
                            }}
                        />
                        <div className={`header__search-list`}>
                            <button className="header__list-btn"
                                    onClick={handleSearchCourse}>
                                <img src={search} alt="search" className="header__list-img"/>
                            </button>
                        </div>
                    </div>
                    <div className={`header__list ${isCategoryVisible ? 'active' : ''}`}>
                        <button className="header__list-btn">
                            <span onMouseEnter={toggleCategoryList}>Категорії курсів</span>
                            <img src={arrow} alt="arrow"/>
                        </button>
                        <ul className="header__list-block" onMouseLeave={toggleCategoryList}>
                            {content}
                        </ul>
                    </div>
                </div>
                <div className="header__btns">
                    <button className="header__btns-heart">
                        <svg width="32" stroke="#5D59FF" height="30" viewBox="0 0 32 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="&#240;&#159;&#166;&#134; icon &#34;heart&#34;">
                                <path id="Vector"
                                      d="M30 10.2296C30 12.4937 29.1687 14.6684 27.6841 16.2771C24.2669 19.9813 20.9524 23.8439 17.4074 27.4139C16.5949 28.2203 15.3059 28.1908 14.5283 27.348L4.31526 16.2771C1.22825 12.9307 1.22825 7.52841 4.31526 4.18208C7.43261 0.802873 12.5111 0.802873 15.6284 4.18208L15.9997 4.58448L16.3707 4.18232C17.8654 2.56127 19.901 1.64697 22.0274 1.64697C24.1539 1.64697 26.1893 2.56119 27.6841 4.18208C29.1688 5.7909 30 7.96549 30 10.2296Z"
                                      stroke-width="3" stroke-linejoin="round"/>
                            </g>
                        </svg>


                    </button>

                    <div className="header__btns-block">
                        <Button classStyle='button--line' content='Увійти'/>
                        <Button classStyle='button--full' content='Зареєструватись'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
