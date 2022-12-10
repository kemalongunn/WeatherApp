import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../contexts/cityContext";
import { weatherStateList } from "../../public/WeatherTranslations";

function info() {
  const { city } = useContext(CityContext);

  const axios = require("axios");

  const [weatherInfo, setWeatherInfo] = useState("");

  const [tempInfo, setTempInfo] = useState({});

  const [cityName, setCityName] = useState("")

  const [weatherImageId, setWeatherImageId] = useState("")

  useEffect(() => {
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=6468b5c1e89fd233d9e753be147a0060`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6468b5c1e89fd233d9e753be147a0060`;

    axios.get(url).then((response) => {
      console.log("data : ", response.data);

      let data = response.data;

      let dataCity = data.name;

      let weather = data.weather[0];

      let main = data.main;

      let temp = kelvinToCelcius(main.temp);

      let tempMax = kelvinToCelcius(main.temp_max);

      let tempMin = kelvinToCelcius(main.temp_min);

      setTempInfo({
        temp: temp,
        max: tempMax,
        min: tempMin,
      });

      let id = weather.id;

      let descriptionId = id - 800;

      let description = weatherStateList[descriptionId];

      setWeatherInfo(description);

      setWeatherImageId(descriptionId);

      setCityName(dataCity)

    });
  }, []);

  const kelvinToCelcius = (kelvin) => {
    let celciusValue = kelvin - 273.15;

    return celciusValue.toFixed(1);
  };

  return(
    <div className="flex justify-center flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-300 w-screen  h-screen">
       
        {/* Card */}
        <div className="flex justify-evenly items-center bg-pageBackground w-6/12 h-1/3 rounded-md  ">
            
            {/* image && city */}
            <div className="flex flex-col justify-center items-center font-bold text-3xl">

                 {/* weather state */}
                 <div>
                    {weatherInfo}
                </div>

                {/* image */}
                <div>
                    <img className="w-48" src={`/icons/${weatherImageId}.png`}/>
                </div>

            </div>

            {/* City && temp info */}
            <div className="flex flex-col w-48 items-center">

                {/* city */}
                <div className="mb-10 font-bold text-2xl	">
                    {cityName}
                </div>  

                {/* temp   */}
                <div className="mb-3  flex justify-between w-full items-center">
                  <div className="text-m">
                    <h1>Sıcaklık: </h1>
                  </div>
                  <div className="ml-3 text-xl font-bold">
                    {tempInfo.temp}°C
                  </div>
                </div>

                {/* temp max */}
                <div className="mb-3  flex justify-between w-full items-center">
                  <div className="text-m">
                    <h1>Max Sıcaklık: </h1>
                  </div>
                  <div className="ml-3 text-xl font-bold">
                    {tempInfo.max}°C
                  </div>
                </div>

                {/* tem min */}
                <div className="mb-3  flex justify-between w-full items-center">
                  <div className="text-m">
                    <h1>Min Sıcaklık: </h1>
                  </div>
                  <div className="ml-3 text-xl font-bold">
                    {tempInfo.min}°C
                  </div>
                </div>

            </div>

        </div>

        <div className="mt-10">
            <Link className="bg-blue-300 w-28 text-white border-solid bg-backButon w-40 h-8 rounded	flex items-center justify-center" href="/">
                Back
            </Link> 
       </div>

    </div>

    
  );
}

export default info;
