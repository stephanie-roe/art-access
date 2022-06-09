import "../styles/WorksContainer.css";
import Work from "./Work";
// this is the cotainer that holds all of the work thumbnails

const WorksContainer = ({gallery, findFeaturedWork}) => {
    const works = gallery.map(work => {
        return <Work src={work.primaryImage} title={work.title} id={work.objectID} key={gallery.indexOf(work)} findFeaturedWork={findFeaturedWork}/>
    })
    return (
        <div className="works-container">
            {works}
        </div>
    )
}

export default WorksContainer