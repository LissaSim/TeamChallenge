import './CourseFilter.scss';
import star5 from './star5.png';
import star35 from './star35.png';
import star4 from './star4.png';
import star3 from './star3.png';

const CourseFilter = (props) => {
  return (
    <ul className="courseFilter">
      <li>
        <fieldset className="courseFilter__block">
    
          <legend className="courseFilter__title">Фільтр/Сортування</legend>
        </fieldset>
      </li>
      <li>
        <fieldset className="courseFilter__block">
          <legend className="courseFilter__title">Рейтинг</legend>

          <div className="courseFilter__input">
            {/*<input type="radio" id="more" name="more" />*/}
            <input type="radio" id="more" name="more"/>
            <label for="more">
              <span>4,5 і більше</span> <img src={star5}/>
            </label>
          </div>

          <div className="courseFilter__input">
            {/*<input type="radio" id="middle" name="middle" />*/}
            <input type="radio" id="middle" name="more"/>
            <label for="middle">
              <span> 4,0 і більше </span> <img src={star4}/>
            </label>
          </div>
          <div className="courseFilter__input">
            {/*<input type="radio" id="adequete" name="adequete" />*/}
            <input type="radio" id="adequete" name="more"/>
            <label for="adequete">
              <span>3,5 і більше</span>
              <img src={star35}/>
            </label>
          </div>
          <div className="courseFilter__input">
            {/*<input type="radio" id="less" name="less" />*/}
            <input type="radio" id="less" name="more"/>
            <label for="less">
              <span>3,0 і більше</span>
              <img src={star3}/>
            </label>
          </div>
        </fieldset>
      </li>
      <li>
      <fieldset className="courseFilter__block">
          <legend className="courseFilter__title">Вартість</legend>
          {/*checked*/}
          <div className="courseFilter__input">
            <input type="checkbox" id="scales" name="scales"  />
            <label for="scales">Безкоштовний</label>
          </div>

          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">0-10 євро</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">10-20 євро</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">20-30 євро</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">30-40 євро</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">40-50 євро</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Більше 50 євро</label>
          </div>
        </fieldset>
      </li>
      <li>
        <fieldset className="courseFilter__block">
          <legend className="courseFilter__title">Сортування</legend>

          <div className="courseFilter__input">
            <input type="radio" id="scales" name="horns" />
            <label for="scales">Найбільш популярний</label>
          </div>

          <div className="courseFilter__input">
            <input type="radio" id="horns" name="horns" />
            <label for="horns">Найвищий рейтинг</label>
          </div>
          <div className="courseFilter__input">
            <input type="radio" id="horns" name="horns" />
            <label for="horns">Найновіші</label>
          </div>
        </fieldset>
      </li>
      <li>
        <fieldset className="courseFilter__block">
          <legend className="courseFilter__title">Рівень</legend>

          <div className="courseFilter__input">
            <input type="checkbox" id="scales" name="scales" />
            <label for="scales">Всі рівні (All Levels)</label>
          </div>

          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Початковий (Beginner)</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Середній (Intermediate)</label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Експерт (Expert)</label>
          </div>
        </fieldset>
      </li>
      <li>
        <fieldset className="courseFilter__block">
          <legend className="courseFilter__title">Мова</legend>

          <div className="courseFilter__input">
            <input type="checkbox" id="scales" name="scales"/>
            <label for="scales">Англійська</label>
          </div>

          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Португальська </label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Іспанська </label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Італійська </label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Французька </label>
          </div>
          <div className="courseFilter__input">
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Українська</label>
          </div>
        </fieldset>
      </li>
    </ul>
  )
}
export default CourseFilter
