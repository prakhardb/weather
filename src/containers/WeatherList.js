import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/Googlemap';
class WeatherList extends Component {
	 	renderWeather(cityData) {
			console.log(cityData);
			const name = cityData.city.name;
			const temps = cityData
				.list
				.map(weather => weather.main.temp)
			const pressures = cityData
				.list
				.map(pressure => pressure.main.pressure)
			const humidities = cityData
				.list
				.map(humidity => humidity.main.humidity)
			const { lon, lat } = cityData.city.coord;
	
			return (
				<tr key={name}>
					<td><GoogleMap lon={lon} lat={lat}/></td>
					<td><Chart data={temps} color="orange" units="K"/></td>
					<td><Chart data={pressures} color="blue" units="hPa"/></td>
					<td><Chart data={humidities} color="green" units="%"/></td>
				</tr>
			)
		}
	render() {
		return (
			<table className={`table table-hover`}>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}
// function mapStateToProps(state) {
// 	// to match the state in combineReducers
// 	return { weather: state.weather };
// }

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);