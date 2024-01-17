import './Comment.scss'
import avatar from './avatar.svg'
import Stars from '../Stars/Stars'

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__info">
        <div className="comment__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="comment__avtor">
            <h4>Gabriel M.</h4>
            <Stars/>
        </div>
      </div>
      <div className="comment__wrap">
        Very good material, love the dad jokes and very easy understand. The
        only problem is the old videos for section 4 and on.
      </div>
    </div>
  )
}
export default Comment

