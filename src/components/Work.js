import "../styles/Work.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Work = ({src, title, id}) => {
    if (src) {
        return (
            <Link to={`/${id}`}>
            <div className="work" id={id}>
                <img className="thumbnail" src={src} alt={title}/>
            </div>
            </Link>
        )
    } 
}

export default Work;

Work.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.any
  };