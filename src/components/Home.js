import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from "react-router";

class Home extends Component {  

	handleSubmit(event){
		event.preventDefault();
		let teacherName = event.target.elements[0].value;
		let teacherTopic= event.target.elements[1].value;
		let path = `featured/${teacherTopic}/${teacherName}`;

		browserHistory.push(path);
	}

  render() {
    return (
      <div className="main-content home">
        <h2>Welcome Home!</h2>
        <hr />
        <h3>Featured Teachers</h3>
        <form onSubmit={this.handleSubmit}>
        	<input type="text" placeholder="Name"/>
        	<input type="text" placeholder="Topic"/>
        	<button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;