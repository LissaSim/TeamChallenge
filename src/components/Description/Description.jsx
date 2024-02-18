
import './Description.scss';
const Description = (props) => {
    const {title, content} = props;
  return (
    <section className="description line">
      <h2 className="title-block">{title}</h2>
      <div className="description__content" dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </section>
  )
}
export default Description;