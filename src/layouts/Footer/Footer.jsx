import '../../scss/general.scss'
import './Footer.scss'
import logoFooter from '../../images/FS2S-footer.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
      <div className="footer__footer">
          <img className='footer__logo' src={logoFooter} alt="FS2S" />
          <span>© 2023 FS2S, Inc.</span>
        </div>
        <div className="footer__lists">
          <div >
            <h3 className="footer__list-title">Категорії курсів</h3>
            <ul className="footer__list">
              <li>3D та анімація</li>      
              <li>Аналітика даних </li>
              <li>Дизайн</li>
              <li>Інтернет та Веб розробка</li>
              <li>Кібербезпека</li>
              <li>Розробка мобільних додатків</li>
              <li>Розробка програмного забезбечення</li>
              <li>Управління проєктами та ресурсами</li>
          
            </ul>
          </div>
          <div>
            <h3 className="footer__list-title">Категорії статей</h3>
            <ul className="footer__list">
              <li>Аналітика даних </li>
              <li>Дизайн</li>
              <li>Інтернет та Веб розробка</li>
              <li>Кібербезпека</li>
              <li>Розробка ігор</li>
              <li>Розробка програмного забезбечення</li>
              <li>Управління проєктами та ресурсами</li>
            </ul>
          </div>
          <div>
            <h3 className="footer__list-title">Команда FS2S</h3>
            <ul className="footer__list">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.037 17.0438H14.0789V12.4021C14.0789 11.2953 14.0558 9.87282 12.5321 9.87282C10.9897 9.87282 10.7547 11.0734 10.7547 12.3202V17.0432H7.79288V7.49914H10.6378V8.80098H10.6759C11.0734 8.04912 12.0402 7.25852 13.4827 7.25852C16.4832 7.25852 17.0401 9.23409 17.0401 11.8028V17.0432L17.037 17.0438ZM4.44674 6.19481C3.49239 6.19481 2.72741 5.42296 2.72741 4.47236C2.72741 3.52489 3.49552 2.75429 4.44674 2.75429C5.39796 2.75429 6.16856 3.52489 6.16856 4.47236C6.16856 5.42296 5.39796 6.19481 4.44674 6.19481ZM5.93044 17.0438H2.96241V7.49977H5.93044V17.0438ZM18.5219 0H1.47495C0.660604 0 0 0.644355 0 1.44183V18.5582C0 19.3556 0.660604 20 1.47495 20H18.5188C19.3319 20 19.9994 19.3556 19.9994 18.5582V1.44183C19.9994 0.644355 19.3319 0 18.5188 0L18.5219 0Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>Backend - Гліб </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.037 17.0438H14.0789V12.4021C14.0789 11.2953 14.0558 9.87282 12.5321 9.87282C10.9897 9.87282 10.7547 11.0734 10.7547 12.3202V17.0432H7.79288V7.49914H10.6378V8.80098H10.6759C11.0734 8.04912 12.0402 7.25852 13.4827 7.25852C16.4832 7.25852 17.0401 9.23409 17.0401 11.8028V17.0432L17.037 17.0438ZM4.44674 6.19481C3.49239 6.19481 2.72741 5.42296 2.72741 4.47236C2.72741 3.52489 3.49552 2.75429 4.44674 2.75429C5.39796 2.75429 6.16856 3.52489 6.16856 4.47236C6.16856 5.42296 5.39796 6.19481 4.44674 6.19481ZM5.93044 17.0438H2.96241V7.49977H5.93044V17.0438ZM18.5219 0H1.47495C0.660604 0 0 0.644355 0 1.44183V18.5582C0 19.3556 0.660604 20 1.47495 20H18.5188C19.3319 20 19.9994 19.3556 19.9994 18.5582V1.44183C19.9994 0.644355 19.3319 0 18.5188 0L18.5219 0Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>Designer - Анна Кохно</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.037 17.0438H14.0789V12.4021C14.0789 11.2953 14.0558 9.87282 12.5321 9.87282C10.9897 9.87282 10.7547 11.0734 10.7547 12.3202V17.0432H7.79288V7.49914H10.6378V8.80098H10.6759C11.0734 8.04912 12.0402 7.25852 13.4827 7.25852C16.4832 7.25852 17.0401 9.23409 17.0401 11.8028V17.0432L17.037 17.0438ZM4.44674 6.19481C3.49239 6.19481 2.72741 5.42296 2.72741 4.47236C2.72741 3.52489 3.49552 2.75429 4.44674 2.75429C5.39796 2.75429 6.16856 3.52489 6.16856 4.47236C6.16856 5.42296 5.39796 6.19481 4.44674 6.19481ZM5.93044 17.0438H2.96241V7.49977H5.93044V17.0438ZM18.5219 0H1.47495C0.660604 0 0 0.644355 0 1.44183V18.5582C0 19.3556 0.660604 20 1.47495 20H18.5188C19.3319 20 19.9994 19.3556 19.9994 18.5582V1.44183C19.9994 0.644355 19.3319 0 18.5188 0L18.5219 0Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>Frontend - Єлизавета </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.037 17.0438H14.0789V12.4021C14.0789 11.2953 14.0558 9.87282 12.5321 9.87282C10.9897 9.87282 10.7547 11.0734 10.7547 12.3202V17.0432H7.79288V7.49914H10.6378V8.80098H10.6759C11.0734 8.04912 12.0402 7.25852 13.4827 7.25852C16.4832 7.25852 17.0401 9.23409 17.0401 11.8028V17.0432L17.037 17.0438ZM4.44674 6.19481C3.49239 6.19481 2.72741 5.42296 2.72741 4.47236C2.72741 3.52489 3.49552 2.75429 4.44674 2.75429C5.39796 2.75429 6.16856 3.52489 6.16856 4.47236C6.16856 5.42296 5.39796 6.19481 4.44674 6.19481ZM5.93044 17.0438H2.96241V7.49977H5.93044V17.0438ZM18.5219 0H1.47495C0.660604 0 0 0.644355 0 1.44183V18.5582C0 19.3556 0.660604 20 1.47495 20H18.5188C19.3319 20 19.9994 19.3556 19.9994 18.5582V1.44183C19.9994 0.644355 19.3319 0 18.5188 0L18.5219 0Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>Frontend - Тетяна Федоренко</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.037 17.0438H14.0789V12.4021C14.0789 11.2953 14.0558 9.87282 12.5321 9.87282C10.9897 9.87282 10.7547 11.0734 10.7547 12.3202V17.0432H7.79288V7.49914H10.6378V8.80098H10.6759C11.0734 8.04912 12.0402 7.25852 13.4827 7.25852C16.4832 7.25852 17.0401 9.23409 17.0401 11.8028V17.0432L17.037 17.0438ZM4.44674 6.19481C3.49239 6.19481 2.72741 5.42296 2.72741 4.47236C2.72741 3.52489 3.49552 2.75429 4.44674 2.75429C5.39796 2.75429 6.16856 3.52489 6.16856 4.47236C6.16856 5.42296 5.39796 6.19481 4.44674 6.19481ZM5.93044 17.0438H2.96241V7.49977H5.93044V17.0438ZM18.5219 0H1.47495C0.660604 0 0 0.644355 0 1.44183V18.5582C0 19.3556 0.660604 20 1.47495 20H18.5188C19.3319 20 19.9994 19.3556 19.9994 18.5582V1.44183C19.9994 0.644355 19.3319 0 18.5188 0L18.5219 0Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>Project manager - Юлія Горак</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.037 17.0438H14.0789V12.4021C14.0789 11.2953 14.0558 9.87282 12.5321 9.87282C10.9897 9.87282 10.7547 11.0734 10.7547 12.3202V17.0432H7.79288V7.49914H10.6378V8.80098H10.6759C11.0734 8.04912 12.0402 7.25852 13.4827 7.25852C16.4832 7.25852 17.0401 9.23409 17.0401 11.8028V17.0432L17.037 17.0438ZM4.44674 6.19481C3.49239 6.19481 2.72741 5.42296 2.72741 4.47236C2.72741 3.52489 3.49552 2.75429 4.44674 2.75429C5.39796 2.75429 6.16856 3.52489 6.16856 4.47236C6.16856 5.42296 5.39796 6.19481 4.44674 6.19481ZM5.93044 17.0438H2.96241V7.49977H5.93044V17.0438ZM18.5219 0H1.47495C0.660604 0 0 0.644355 0 1.44183V18.5582C0 19.3556 0.660604 20 1.47495 20H18.5188C19.3319 20 19.9994 19.3556 19.9994 18.5582V1.44183C19.9994 0.644355 19.3319 0 18.5188 0L18.5219 0Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>QA - Ростислав Пархоменко</span>
              </li>
            </ul>
          </div>
        </div>
    
      </div>
    </footer>
  )
}
export default Footer
