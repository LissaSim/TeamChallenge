
import './CourseFilter.scss';
import star5 from './star5.png';
import star35 from './star35.png';
import star4 from './star4.png';
import star3 from './star3.png';
import { useState } from "react";

const CourseFilter = (props) => {
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [sorting, setSorting] = useState("");
    const [level, setLevel] = useState("");
    const [language, setLanguage] = useState("");

    const handleRatingChange = (event) => {
        setRating(event.target.id);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.id)
    };

    const handleSortingChange = (event) => {
        setSorting(event.target.id);
    };

    const handleLevelChange = (event) => {
        setLevel(event.target.id)
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.id)
    };

    const applyFilters = () => {
        let queryString = ''

        if (rating !== "") {
            queryString += `&rate=${rating}`;
        }

        if (price !== ""){
            queryString += `&price=${price}`
        }

        if (sorting !== "") {
            queryString += `&order=${sorting}`;
        }

        if (level !== "") {
            queryString += `&level=${level}`;
        }

        if (language !== "") {
            queryString += `&lang=${language}`;
        }

        console.log(queryString)

        props.onApplyFilters(queryString);
    };

    const resetFilters = () => {
        setRating("");
        setPrice("");
        setSorting("");
        setLevel("");
        setLanguage("");

        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(button => {
            button.checked = false;
        });
    }

    return (
        <ul className="courseFilter">
            <li>
                <fieldset className="courseFilter__block">

                    <legend className="courseFilter__title">Фільтр/Сортування</legend>
                </fieldset>
            </li>
            <li>
                <fieldset className="courseFilter__block">
                    <legend className="courseFilter__title">Рейтинг</legend>
                    <div className="courseFilter__input">
                        <input type="radio" id="4.5" name="more" onClick={handleRatingChange}/>
                        <label htmlFor="4.5">
                            <span>4,5 і більше</span> <img src={star5}/>
                        </label>
                    </div>

                    <div className="courseFilter__input">
                        <input type="radio" id="4.0" name="more" onClick={handleRatingChange}/>
                        <label htmlFor="4.0">
                            <span> 4,0 і більше </span> <img src={star4}/>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="3.5" name="more" onClick={handleRatingChange}/>
                        <label htmlFor="3.5">
                            <span>3,5 і більше</span>
                            <img src={star35}/>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="3.0" name="more" onClick={handleRatingChange}/>
                        <label htmlFor="3.0">
                            <span>3,0 і більше</span>
                            <img src={star3}/>
                        </label>
                    </div>
                </fieldset>
            </li>
            <li>
                <fieldset className="courseFilter__block">
                    <legend className="courseFilter__title">Вартість</legend>
                    <div className="courseFilter__input">
                        <input type="radio" id="price-free" name="horns" onClick={handlePriceChange}/>
                        <label htmlFor="price-free">
                            <span>Безкоштовний</span>
                        </label>
                    </div>

                    <div className="courseFilter__input">
                        <input type="radio" id="price-paid" name="horns" onClick={handlePriceChange}/>
                        <label htmlFor="price-paid">
                            <span>Платний</span>
                        </label>
                    </div>
                </fieldset>
            </li>
            <li>
                <fieldset className="courseFilter__block">
                    <legend className="courseFilter__title">Сортування</legend>

                    <div className="courseFilter__input">
                        <input type="radio" id="most-reviewed" name="scales" onClick={handleSortingChange}/>
                        <label htmlFor="most-reviewed">
                            <span>Найбільш популярний</span>
                        </label>
                    </div>

                    <div className="courseFilter__input">
                        <input type="radio" id="highest-rated" name="scales" onClick={handleSortingChange}/>
                        <label htmlFor="highest-rated">
                            <span>Найвищий рейтинг</span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="newest" name="scales" onClick={handleSortingChange}/>
                        <label htmlFor="newest">
                            <span>Найновіші</span>
                        </label>
                    </div>
                </fieldset>
            </li>
            <li>
                <fieldset className="courseFilter__block">
                    <legend className="courseFilter__title">Рівень</legend>

                    <div className="courseFilter__input">
                        <input type="radio" id="all" name="level" onClick={handleLevelChange}/>
                        <label htmlFor="all">
                            <span>Всі рівні (All Levels)</span>
                        </label>
                    </div>

                    <div className="courseFilter__input">
                        <input type="radio" id="beginner" name="level" onClick={handleLevelChange}/>
                        <label htmlFor="beginner">
                            <span>Початковий (Beginner)</span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="intermediate" name="level" onClick={handleLevelChange}/>
                        <label htmlFor="intermediate">
                            <span>Середній (Intermediate)</span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="expert" name="level" onClick={handleLevelChange}/>
                        <label htmlFor="expert">
                            <span>Експерт (Expert)</span>
                        </label>
                    </div>
                </fieldset>
            </li>
            <li>
                <fieldset className="courseFilter__block">
                    <legend className="courseFilter__title">Мова</legend>

                    <div className="courseFilter__input">
                        <input type="radio" id="en" name="language" onClick={handleLanguageChange}/>
                        <label htmlFor="en">
                            <span>Англійська</span>
                        </label>
                    </div>

                    <div className="courseFilter__input">
                        <input type="radio" id="pt" name="language" onClick={handleLanguageChange}/>
                        <label htmlFor="pt">
                            <span>Португальська </span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="es" name="language" onClick={handleLanguageChange}/>
                        <label htmlFor="es">
                            <span>Іспанська </span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="it" name="language" onClick={handleLanguageChange}/>
                        <label htmlFor="it">
                            <span>Італійська </span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="fr" name="language" onClick={handleLanguageChange}/>
                        <label htmlFor="fr">
                            <span>Французька </span>
                        </label>
                    </div>
                    <div className="courseFilter__input">
                        <input type="radio" id="uk" name="language" onClick={handleLanguageChange}/>
                        <label htmlFor="uk">
                            <span>Українська</span>
                        </label>
                    </div>
                </fieldset>
            </li>
            <button type={"submit"} className='button--full' style={{
                padding: '5px 20px',
                borderRadius: '15px',
                border: 'none',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '200%',
                margin: '10px'
            }}
                    onClick={applyFilters}>Застосувати
            </button>
            <button type={"submit"} className='button--line' style={{
                padding: '5px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '200%',
                margin: '10px'}}
                onClick={resetFilters}>
                Скинути
            </button>
        </ul>
    );
};

export default CourseFilter;
