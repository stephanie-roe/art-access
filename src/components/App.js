import { Component } from 'react';
import '../styles/App.css';
import NavBar from "./NavBar";
import WorksContainer from "./WorksContainer";
import {Route} from "react-router-dom"; 
import Featured from "./Featured";
import CollectionContainer from "./CollectionContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {featuredWork: {}, gallery: [], myCollection: []}
  }

  // it might be a good idea to add the clicked on thumbnail to the state of the app as well. To do this, I could build out a method that updates state and pass it down to the work and add an onclick. 

  // IDEA(nice to have)- add a spotlight object to the state and that will randomly rotate to feature a work at the top of the page before the user scrolls to browse all of the remaining works of art 




  componentDidMount() {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true")
    .then(response => response.json())
    .then(data => {
      data.objectIDs.forEach(id => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        .then(response => response.json())
        .then(data => this.setState({gallery: [...this.state.gallery, data]}))
      })
    })
  }

  addToCollection = (id) => {
    const addition = this.state.gallery.find(work => work.objectID === id)
    this.setState({myCollection: [...this.state.myCollection, addition]})
  }

  // findFeaturedWork = (e) => {
  //   e.preventDefault()
  //   const details = this.state.gallery.find(work => {
  //     console.log("WORK ID", work.objectID)

  //     return parseInt(work.objectID) === parseInt(e.target.id)
  //   })
  //   this.setState({featuredWork: details})
  // }


  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path="/">
          <WorksContainer gallery={this.state.gallery}/>
        </Route>
        <Route path="/:id" render={({ match }) => <Featured id={parseInt(match.params.id)} gallery={this.state.gallery} addToCollection={this.addToCollection} />}/>
        <Route path="/my-collection" render={() => <CollectionContainer />}/>
      
      </div>
    )
  }
}


export default App;
