import "../styles/Featured.css";
// import {Link} from "react-router-dom";


const Featured = ({id, gallery, addToCollection}) => {
    const details = gallery.find(work => {
        return work.objectID === id
    })
    return (
        <div className="featured-work">
            <div className="details">
                <p>{details.title}</p>
                {details.artistDisplayName === "Unknown" ? <p>{details.artistSuffix}</p> : <p>{details.artistDisplayName}</p>}
                <p>{details.medium}</p>
                <p>{details.dimensions}</p>
                <p>{details.objectDate}</p>
            </div>
            <img src={details.primaryImage} alt={details.title}/>
            <button className="add-to-collection-btn" onClick={() => addToCollection(id)}>add to collection</button>
        </div>
    )
}

export default Featured;