import './ListCoursePage.scss';
import { ItemCourse } from '../../components/ItemCourse/ItemCourse';
import Pagination from '../../components/Pagination/Pagination';
import CourseFilter from '../../components/CourseFilter/CourseFilter';

const ListCoursePage = () => {
  return (
    <>
      <div className="container listCourse">
       
        <h1 className="title-block">Аналітика даних </h1>
        <div className="listCourse__wrap line">
          <div className="listCourse__filter">
            <CourseFilter />
          </div>
          <div className="listCourse__blocks">
            <ItemCourse
              name="Javascript for Beginners"
              raite="4.6"
              price="$69,99"
              sale="$11,99"
            />
            <ItemCourse
              name="Javascript for Beginners"
              raite="4.0"
              price="$69,99"
            />
            <ItemCourse
              name="Javascript for Beginners"
              raite="4.1"
              price="$69,99"
            />
            <ItemCourse
              name="Javascript for Beginners"
              raite="4.5"
              price="$69,99"
            />
          </div>
        </div>
        <Pagination />
      </div>
    </>
  )
};
export default ListCoursePage;
