import React, {Component} from 'react';
import {Link} from 'react-router';
import Results from './results/Results.jsx';

// import Background from 'overview.png';
var sectionStyle = {
  width: "100%",
  backgroundImage: "url(video.gif)"
};
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      query :'',
      categoria:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({query: document.getElementById("query").value})
  }
  handleChange(event) {
    event.preventDefault();
   //
  //  this.setState({categoria: event.target.value});
  //  console.log(this.state.categoria);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state.categoria);
 }

  render() {
    return (
      <div>
        <div style={ sectionStyle }>
          <div className="container">
          <div className="banner-info">
            <h3>Try it! Find anything you want at the cheapest price </h3>
            <div>
               {/* <select value={this.state.categoria} onChange={this.handleChange}>
                  <option defaultValue>Categorias</option>
                  <option value="pcmcat209400050001">Celulares</option>
                  <option value="abcat0501000">Desktops</option>
                  <option value="abcat0401000">Camaras</option>
                  <option value="abcat0502000">Portátiles</option>
               </select> */}
            </div>
            <div className="search-form">
              <form onSubmit={this.handleSubmit}>
                <select name='categoria' value={this.state.categoria} onChange={this.handleChange}>
                   <option defaultValue>Categories</option>
                   <option value="pcmcat209400050001">Smartphones</option>
                   <option value="abcat0501000">Desktops</option>
                   <option value="abcat0401000">Cameras</option>
                   <option value="abcat0502000">Laptops</option>
                </select>
                <input name='query' id="query" type="text" placeholder="Search..." name="Search..."/>
                <input type="submit" value=" " />
              </form>
            </div>
          </div>
          </div>
        </div>
        <Results query={this.state.query} categoria={this.state.categoria}/>


      </div>
    )
  }
}

export default Home;
