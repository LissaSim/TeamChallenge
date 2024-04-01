import Description from '../../components/Description/Description'
import CourseBanner from '../../components/CourseBanner/CourseBanner'
import InfoBlockSection from '../../components/InfoBlockSection/InfoBlockSection'
import Comment from '../../components/Comment/Comment'
import InfoCard from '../../components/InfoCard/InfoCard'
import {useEffect, useState} from "react";
import * as imports from "../../components/imports/importsCoursePage.js";
import useUdemyService from "../../components/Services/UdemyService.js";
import {NavLink, useParams} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const content = {
    title: 'Опис курсу'
}

const CoursePage = () => {
    const [data, setData] = useState({});
    const [lectures, setLectures] = useState([]);
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    const {loading, error, getCourseById, getLectures, getReviews} = useUdemyService();

    useEffect(() => {
        const fetchData = async () => {
                const courseData = await getCourseById(id);
                onDataLoaded(courseData);

                const lecturesData = await getLectures(id);
                onLecturesLoaded(lecturesData);

                const reviewsData = await getReviews(id);
                onReviewsLoaded(reviewsData);
        };

        fetchData();
    }, [id]);


    const onDataLoaded = (newData) => (setData(newData));
    const onLecturesLoaded = (newLectures) => (setLectures(newLectures));
    const onReviewsLoaded = (newReviews) => (setReviews(newReviews));

    const renderLectures = (arr) => {
        return arr.map((lecture, index) => (
            <p key={index}>{lecture.title}</p>
        ))
    }

    const renderReviews = (arr) => {
        return arr.map((review, index) => (
            <Comment
                key={index}
                author={review.author}
                content={review.content}/>
        ))
    };

    const lecturesList = renderLectures(lectures);
    const reviewsList = renderReviews(reviews);

    const contentItem =
        <div className="container">
            <CourseBanner btnName="Перейти до курсу"
                          title={data.title}
                          raiting={data.avgRate}
                          hasCertificate={data.hasCertificate}
                          level={data.courseLevel}
                          price={data.price}
                          discount={data.discountPrice}
                          img={data.img}
                          video={data.video}
                          courseUrl={data.courseUrl}
                          headline={data.headline}/>
            <InfoBlockSection classWrap="row comments line">
                <InfoCard students={data.enrolledStudents} titleS={"Студентів"} iconStudents={imports.iconStudents}/>
                <InfoCard language={data.locale} titleL={"Мова"} iconLanguage={imports.iconLanguage}/>
                <InfoCard duration={data.lecturesDuration} titleD={"Відео-уроків"} iconYoutube={imports.iconYouTube}/>
                <InfoCard tests={data.quizzesAmount} titleT={"Тестів"} iconTests={imports.iconTests}/>
            </InfoBlockSection>
            <Description title={content.title} content={data.description}/>
            <Description
                title="Вимоги"
                content={data.requirements}
            />

            <NavLink to={data.courseUrl} style={{textDecoration: "none", color: "black"}}>
                <InfoBlockSection classWrap="column comments line" btnName="Більше розділів">
                    <h2 className="title-block">Зміст курсу</h2>
                    {lecturesList}
                </InfoBlockSection>
            </NavLink>

            <InfoBlockSection classWrap="row comments line" link='See all' courseUrl={data.courseUrl}>
                <h2 className="title-block">Відгуки</h2>
                {reviewsList}
            </InfoBlockSection>
        </div>

    const errorMessage = error ? <ErrorMessage/> : null;
    const loadingItem = loading ? <Spinner/> : null;
    const contentPage = !loading ? contentItem : null;

    return (
        <>
            {loadingItem}
            {contentPage}
            {errorMessage}
        </>
    )
}
export default CoursePage
