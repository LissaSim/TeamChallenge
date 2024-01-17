import './ListCoursePage.scss'
import { ItemCourse } from '../../components/ItemCourse/ItemCourse'

export const  ListCoursePage = () =>{
    return (
        <>
        <div className="container listCourse">
        <h1 className="title-block">Аналітика даних</h1>
        <div className="listCourse__wrap line">
        <div className="listCourse__filter">
            filter
        </div>
        <div className="listCourse__blocks">
            <ItemCourse/>
            <ItemCourse/>
            <ItemCourse/>
            <ItemCourse/>
         

        </div>
        </div>
        </div>
       
        </>
    )
}