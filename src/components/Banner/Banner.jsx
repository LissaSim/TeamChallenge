import '../../scss/general.scss'
import './Banner.scss';
import Bannerimg from '../../images/banner.svg'

function Banner() {
  return (
    <section className="banner">
      <div className="container banner__container">
        <div className="banner__wrap">
          <h1 className='title'>From start to success</h1>
          <p>
            Наш проєкт створений з метою надання кожному користувачеві
            можливості вибрати оптимальний курс з платформи Udemy чи корисною
            статтю, що відповідає його потребам та допомагає розпочати успішну
            кар'єру в обраній сфері
          </p>
        </div>
        <div className="banner__img">
            <img src={Bannerimg} alt="" />
        </div>
      </div>
    </section>
  )
}
export default Banner
