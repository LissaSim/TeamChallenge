import Banner from '../../components/Banner/Banner';
import Popular from '../../components/Popular/Popular';

import Articles from '../../components/Articles/Articles';

import CategoryArticles from '../../components/CategoryArticles/CategoryArticles';
import CategoryCourses from "../../components/CategoryCourses/CategoryCourses.jsx";

const MainPage = () => {

return(
    <>
    <Banner/>
    <Popular />
        <CategoryArticles title="Категорії курсів"/>
        <Articles/>
        <CategoryCourses title="Категорії статей" btnName="Більше статей"/>

    </>
)
  

};
export default MainPage;