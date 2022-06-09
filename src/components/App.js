import { Component } from 'react';
import '../styles/App.css';
import NavBar from "./NavBar";
import WorksContainer from "./WorksContainer";
import {Route} from "react-router-dom"; 
import Featured from "./Featured"

class App extends Component {
  constructor() {
    super();
    this.state = {featuredWork: {}, gallery: []}
  }

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

  render() {
    const titles = this.state.gallery.map(work => {
      return (<p>{work.title}</p>)
    })
    return (
      <div>
        <NavBar/>
        <Route exact path="/">
          <WorksContainer gallery={this.state.gallery}/>
        </Route>
        <Route path="/:id" render={({ match }) => <Featured id={parseInt(match.params.id)} gallery={this.state.gallery}/>}/>
          
      
      </div>
    )
  }
}


export default App;
