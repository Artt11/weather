import { TbTemperatureCelsius } from "react-icons/tb";

export const DisplayWeather = ({ data }) => {
  function millisecondsToTime(milliseconds) {
    const date = new Date(milliseconds * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours > 12 ? hours - 12 : hours}:${minutes}:${seconds},${
      hours > 12 ? "PM" : "AM"
    }`;
  }

  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="header">
      <div className="container">
        <div className="main">
          <div className="placeName">
            <p>{`${data.name}, ${data.sys.country}. Weather`}</p>
          </div>
          <div className="time">{millisecondsToTime(data.dt)};</div>
          <div className="temp-main">
            <div className="temp">
              {Math.floor(data.main.temp - 273)}
              <div className="temp-icon">
                <TbTemperatureCelsius />
              </div>
            </div>
            <div className="icon">
              <img src={iconUrl} alt="icon" />
              <div className="icon-description">{data.weather[0].main}</div>
            </div>
          </div>
          <div className="description">{data.weather[0].description}</div>
        </div>
      </div>

      <div className="footer">
        <div className="left-data">
          <div className="High/Low">
            <p>
              High/Low
              <span>
                {Math.floor(data.main.temp_max - 273)}/
                {Math.floor(data.main.temp_max - 273)}
              </span>
            </p>
          </div>
          <hr />
          <div className="humidity">
            <p>
              Humidity <span>{data.main.humidity}%</span>
            </p>
          </div>
          <hr />
          <div className="pressure">
            <p>
              Pressure <span> {data.main.pressure}hPa</span>
            </p>
          </div>
          <hr />
          <div className="visibility">
            <p>
              Visibility <span>{data.visibility / 1000}Km </span>
            </p>
          </div>
          <hr />
        </div>
        <div className="right-data">
          <div className="wind">
            <p>
              Wind <span>{Math.floor(data.wind.speed)}km/hr </span>
            </p>
          </div>
          <hr />
          <div className="degree">
            Wind Direction <span>{data.wind.deg} deg</span>
          </div>
          <hr />
          <div className="sunrise">
            <p>
              Sunrise <span>{millisecondsToTime(data.sys.sunrise)} </span>
            </p>
          </div>
          <hr />
          <div className="sunset">
            <p>
              Sunset <span>{millisecondsToTime(data.sys.sunset)}</span>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
