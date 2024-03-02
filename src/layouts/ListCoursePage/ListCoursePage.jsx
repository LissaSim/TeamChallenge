import './ListCoursePage.scss';
import { ItemCourse } from '../../components/ItemCourse/ItemCourse';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import useUdemyService from '../../components/Services/UdemyService.js';
import {Link, NavLink, useParams} from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination.js';
import CourseFilter from "../../components/CourseFilter/CourseFilter.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
 const ListCoursePage = () => {
    const [courseList, setCourseList] = useState([]);
    const { getCourseList, getCourseCount, error, loading } = useUdemyService();
    const { value } = useParams();
    const [courseCount, setCourseCount] = useState(0);
    const {
        page,
        totalPages,
        nextPage,
        prevPage,
        setPage,
    } = usePagination({
        contentPerPage: 5,
        count: courseCount,
    });

    useEffect(() => {
        loadCourseList();
    }, [page, value]);

    useEffect(() => {
        getCourseCount(value).then(setCourseCount);
    }, [value]);

    const loadCourseList = () => {
        getCourseList(value, page)
            .then(onLoaded);
    };

    const onLoaded = (newCourses) => {
        setCourseList(newCourses);
    };

    const renderContent = (arr) => {
        return arr.map((course) => (
            <NavLink to={`course/${course.id}`} key={course.id}>
            <ItemCourse
                id={course.id}
                key={course.id}
                title={course.title}
                price={course.price}
                avgRate={course.avgRate}
                img={course.img}
            />
            </NavLink>
        ));
    };

    const content = renderContent(courseList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const filters = !loading && !error ? <CourseFilter/> : null;

    return (
        <>
            <div className="container listCourse">
                <h1 className="title-block">{value}</h1>
                <div className="listCourse__wrap line">
                    <div className="listCourse__filter">
                        {filters}
                    </div>
                    <div className="listCourse__blocks">
                        {content}
                        {errorMessage}
                        {spinner}
                    </div>
                </div>
                <Pagination
                    nextPage={nextPage}
                    prevPage={prevPage}
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </>
    );
};

export default ListCoursePage;