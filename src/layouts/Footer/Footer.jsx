import '../../scss/general.scss'
import './Footer.scss'
import logoFooter from '../../images/FS2S-footer.svg'
import {NavLink} from "react-router-dom";
import courses from "../../components/Data/Courses.jsx";
import articles from "../../components/Data/Articles.jsx";

function Footer() {
  const renderCourses = (arr) => {
    return arr.map((item) => (
        <NavLink to={`courseList/${item.value}`} key={item.id} className="footer__list">
          <li key={item.id} style={{margin: "8px"}}>{item.name}</li>
        </NavLink>
    ))
  }
  const renderArticles = (arr) => {
    return arr.map((item) => (
        <NavLink to={`article/${item.value}`} key={item.id} className="footer__list">
          <li key={item.id} style={{margin: "8px"}}>{item.name}</li>
        </NavLink>
    ))
  }
  const coursesList = renderCourses(courses);
  const articlesList = renderArticles(articles)

  return (
    <footer className="footer">
      <div className="container footer__container">
      <div className="footer__footer">
          <img className='footer__logo' src={logoFooter} alt="FS2S" />
          <span>© 2024 FS2S, Inc.</span>
        </div>
        <div className="footer__lists">
          <div >
            <h3 className="footer__list-title">Категорії курсів</h3>
            <ul className="footer__list">
            {coursesList}
            </ul>
          </div>
          <div>
            <h3 className="footer__list-title">Категорії статей</h3>
            <ul className="footer__list">
              {articlesList}
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
                <NavLink to={"https://www.linkedin.com/in/hlib-fietisov-004231235/edit/forms/next-action/after-connect-add-position/"}><span>Backend - Гліб Фєтісов</span></NavLink>
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
                <NavLink to={"https://www.linkedin.com/in/anna-kokhno-698620271/edit/forms/next-action/after-connect-add-position/"}><span>Designer - Анна Кохно</span></NavLink>
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
                <NavLink to={"https://www.linkedin.com/in/yelizaveta-simutina-640744279/"}><span>Frontend - Єлизавета Сімутіна</span></NavLink>
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
                <NavLink to={"https://www.linkedin.com/in/tetiana-fedorenko-24b187113/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}><span>Frontend - Тетяна Федоренко</span></NavLink>
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
                <NavLink to={"https://www.linkedin.com/in/yuliia-horak/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}><span>Project manager - Юлія Горак</span></NavLink>
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
                <NavLink to={"https://www.linkedin.com/in/rostislav-parkhomenko-888abb260/"}><span>QA - Ростислав Пархоменко</span></NavLink>
              </li>
            </ul>
          </div>
        </div>
    
      </div>
    </footer>
  )
}
export default Footer
