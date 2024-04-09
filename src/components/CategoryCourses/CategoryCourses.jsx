import '../../scss/general.scss';
import './CategoryCourses.scss';
import BlockCourses from "../BlockCourses/BlockCourses.jsx";
import {useState} from "react";
import articles from "../Data/Articles.jsx"
import {NavLink} from "react-router-dom";
const CategoryCourses = (props) => {
    const [newCourses, setNewCourses] = useState(false);
    const [offset, setOffset] = useState(6)
    const title = props.title;

    const loadingNewCourses = () => {
        if (newCourses) {
            setOffset(offset - 6);
            setNewCourses(!newCourses);
        } else {
            setOffset(offset + 6);
            setNewCourses(!newCourses);
        }
    }

    const renderCourses = (arr,next) => {
        return arr.slice(0,next).map((item) => (
            <NavLink to={`/article/${item.value}`} key={item.id} className='block'>
                <BlockCourses
                    key={item.id}
                    name={item.name}
                    value={item.value}
                    description={item.description}
                    img={item.img}/>
            </NavLink>
        ))
    }

    const content = renderCourses(articles, offset)

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
                            onClick={loadingNewCourses}>{newCourses ? "Менше статей" : "Більше статей"}</button>
                    </div>


                </div>


            </div>


        </section>
    )
}
export default CategoryCourses;