import Description from '../../components/Description/Description'
import CourseBanner from '../../components/CourseBanner/CourseBanner'
import InfoBlockSection from '../../components/InfoBlockSection/InfoBlockSection'
import Comment from '../../components/Comment/Comment'
import Button from '../../components/Button/Button'
import InfoCard from '../../components/InfoCard/InfoCard'

const content = {
    title: 'Опис курсу',
    content:
        'Пройдіть цей навчальний курс Javascript і почніть вивчати Javascript сьогодні.Мені як діловій людині не місце в програмуванні.Десять років тому ви могли б уникнути цієї заяви. Сьогодні ви говорите це своїм колегам, і вони глузують з вас, перш ніж повернутися до своїх комп’ютерів, щоб вирішити реальні проблеми та виконати реальну роботу.Якщо ви хочете зробити щось корисне, почніть із вивчення Javascript. У наші дні, коли браузер займає центральне місце в будь-якому використанні комп’ютера, знання «мови браузера» є найважливішим кроком. Кілька років тому потенціал Javascript був невизначеним, і багато програмістів вважали його марним. Однак сьогодні компетентні програмісти визначили реальний потенціал і використання Javascript, і він перетворився з мови іграшок на основну мову браузера. Вона стала однією з найкорисніших мов нашої епохи. Кожен розробник потребує хоча б базового розуміння Javascript. Розробник, який знає Javascript, є рок-зіркою компанії і користується постійним попитом у роботодавців. Наш онлайн-курс Javascript допоможе вам почати, навчаючи всіх основних аспектів кодування в Javascript. Отже... що це буде? Бажаєте розвивати свою кар’єру та мати постійний попит у роботодавців? Хочете навчитися створювати динамічні та інноваційні документи Javascript? Почніть програмувати сьогодні з нашого курсу Javascript для початківців і візьміть під контроль свою кар’єру. Бонус: коли ви зареєструєтесь на цей курс, ви отримаєте доступ до моєї абсолютно нової книги, JavaScript Development Workbook. Ця книга дасть вам ще більше практики кодування на JavaScript!',
}

const CoursePage = () => {
    return (
        <>
            <div className="container">
                <CourseBanner btnName="Більше розділів" />
                <InfoBlockSection classWrap="row comments line">
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                </InfoBlockSection>
                <Description title={content.title} content={content.content} />
                <Description
                    title="Вимоги"
                    content="Для цього курсу необхідні деякі базові знання HTML."
                />

                <InfoBlockSection classWrap="column comments line" btnName="Перейти до курсу">
                    <h2 className="title-block">Зміст курсу</h2>

                    <p>Привіт, Javascript! </p>
                    <p>Зберігання інформації у змінних</p>
                    <p>Умовні оператори</p>
                    <p>Діалогові вікна </p>
                    <p>Тепер ми повторюємо! Цикли в Javascript</p>
                    <p>Кодування функцій Javascript</p>
                    <p>Робота з масивами</p>
                    <p>Об'єкт String</p>
                 
                </InfoBlockSection>
                <InfoBlockSection classWrap="row comments line" link='See all'>
                    <h2 className="title-block">Відгуки</h2>
                    <Comment />
                    <Comment />
                    <Comment />
                </InfoBlockSection>
            </div>
        </>
    )
}
export default CoursePage
