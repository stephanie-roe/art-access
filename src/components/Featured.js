import "../styles/Featured.css";
import {Component} from "react";
import {Link} from "react-router-dom";


// const Featured = ({id, gallery, addToCollection, details}) => {
//    return (
//         <div className="featured-work">
//             <div className="details">
//                 <p>{details.title}</p>
//                 {details.artistDisplayName === "Unknown" ? <p>{details.artistSuffix}</p> : <p>{details.artistDisplayName}</p>}
//                 <p>{details.medium}</p>
//                 <p>{details.dimensions}</p>
//                 <p>{details.objectDate}</p>
//             </div>
//             <img src={details.primaryImage} alt={details.title}/>
//             <button className="add-to-collection-btn" onClick={() => addToCollection(id)}>add to collection</button>
//         </div>
//     )
// }

class Featured extends Component {
    constructor({id, gallery}) {
        super();
        this.state = {details: {}, gallery: gallery, id: id, error: false}
    }

    componentDidMount() {
    //    const details  = this.state.gallery.find(work => {
    //      return parseInt(work.objectID) === parseInt(this.state.id)
    //    })
    //    this.setState({details: details})
       fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.id}`)
       .then(response => {
           if (response.ok) {
               return response.json()
           } else {
               throw Error(response.statusText)
           }
       })
       .then(data => this.setState({details: data}))
       .catch(error => this.setState({error: true}))
    }


    render() {
        if (this.state.error) {
            return <h2>Apologies, that page doesn't exist. Return home and try again.</h2>
        } else {
        return (<div className="featured-parent-container">
                    <div className="featured-work">
                        <div className="details-and-btn-container">
                            <div className="details">
                                <p className="title" >{this.state.details.title}</p>
                                {this.state.details.artistDisplayName === "Unknown" ? <p>{this.state.details.artistSuffix}</p> : <p>{this.state.details.artistDisplayName}</p>}
                                <p>{this.state.details.medium}</p>
                                <p>{this.state.details.dimensions}</p>
                                <p>{this.state.details.objectDate}</p>
                            </div>
                            <button className="add-to-collection-btn" onClick={() => this.props.addToCollection(this.state.id)}>add to collection</button>
                        </div>
                        <img className="featured-image" src={this.state.details.primaryImage} alt={this.state.details.title}/>
                    </div>
                </div>)
        }
    }
}



export default Featured;

//I should probably add some sort of confirmation that the user has added the item to their collection successfully. 

// A possible workaround would be to make this a class component and refetch the data on pageload to ensure the interpolated data is referencable.


