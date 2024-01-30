import {useEffect, useState} from "react";
import '../../scss/general.scss';
import './Popular.scss';
import Card from '../Card/Card';
import UdemyService from "../Services/UdemyService.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Spinner from "../Spinner/Spinner.jsx";

const Popular = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(0);
    const [leftButton,setLeftButton] = useState(false)

   const udemyService = new UdemyService();

    useEffect(() => {
        loadCourses()
    }, [offset]);

   const loadCourses = () => {
       udemyService
            .getPopularCourses(offset)
            .then(onLoaded)
            .catch(onError);
    };

    const onLoaded = (newCourses) => {
        setPopularCourses(newCourses);
        setLoading(false);
        setLeftButton(leftButton => offset > 0)
    }

    const onSlideRight = () => {
        setOffset(prevOffset => prevOffset + 5);
    };

    const onSlideLeft = () => {
        setOffset(prevOffset => Math.max(0, prevOffset - 5));
    };

    useEffect(() => {
        loadCourses();
    }, [offset]);


    const onError = () => {
        setError(true);
        setLoading(false)
    };

   const renderContent = (arr) => {
        return arr.map((course) => (
            <Card
                key={course.id}
                title={course.title}
                price={course.price}
                rating={course.avgRate}
                img={course.img}
            />
        ));
    };

        const content = renderContent(popularCourses);
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;

    return (
        <section className="popular">
            <div className="container">
                <div className="line">
                    <h2 className="title-block">Популярні курси Udemy</h2>
                    <div className="popular__wrap">
                        <button
                            className={`popular__nav popular__nav--left ${leftButton ? 'active' : ''}`}
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
                            className={`popular__nav popular__nav--right ${!leftButton ? 'active' : ''}`}
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


