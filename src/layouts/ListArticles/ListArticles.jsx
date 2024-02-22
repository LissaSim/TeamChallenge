import './ListArticles.scss';
import Pagination from '../../components/Pagination/Pagination';
import Button from '../../components/Button/Button';
import fon from './fon.png'
const ListArticles = () => {
    return (
        <div className='listArticles container'>
            <h1 className="title-block"> Аналітика даних</h1>

            <div className="listArticles__articles">
                <div className="listArticles__articles-filter">
                    <Button classStyle="button--line active" content='Аналітика даних' />
                    <Button classStyle="button--line" content='Дизайн' />
                    <Button classStyle="button--line" content='Інтернет і веб-розробка' />
                    <Button classStyle="button--line" content='Кібербезпека' />
                    <Button classStyle="button--line" content='Розробка ігор' />
                    <Button classStyle="button--line" content='Розробка програмного  забезпечення' />
                    <Button classStyle="button--line" content='Управління проєктами та ресурсами' />
                </div>
                <div className="listArticles__articles-inner">
                    <div className="listArticles__article">
                        <div className="listArticles__article-img">
                            <img src={fon} alt="" />
                        </div>
                        <div className="listArticles__article-text">
                            <h4>Javascript for Beginners</h4>
                            <p>Аналітик — це спеціаліст, який розкладає
                                 дані на складові, щоб знайти відповіді на запитання, 
                                 які хвилюють бізнес. Можна сказати, що аналітик відрізняється 
                                 від інших людей тим, що він здатен знайти в даних більше інформації 
                                 та підказок ніж 
                                 це можуть
                                 зробити інші спеціалісти. На які запитання аналітики шукають відповіді
                                 </p>

                        </div>

                    </div>
                    <div className="listArticles__article">
                        <div className="listArticles__article-img">
                            <img src={fon} alt="" />
                        </div>
                        <div className="listArticles__article-text">
                            <h4>Javascript for Beginners</h4>
                            <p>Аналітик — це спеціаліст, який розкладає
                                 дані на складові, щоб знайти відповіді на запитання, 
                                 які хвилюють бізнес. Можна сказати, що аналітик відрізняється 
                                 від інших людей тим, що він здатен знайти в даних більше інформації 
                                 та підказок ніж 
                                 це можуть
                                 зробити інші спеціалісти. На які запитання аналітики шукають відповіді
                                 </p>

                        </div>

                    </div>
                    <div className="listArticles__article">
                        <div className="listArticles__article-img">
                            <img src={fon} alt="" />
                        </div>
                        <div className="listArticles__article-text">
                            <h4>Javascript for Beginners</h4>
                            <p>Аналітик — це спеціаліст, який розкладає
                                 дані на складові, щоб знайти відповіді на запитання, 
                                 які хвилюють бізнес. Можна сказати, що аналітик відрізняється 
                                 від інших людей тим, що він здатен знайти в даних більше інформації 
                                 та підказок ніж 
                                 це можуть
                                 зробити інші спеціалісти. На які запитання аналітики шукають відповіді
                                 </p>

                        </div>

                    </div>
                    <div className="listArticles__article">
                        <div className="listArticles__article-img">
                            <img src={fon} alt="" />
                        </div>
                        <div className="listArticles__article-text">
                            <h4>Javascript for Beginners</h4>
                            <p>Аналітик — це спеціаліст, який розкладає
                                 дані на складові, щоб знайти відповіді на запитання, 
                                 які хвилюють бізнес. Можна сказати, що аналітик відрізняється 
                                 від інших людей тим, що він здатен знайти в даних більше інформації 
                                 та підказок ніж 
                                 це можуть
                                 зробити інші спеціалісти. На які запитання аналітики шукають відповіді
                                 </p>

                        </div>

                    </div>
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    )
};
export default ListArticles;