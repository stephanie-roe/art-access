import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {ids: [764095, 764091, 768547, 471904, 469887, 437490, 485934, 449457, 436966, 437397,   435600, 544740, 435896, 459243, 199674, 544453, 267019, 437261, 679844, 437609, 459211, 436658, 459027, 459028, 435809, 206989, 198715, 488694, 451725, 749639, 331619, 437153, 544320, 446285, 437654, 317793, 352328, 469960, 450409, 437056, 438821, 444607, 436101, 337497, 447000, 453243, 310870, 824771, 313256, 451268, 312180, 452102, 626692, 485416, 451909, 440723, 435817, 435702, 309959, 437299, 436244, 436516, 436896, 436944, 435621, 436105, 489994, 488221, 437329, 436838, 437926, 470304, 435844], featuredWork: {}}
  }

  componentDidMount() {
    this.getIDs().then(data => this.setState({ids: data.objectIDs}))
    const id = this.getFeaturedID()
    this.getFeaturedWork(id)
  }

  getIDs = async () => {
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=paintings&isHighlight=true");
    return await response.json();
  }

  getFeaturedID = () => {
    const index = Math.floor(Math.random() * this.state.ids.length)
    const id = this.state.ids[index]
    return id
  }

  getFeaturedWork = async (id) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
    const data = await response.json();
    return this.setState({ featuredWork: data });
  }

  render() {
    return <h1>Howdy</h1>
  }
}


export default App;
