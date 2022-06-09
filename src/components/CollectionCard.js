import "../styles/CollectionCard.css";
import {Link} from "react-router-dom";

const CollectionCard = ({details}) => {
    return (
        <Link to={`/${details.objectID}`}>
            <div className="collection-card">
                <div className="card-details">
                    <p>{details.title}</p>
                    {details.artistDisplayName === "Unknown" ? <p>{details.artistSuffix}</p> : <p>{details.artistDisplayName}</p>}
                </div>
                <img src={details.primaryImage} alt={details.title}/>
            </div>
        </Link>
  
    )
}

export default CollectionCard;