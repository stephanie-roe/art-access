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

  // it might be a good idea to add the clicked on thumbnail to the state of the app as well. To do this, I could build out a method that updates state and pass it down to the work and add an onclick. 

  // IDEA(nice to have)- add a spotlight object to the state and that will randomly rotate to feature a work at the top of the page before the user scrolls to browse all of the remaining works of art 

  // IDEA(nice to have)- show a message on the top of the screen when the user is seeing results of a search that says "results for [query]"

    // IDEA(nice to have)- it could be cool to allow the user to search by multiple things (artist, region, materials, tags, etc.)




  componentDidMount() {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true")
    .then(response =>{
      if (response.ok) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    })
    .then(data => {
      data.objectIDs.forEach(id => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else throw Error(response.statusText)
        })
        .then(data => {
          if (!this.state.gallery.includes(data)) {
            this.setState({gallery: [...this.state.gallery, data]})
          }
        })
      })
    })
    .catch(error => console.log("error"))


    // return this.getData()
  }


// getData = async () => {
//   //  const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true");
//   //   const data = await response.json();
//   //   data.objectIDs.forEach(id => {
//   //    this.getGalleryObject(id)
//   //   });
//     try {
//       const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true");
//       const data = await response.json();
//       console.log(data)
//       data.objectIDs.forEach(id => {
//        this.getGalleryObject(id)
//       });
//     }  catch(error) {
//       this.setState({error: true})
//     }
//  }

  // getGalleryObject = async (id) => {
  //   try {
  //     const response = await  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
  //     const data = await response.json()
  //     console.log(data)
  //   // if (!this.state.gallery.includes(data)) {
  //     return this.setState({ gallery: [...this.state.gallery,data] });
  //   // }
  //   } catch (error) {
  //     this.setState({error: true})
  //   }
  //   // const response = await  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
  //   // const data = await response.json()
  //     // if (!this.state.gallery.includes(data)) {
  //     //   return this.setState({ gallery: [...this.state.gallery,data] });
  //     // }
  // }

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
                return <h2>No results, please try again.</h2>
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

//add in else if for search bar to error handle it 
