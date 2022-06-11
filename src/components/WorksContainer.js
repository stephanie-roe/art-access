import "../styles/WorksContainer.css";
import Work from "./Work";
import PropTypes from 'prop-types';

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

WorksContainer.propTypes = {
    gallery: PropTypes.array, 
    findFeaturedWork: PropTypes.func
  };