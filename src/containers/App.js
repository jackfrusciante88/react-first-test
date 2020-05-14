import React, { Fragment, Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
const { robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !robots.length ?
      <h2>Loading</h2> :
      (
        <Fragment>
          <div className="tc">
            <h1 className="f2">ROBOT_FRIEND</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <Cardlist robots={filteredRobots} />
            </Scroll>
          </div>
        </Fragment>
      );
  }
}

export default App;
