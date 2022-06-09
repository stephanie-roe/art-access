import "../styles/Work.css";
import {Link} from "react-router-dom";

// this would just be the image itself 

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

//on click to update app here is messing up my router. 
