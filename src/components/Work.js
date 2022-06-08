import "../styles/Work.css";
// this would just be the image itself 

const Work = ({src, title}) => {
    if (src) {
        return (
            <div className="work">
                <img src={src} alt={title}/>
            </div>
        )
    } 

}

export default Work;