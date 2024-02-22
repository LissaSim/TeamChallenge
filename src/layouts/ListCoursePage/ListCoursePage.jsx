import './ListCoursePage.scss';
import { ItemCourse } from '../../components/ItemCourse/ItemCourse';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import useUdemyService from '../../components/Services/UdemyService.js';
import { useParams } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination.js';
import CourseFilter from "../../components/CourseFilter/CourseFilter.jsx";
 const ListCoursePage = () => {
    const [courseList, setCourseList] = useState([]);
    const { getCourseList, getCourseCount } = useUdemyService();
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
            <ItemCourse
                key={course.id}
                title={course.title}
                price={course.price}
                avgRate={course.avgRate}
                img={course.img}
            />
        ));
    };

    const content = renderContent(courseList);

    return (
        <>
            <div className="container listCourse">
                <h1 className="title-block">{value}</h1>
                <div className="listCourse__wrap line">
                    <div className="listCourse__filter">
                        <CourseFilter/>
                    </div>
                    <div className="listCourse__blocks">
                        {content}
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