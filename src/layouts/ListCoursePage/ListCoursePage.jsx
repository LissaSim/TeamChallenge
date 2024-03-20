
import './ListCoursePage.scss';
import { ItemCourse } from '../../components/ItemCourse/ItemCourse';
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import useUdemyService from '../../components/Services/UdemyService.js';
import { NavLink, useParams} from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination.js';
import CourseFilter from "../../components/CourseFilter/CourseFilter.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

const ListCoursePage = () => {
    const [courseList, setCourseList] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [stringRequest, setStringRequest] = useState("");
    const { getCourseList, getCourseCount, error, loading} = useUdemyService();
    const { value } = useParams();
    const [courseCount, setCourseCount] = useState(0);
    const [courseCountLoading, setCourseCountLoading] = useState(true);
    const {
        page,
        totalPages,
        // setTotalPages,
        nextPage,
        prevPage,
        setPage,
    } = usePagination({
        contentPerPage: 7,
        count: courseCount,
    });

    const handleApplyFilters = (stringRequest) => {
        setStringRequest(stringRequest);
        setPage(1)
    };

    useEffect(() => {
        loadCourseList();
    }, [page, value,stringRequest]);

    useEffect(() => {
        setCourseCountLoading(true);
        getCourseCount(value)
            .then(count => {
                setCourseCount(count);
                // setTotalPages(Math.ceil(count / 7));
                setCourseCountLoading(false);
            });
    }, [value,stringRequest,page]);

    const loadCourseList = () => {
        getCourseList(value, page,stringRequest)
            .then(onLoaded);
    };

    const onLoaded = (newCourses) => {
        setCourseList(newCourses);
        setShowContent(true);
    };

    const renderContent = (arr) => {
        return arr.map((course) => (
            <NavLink to={`course/${course.id}`} key={course.id} style={{textDecoration: "none", color: "black"}}>
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

    const content = showContent && !loading && !error ? renderContent(courseList) : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const searchError = !courseCount && !courseCountLoading ? 'За вашим запитом нічого не знайдено' : null;

    return (
        <>
            <div className="container listCourse">
                <h1 className="title-block">{value}</h1>
                <div className="listCourse__wrap line">
                    <div className="listCourse__filter">
                        <CourseFilter onApplyFilters={handleApplyFilters} />
                    </div>
                    <div className="listCourse__blocks">
                        {content}
                        {errorMessage}
                        {spinner}
                        {searchError}
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
