import { useState } from "react";
import "./weather.css";
import { DisplayWeather } from "./DisplayWeather";

export const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({ city: "", country: "" });
  const APIKEY = "e6d2f6f7a2cc8b41b0ad47d1ede36fa9";

  const fetchData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
      });
  };
  console.log(weather);
  const handleChange = (e) => {
    let city;
    let country;
    if (e.target.name === "city") {
      city = e.target.value;
      setForm({ ...form, city });
    } else if (e.target.name === "country") {
      country = e.target.value;
      setForm({ ...form, country });
    }
  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => fetchData(e)} className="getWeather">
          Submit
        </button>
      </form>
      {weather.length !== 0 ? (
        <>
          <DisplayWeather data={weather} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
