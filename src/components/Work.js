import "../styles/Work.css";
import {Link} from "react-router-dom";

// this would just be the image itself 

const Work = ({src, title, id}) => {
    if (src) {
        return (
            <Link to={`/${id}`}>
            <div className="work">
                <img src={src} alt={title}/>
            </div>
            </Link>
        )
    } 

}

export default Work;