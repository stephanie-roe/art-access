import { Component } from 'react';
import '../styles/App.css';
import NavBar from "./NavBar";
import WorksContainer from "./WorksContainer"

class App extends Component {
  constructor() {
    super();
    this.state = {featuredWork: {}, gallery: []}
  }

  componentDidMount() {
    // this.getIDs().then(data => this.setState({ids: data.objectIDs}))
    // const id = this.getFeaturedID()
    // this.getFeaturedWork(id)
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

  // getIDs = async () => {
  //   const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=paintings&isHighlight=true");
  //   return await response.json();
  // }

  // getFeaturedID = () => {
  //   const index = Math.floor(Math.random() * this.state.ids.length)
  //   const id = this.state.ids[index]
  //   return id
  // }

  // getFeaturedWork = async (id) => {
  //   const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
  //   const data = await response.json();
  //   return this.setState({ featuredWork: data });
  // }

  render() {
    const titles = this.state.gallery.map(work => {
      return (<p>{work.title}</p>)
    })
    return (
      <div>
        <NavBar/>
        <WorksContainer gallery={this.state.gallery}/>
    
      </div>
    )
  }
}


export default App;
// {titles}