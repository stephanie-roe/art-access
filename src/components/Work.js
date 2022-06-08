import "../styles/Work.css";
// this would just be the image itself 

const Work = ({details}) => {
    return (
        <div className="work">
            <p>{details.title}</p>
            <img src={details.primaryImage} alt={details.title}/>
        </div>
    )
}

export default Work;