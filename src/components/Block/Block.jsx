import '../../scss/general.scss'
import './Block.scss';
import imgBlock from '../../images/3D.svg';
import imgData from "../../images/course/courseData.svg";
import imgKiber from "../../images/course/coursekiber.svg";
import imgLang from "../../images/course/courseLang.svg";
import imgMob from "../../images/course/coursemob.svg";
import imgProg from "../../images/course/courseProg.svg";
import imgWeb from "../../images/course/web.svg"

const Block = () => {

    const courses = [
        {
            img: imgData,
            description: "Процеси збору, обробки та аналiзу даних для отримання важливої інформації",
            name: "Обробка та аналіз даних",
            id: 1
        },
        {
            img: imgKiber,
            description: 'Комплекс процесів, практичних порад і технологічних рішень, які допомагають захищати важливі системи й мережу від кібератак.',
            name: 'Кібербезпека',
            id: 2
        },
        {
            img: imgBlock,
            description: 'Створення тривимірних моделей та їх рух через час для створення вражаючих візуальних ефектів у фільмах, іграх та рекламі.',
            name: '3D дизайн',
            id: 3
        },
        {
            img: imgProg,
            description: 'Створення систем, які забеспечують належне функціонування компьютерів',
            name: "Розробка програмного забеспечення",
            id: 4
        },
        {
            img: imgMob,
            description: 'Розробка програм для мобільних платформ',
            name: 'Мобільна розробка',
            id: 5
        },
        {
            img: imgWeb,
            description: 'Стандартна мова розмітки для створення та відображення веб-сторінок у браузері',
            name:'Інтернет та веб-розробка',
            id: 6
        },
        {
            img: imgProg,
            description: 'Організація і управління ресурсами з метою успешного досягення цілей та завершення завдань проекту',
            name: 'Управління проектами та ресурсами'
        }
    ]

    const renderCourses = courses.map((item) => {
        return(
            <article className="block" key={item.id}>
                <div className="block__img">
                    <img src={item.img} alt="" />
                </div>
                <div className="block__body">
                    <div className="block__body-desc">
                        <h4>{item.name}</h4>
                    </div>

                    <div className="block__text">
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
            </article>
        )
    })

    return (
        <>
            {renderCourses}
        </>
    )
}
export default Block;
