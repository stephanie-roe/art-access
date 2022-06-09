// import "../styles/CollectionConatiner.css";
import CollectionCard from "./CollectionCard";

const CollectionContainer = ({collection}) => {
    const cards = collection.map(work => {
        return (<CollectionCard details={work}/>)
    })
    // iterate over collection saved in state to return an array of JSX elements 
    // return those in a div 
    return (
        <div className="collection-container">
            { cards }
        </div>
    )
}

export default CollectionContainer;