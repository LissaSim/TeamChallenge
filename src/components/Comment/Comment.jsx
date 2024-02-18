import './Comment.scss'
import avatar from './avatar.svg'
import Stars from '../Stars/Stars'

const Comment = ({author,content}) => {
  return (
    <div className="comment">
      <div className="comment__info">
        <div className="comment__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="comment__avtor">
            <h4>{author}</h4>
            <Stars/>
        </div>
      </div>
      <div className="comment__wrap">
          {content}
      </div>
    </div>
  )
}
export default Comment

