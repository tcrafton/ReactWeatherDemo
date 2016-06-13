import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){
      const name = cityData.city.name;
      const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp * 9/5) - 459.67);  //convert from Kelvin
      const pressures = cityData.list.map(pressure => pressure.main.pressure);
      const humidities = cityData.list.map(humidity => humidity.main.humidity);
      const winds = _.map(cityData.list.map(windSpeed => windSpeed.wind.speed), (speed) => (speed / .44704)); // convert from meters per sec

      return (
        <tr key={name}>
          <td>{name}</td>
          <td><Chart data={temps} color="orange" units="F" /></td>
          <td><Chart data={pressures} color="green" units="hPa" /></td>
          <td><Chart data={humidities} color="blue" units="%" /></td>
          <td><Chart data={winds} color="blue" units="mph" /></td>
        </tr>
      );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
            <th>Wind (mph)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
