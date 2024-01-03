import Banner from '../../components/Banner/Banner';
import Popular from '../../components/Popular/Popular';

import Articles from '../../components/Articles/Articles';

import CategoryArticles from '../../components/CategoryArticles/CategoryArticles';

const MainPage=()=>{
return(
    <>
    <Banner/>
    <Popular />
        <CategoryArticles title="Категорії курсів" btnName="Більше курсів"/>
        <Articles/>
        <CategoryArticles title="Категорії статей" btnName="Більше статей"/>

    </>
)
  

};
export default MainPage;