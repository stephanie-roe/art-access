import "../styles/Featured.css";
import { Component } from "react";
import PropTypes from 'prop-types';

class Featured extends Component {
    constructor({id, gallery}) {
        super();
        this.state = {details: {}, gallery: gallery, id: id, error: false}
    }

    componentDidMount() {
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

Featured.propTypes = {
    id: PropTypes.any,
    gallery: PropTypes.array, 
    addToCollection: PropTypes.func
  };
