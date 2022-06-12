import "../styles/CollectionCard.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CollectionCard = ({details}) => {
    return (
        <Link to={`/${details.objectID}`}>
            <div className="collection-card">
                <div className="card-details">
                    <p className="title">{details.title}</p>
                    {details.artistDisplayName === "Unknown" ? <p>{details.artistSuffix}</p> : <p>{details.artistDisplayName}</p>}
                </div>
                <img className="collection-card-image" src={details.primaryImage} alt={details.title}/>
            </div>
        </Link>
  
    )
}

export default CollectionCard;

CollectionCard.propTypes = {
    details: PropTypes.object
  };