import '../../scss/general.scss';
import './CategoryArticles.scss';
import Block from '../Block/Block';
import '../Button/Button.scss';
import {useState} from "react";
import courses from "../Data/Courses.jsx"

const CategoryArticles = ({title}) => {
    const [newArticles, setNewArticles] = useState(false);
    const [offset, setOffset] = useState(6);

    const loadingNewArticles = () => {
        if (newArticles) {
            setOffset(offset - 1);
            setNewArticles(!newArticles);
        } else {
            setOffset(offset + 1);
            setNewArticles(!newArticles);
        }
    }

    const renderArticles = (arr,next) => {
        return arr.slice(0,next).map((item) => (
        <Block
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.img}/>
        ))
    }

    const content = renderArticles(courses, offset)
    return (
        <section className="category">
        <div className="container">
            <div className="line">
                <h2 className="title-block">{title}</h2>
                <div className="category__wrap">
                    {content}
                </div>
                <div className="category__inner">
                    <button
                        className='button button--line'
                        onClick={loadingNewArticles}>{newArticles ? "Меньше статей" : "Більше статей"}</button>
                </div>


            </div>


        </div>


        </section>
    )
}
export default CategoryArticles;