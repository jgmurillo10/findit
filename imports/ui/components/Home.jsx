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
      query :''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({query: document.getElementById("query").value})

  }
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <div style={ sectionStyle }>
          <div className="container">
          <div className="banner-info">
            <h3>It is a long established fact that a reader will be distracted by
            the readable </h3>
            <div className="search-form">
              <form onSubmit={this.handleSubmit}>
                <input id="query" type="text" placeholder="Search..." name="Search..."/>
                <input type="submit" value=" " />
              </form>
            </div>
          </div>
          </div>
        </div>
        <Results query={this.state.query} />


      </div>
    )
  }
}

export default Home;
