import React, { Component } from 'react';

const google = window.google;
console.log(window);
export default class GoogleMap extends Component {
	componentDidMount() {
    console.log(this.props);
    console.log(this.refs.map);
    var propLatlng = new google.maps.LatLng(this.props.lat, this.props.lon);
     new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: propLatlng
    });
  }
	render() {
		// this.refs.map gives a reference to the ref created below
		return <div ref={`map`} />;
	}
}