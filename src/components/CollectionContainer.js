import "../styles/CollectionContainer.css";
import CollectionCard from "./CollectionCard";

const CollectionContainer = ({collection}) => {
    const cards = collection.map(work => {
        return (<CollectionCard details={work}/>)
    })
    // iterate over collection saved in state to return an array of JSX elements 
    // return those in a div 
    return (
        <div className="collection-parent-container">
            <div className="heading-container">
                <h2>Collection</h2>
            </div>
            <div className="collection-container">
                { cards }
            </div>
        </div>
    )
}

export default CollectionContainer;