import "../styles/WorksContainer.css";
import Work from "./Work";
// this is the cotainer that holds all of the work thumbnails

const WorksContainer = ({gallery}) => {
    const works = gallery.map(work => {
        return <Work src={work.primaryImage} title={work.title}/>
    })
    return (
        <div className="works-container">
            {works}
        </div>
    )
}

export default WorksContainer