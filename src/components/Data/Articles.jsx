import imgData from "../../images/courses/courseData.svg";
import imgKiber from "../../images/courses/coursekiber.svg";
import imgBlock from "../../images/3D.svg";
import imgProg from "../../images/courses/courseProg.svg";
import imgMob from "../../images/courses/coursemob.svg";
import imgWeb from "../../images/courses/web.svg";
import imgPM from "../../images/courses/coursePM.svg";
import imgBD from "../../images/courses/courseBD.svg";
import imgGame from "../../images/courses/courseGame.svg";
import imgGameDev from "../../images/courses/courseGameDev.svg";
import imgProgramLang from "../../images/courses/courseProgramLang.svg";
import imgQA from "../../images/courses/courseQA.svg";
import imgDesign from '../../images/courses/disain.svg'

const articles = [
    {
        img: imgData,
        description: "Процеси збору, обробки та аналiзу даних для отримання важливої інформації",
        name: "Обробка та аналіз даних",
        id: 1,
        value: "DataAnalyst"
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
        name: '3D та анімація',
        id: 3,
        value: "3D"
    },
    {
        img: imgProg,
        description: 'Створення систем, які забеспечують належне функціонування компьютерів',
        name: "Розробка програмного забеспечення",
        id: 4,
        value: "ProgramDev"
    },
    {
        img: imgMob,
        description: 'Розробка програм для мобільних платформ',
        name: 'Мобільна розробка',
        id: 5,
        value: "Mobile"
    },
    {
        img: imgWeb,
        description: 'Стандартна мова розмітки для створення та відображення веб-сторінок у браузері',
        name:'Інтернет та веб-розробка',
        id: 6,
        value: "Internet"
    },
    {
        img: imgPM,
        description: 'Організація і управління ресурсами з метою успешного досягення цілей та завершення завдань проекту',
        name: 'Управління проектами та ресурсами',
        id: 7,
        value: "ProjectManagement"
    },
    {
        img: imgBD,
        description: 'Підхід до створення програм, який розглядає архітектуру та розробку, не концентруючись на роботі з реальними даними',
        name: 'Проєктування та розробка баз даних',
        id: 8,
        value: "DesignBD"
    },
    {
        img: imgGame,
        description: "Творчий процес створення геймплею, персонажів, сюжету та інших аспектів відеоігор для досягнення цікавого геймерського досвіду",
        name: 'Дизайн ігор',
        id: 9,
        value: "DesignGame"
    },
    {
        img: imgGameDev,
        description: "Створення відеоігор, включаючи процеси створення графіки, програмування геймплею, анімації та тестування",
        name: "Розробка ігор",
        id: 10,
        value: "GameDev"
    },
    {
        img: imgProgramLang,
        description: "Мови програмування — це формальні системи для написання комп'ютерних програм",
        name: "Мови програмування",
        id: 11,
        value: "ProgrammingLanguage"
    },
    {
        img: imgQA,
        description: "Процес перевірки та оцінки програм для забезпечення їх відповідності вимогам",
        name: 'Тестування програмного забеспечення',
        id: 12,
        value: "QA"
    },
    {
        img: imgDesign,
        description: "Творчий процес створення візуально привабливих та функціональних рішень для вирішення конкретних завдань",
        name: "Дизайн",
        id: 13,
        value: "Design"
    }
]

export default articles