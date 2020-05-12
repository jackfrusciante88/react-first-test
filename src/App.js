import React, {Fragment, Component} from'react';
import Cardlist from './Cardlist';
import SearchBox from'./SearchBox';
import {robots} from './robots';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});   
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <Fragment >
        <div className='tc'>
          <h1 className='f2'>ROBOT_FRIEND</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Cardlist robots={filteredRobots} /> 
        </div>
      </Fragment>
    );
  }
}

export default App