import img1 from "../../images/articlesList/mobilnyj-razrabotchik.webp";
import img2 from "../../images/articlesList/mobile-guide.webp";
import img3 from "../../images/articlesList/mobile-step.jpg";
import imgAnalyst from "../../images/popularArticles/analyst.svg";
import imgAnalyst2 from "../../images/articlesList/Data-Analyst-940x528.webp";
import imgAnalyst3 from "../../images/articlesList/image_dataAnalyst.jpg";
import imgCybersecurity from "../../images/articlesList/cybersecurity.jfif";
import imgcybersecurity2 from "../../images/articlesList/cybersecurityArticle2.png"
import imgCybersecurity3 from "../../images/articlesList/kiberbezopasnost-ehto.webp"

const articlesList = {
    Mobile : [
        {
            id: 1,
            title: "Мобільний розробник: обов’язки та необхідні навички",
            description: "Мобільний розробник – це фахівець, який займається створенням і розробкою мобільних додатків для смартфонів і планшетів. Він відповідає за створення функціональних і привабливих застосунків для розв’язання різноманітних завдань, що надають зручний доступ до інформації та забезпечують позитивний користувацький досвід.",
            img: img1,
            reference: "https://foxminded.ua/mobilnyi-rozrobnyk/",
            value: "Mobile"
        },
        {
            id: 2,
            title: "Розробка мобільних додатків від А до Я: повний гайд",
            description: "Якщо ще пару століть назад в різних частинах світу людей масово охоплювала Золота лихоманка, то зараз з упевненістю можна сказати, що сучасний світ цілком і повністю поглинений мобільною лихоманкою. Чи знайдеться у вашому оточенні хоча б одна людина, яка не користується смартфоном? Та яке там. Продажі смартфонів зростають з блискавичною швидкістю, а компанії-виробники вкладають величезні суми в мобільні технології, їх розвиток і популяризацію на ринку. Мобільна розробка – дуже стрімко зростаюча область програмування, адже кількість мобільних пристроїв значно перевищує кількість персональних комп’ютерів, і ця тенденція буде тільки зростати.",
            img: img2,
            reference: "https://dan-it.com.ua/uk/blog/rozrobka-mobilnih-dodatkiv-vid-a-do-ja-povnij-gajd/",
            value: "Mobile"
        },
        {
            id: 3,
            title: "Розробка мобільних додатків: поради та практичні рекомендації",
            description: "У цій статті ми розглянемо поради та практичні рекомендації щодо розробки мобільних додатків у позашкільній освіті, які допоможуть створити інноваційні та ефективні інструменти для навчання.",
            img: img3,
            reference: "https://bdut.co.ua/pro-nas/rozrobka-mobilnyh-dodatkiv/",
            value: "Mobile"
        }
    ],
    DataAnalyst : [
        {
            id: 1,
            title: "Хто такий data analyst і що треба знати, щоб ним стати?",
            description: "Аналітик — це спеціаліст, який розкладає дані на складові, щоб знайти відповіді на запитання, які хвилюють бізнес. Можна сказати, що аналітик відрізняється від інших людей тим, що він здатен знайти в даних більше інформації та підказок ніж це можуть зробити інші спеціалісти. ",
            img: imgAnalyst,
            reference: "https://dev.ua/news/data-analyst-1669023279",
            value: "DataAnalyst"
        },
        {
            id: 2,
            title: "Коли робота — це детектив: як стати дата-аналітиком і чим він займається",
            description: "Професія Data Analyst має все більший попит, оскільки все частіше компанії приймають рішення не інтуїтивно, а на основі даних, бо це допомагає їм заощадити час та уникнути зайвих витрат. І завдання дата-аналітика — добувати цінні знання з покладів необроблених даних.",
            img: imgAnalyst2,
            reference: "https://happymonday.ua/yak-staty-data-analitykom",
            value: "DataAnalyst"
        },
        {
            id: 3,
            title: "Питання для підготовки до співбесіди початківцю в аналітиці даних",
            description: "Однією з тем, якій приділяю все більше уваги, — підготовка до технічних співбесід. Початківцю-аналітику важко туди потрапити. А якщо і вдається, то передчуття лякає. Пам’ятаю свою першу технічну співбесіду: доки розповідав про себе, здавалося, серце вискочить з грудей.",
            img: imgAnalyst3,
            reference: "https://dou.ua/forums/topic/44769/",
            value: "DataAnalyst"
        }
    ],
    Cybersecurity: [
        {
            id: 1,
            title: "Що таке кібербезпека?",
            description: "Дізнайтеся про кібербезпеку й те, як захищати працівників, дані та програми від усе більшої кількості сучасних кіберзагроз.",
            img: imgCybersecurity,
            reference: "https://www.microsoft.com/uk-ua/security/business/security-101/what-is-cybersecurity#:~:text=%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8%20%D0%BA%D1%96%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B8%3F-,%D0%9A%D1%96%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B0%20%E2%80%93%20%D1%86%D0%B5%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%20%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%96%D0%B2%2C%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D1%85%20%D0%BF%D0%BE%D1%80%D0%B0%D0%B4%20%D1%96%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B8%D1%85%20%D1%80%D1%96%D1%88%D0%B5%D0%BD%D1%8C%2C,%D0%B9%20%D0%B4%D0%B0%D0%BD%D1%96%20%D0%B2%D1%96%D0%B4%20%D0%BD%D0%B5%D1%81%D0%B0%D0%BD%D0%BA%D1%86%D1%96%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D1%83.",
            value: "Cybersecurity"
        },
        {
            id: 2,
            title: "Як стати спеціалістом з кібербезпеки?",
            description: "Що таке кібербезпека? Чим займаються фахівці з кібербезпеки? Які навички вам потрібні, щоб розпочати працювати в галузі кібербезпеки? Скільки можна заробити, займаючись кібербезпекою? Відповідь на ці питання ви знайдете в тексті нижче.",
            img: imgcybersecurity2,
            reference: "https://nofluffjobs.com/uk/log/robota-v-it/kiberbezpeka-scho-ce-take-ta-jak-staty-specjalistom-z-kiberbezpeky/",
            value: "Cybersecurity"
        },
        {
            id: 3,
            title: "Кібербезпека – це важливо в сучасному світі",
            description: "З появою нових технологій, як-от штучний інтелект і блокчейн, кібербезпека продовжила еволюціонувати, а фахівці з безпеки постійно розробляють нові методи та інструменти для боротьби з сучасними загрозами.",
            img: imgCybersecurity3,
            reference: "https://foxminded.ua/kiberbezpeka-tse/#:~:text=%D0%9A%D1%96%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B0%20%E2%80%94%20%D1%86%D0%B5%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0%20%D0%B7%D0%B0%D1%85%D0%B8%D1%81%D1%82%D1%83%20%D0%BA%D0%BE%D0%BC%D0%BF,%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D0%BA%D0%B8%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%2D%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B0%D0%BA%D1%86%D1%96%D0%B9%20%D1%96%20%D0%BA%D0%BE%D0%BC%D1%83%D0%BD%D1%96%D0%BA%D0%B0%D1%86%D1%96%D0%B9.",
            value: "Cybersecurity"
        }
    ]
}

export default articlesList