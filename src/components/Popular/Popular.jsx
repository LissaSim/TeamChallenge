import {useEffect, useState} from "react";
import '../../scss/general.scss';
import './Popular.scss';
import Card from '../Card/Card';
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import {Link} from "react-router-dom";
import useUdemyService from "../Services/UdemyService.js";

const Popular = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [offset, setOffset] = useState(0);
    const [leftButton,setLeftButton] = useState(false);
    const [showContent, setShowContent] = useState(false)

    const {loading, error, getPopularCourses} = useUdemyService()

    useEffect(() => {
        loadCourses()
    }, [offset]);

   const loadCourses = () => {
            getPopularCourses(offset)
            .then(onLoaded)
   };

    const onLoaded = (newCourses) => {
        setPopularCourses(newCourses);
        setLeftButton(leftButton => offset > 0);
        setShowContent(true)
    }
    const onSlideRight = () => {
        setOffset(prevOffset => prevOffset + 5);
        setShowContent(false)
    };

    const onSlideLeft = () => {
        setOffset(prevOffset => Math.max(0, prevOffset - 5));
        setShowContent(false)
    };

   const renderContent = (arr) => {
        return arr.map((course) => (
            <Link to={`course/${course.id}`} key={course.id}><Card
                key={course.id}
                title={course.title}
                price={course.price}
                rating={course.avgRate}
                img={course.img}
            /></Link>
        ));
    };

        const content = showContent ? renderContent(popularCourses) : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner />  : null;

    return (
        <section className="popular">
            <div className="container">
                <div className="line">
                    <h2 className="title-block">Популярні курси Udemy</h2>
                    <div className="popular__wrap">
                        <button
                            className={`popular__nav popular__nav--left ${leftButton && !error && !loading ? 'active' : ''}`}
                            onClick={() => onSlideLeft()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
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
                            className={`popular__nav popular__nav--right ${!leftButton && !error && !loading ? 'active' : ''}`}
                            onClick={() => onSlideRight()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1 1L6 6L1 11"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="popular__track">
                            {content}
                            {errorMessage}
                            {spinner}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Popular;


