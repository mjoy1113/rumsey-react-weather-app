import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Friday 4:40",
    temperature: "55",
    description: "Cloudy",
    wind: "10",
    humidity: "80",
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: {weatherData.date}
                <span></span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.img}
                  alt={weatherData.description}
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <strong></strong>
                  <span className="units">{weatherData.temperature}°F </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: {weatherData.humidity}%<span></span>
                </li>
                <li>
                  Wind: {weatherData.wind}
                  <span></span>km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Thurs</div>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="sun with clouds"
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">18°</span>{" "}
                  |<span className="weather-forecast-temperature-min">12°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coded-by">
          <small>-coded by morgan rumsey-</small>
          <div>
            <a href="https://github.com/mjoy1113/rumsey-react-weather-app.git">
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
