import imgData from "../../images/articles/courseData.svg";
import imgKiber from "../../images/articles/coursekiber.svg";
import imgBlock from "../../images/3D.svg";
import imgProg from "../../images/articles/courseProg.svg";
import imgMob from "../../images/articles/coursemob.svg";
import imgWeb from "../../images/articles/web.svg";
import imgPM from "../../images/articles/coursePM.svg"

const courses = [
    {
        img: imgData,
        description: "Процеси збору, обробки та аналiзу даних для отримання важливої інформації",
        name: "Обробка та аналіз даних",
        id: 1,
        value: "Data processing and analysis"
    },
    {
        img: imgKiber,
        description: 'Комплекс процесів, практичних порад і технологічних рішень, які допомагають захищати важливі системи й мережу від кібератак.',
        name: 'Кібербезпека',
        id: 2,
        value: "Cybersecurity"
    },
    {
        img: imgBlock,
        description: 'Створення тривимірних моделей та їх рух через час для створення вражаючих візуальних ефектів у фільмах, іграх та рекламі.',
        name: '3D дизайн',
        id: 3,
        value: "Design"
    },
    {
        img: imgProg,
        description: 'Створення систем, які забеспечують належне функціонування компьютерів',
        name: "Розробка програмного забеспечення",
        id: 4,
        value: "Software development"
    },
    {
        img: imgMob,
        description: 'Розробка програм для мобільних платформ',
        name: 'Мобільна розробка',
        id: 5,
        value: "Mobile development"
    },
    {
        img: imgWeb,
        description: 'Стандартна мова розмітки для створення та відображення веб-сторінок у браузері',
        name:'Інтернет та веб-розробка',
        id: 6,
        value: "Internet and web development"
    },
    {
        img: imgPM,
        description: 'Організація і управління ресурсами з метою успешного досягення цілей та завершення завдань проекту',
        name: 'Управління проектами та ресурсами',
        id: 7,
        value: "Project and resource management"
    }
]

export default courses