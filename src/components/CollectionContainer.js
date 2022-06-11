import "../styles/CollectionContainer.css";
import CollectionCard from "./CollectionCard";

const CollectionContainer = ({collection}) => {
    const cards = collection.map(work => {
        return (<CollectionCard details={work} key={work.objectID}/>)
    })


    return (
        <div className="collection-parent-container">
            <div className="heading-container">
                <h2>Collection</h2>
            </div>
            {!collection.length ? <h3>No items in your collection, return to home to add.</h3> : 
             <div className="collection-container">
                { cards }
            </div>}  
        </div>
    )
    
}

export default CollectionContainer;