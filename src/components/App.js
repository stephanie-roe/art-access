import { Component } from 'react';
import '../styles/App.css';
import NavBar from "./NavBar";
import WorksContainer from "./WorksContainer";
import {Route, Switch} from "react-router-dom"; 
import Featured from "./Featured";
import CollectionContainer from "./CollectionContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {featuredWork: {}, 
                  gallery: [], 
                  myCollection: [],
                  query: "",
                  searchResults: [],
                  error: false }
  }

  componentDidMount() {
   this.getData()
  }

getData = async () => {
    try {
      const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true");
      const data = await response.json();
      data.objectIDs.forEach(id => {
       this.getGalleryObject(id)
      });
    }  catch(error) {
      this.setState({error: true})
    }
 }

  getGalleryObject = (id) => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    .then(response => response.json())
    .then(data =>  this.setState({ gallery: [...this.state.gallery, data] }))
  }

  addToCollection = (id) => {
    const addition = this.state.gallery.find(work => work.objectID === id)
    if (!this.state.myCollection.includes(addition)) {
      this.setState({myCollection: [...this.state.myCollection, addition]})
    }
  }

  returnSearch = (event) => {
    console.log("1", this.state.gallery[0])
    console.log("2", this.state.gallery[1])
    console.log("3", this.state.gallery[2])
    this.setState( {query: event.target.value, searchResults: this.state.gallery });
    const result = this.state.gallery.filter(work => {
      return work.artistDisplayName.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({ searchResults: result})
  }

  clearSearch = () => {
    this.setState({ query: "", searchResults: [] })
  }

  render() {
    if (this.state.error) {
      return <h1>Oh no!</h1>
    } else {
      return (
        <div>
          <NavBar returnSearch={this.returnSearch} query={this.state.query} clearSearch={this.clearSearch}/>
          <Switch>
            <Route exact path="/" render={ () => {
              if (!this.state.searchResults.length && !this.state.query) {
                return ( <WorksContainer gallery={this.state.gallery}/> )
              } else if (!this.state.searchResults.length && this.state.query ) {
                return <h2 className="search-error">No results, please try again.</h2>
              }else {
                return ( <WorksContainer gallery={this.state.searchResults}/> )
              }
            }} />
            <Route exact path="/my-collection" render={() => <CollectionContainer collection={this.state.myCollection}/>}/>
            <Route exact path="/:id" render={({ match }) => <Featured id={parseInt(match.params.id)} gallery={this.state.gallery} addToCollection={this.addToCollection} />}/>
          </Switch>
        </div>
      )
    }

  }
}


export default App;

