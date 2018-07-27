import React, { Component } from 'react';

import SearchBar from "./containers/Search_bar";
import WeatherList from "./containers/WeatherList";

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}