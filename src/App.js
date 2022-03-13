import axios from "axios";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import React, { useState } from "react";



const API_KEY="b3e51f9fbe1819ed81bf46391ffaa9c4";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  


`;

const AppLabel = styled.span`
  
  color: #0eb96b;
  margin: 20px auto;
  font-size: 25px;
  font-family: Teko; 
  font-weight: bold;




`;

const Back = styled.img`
height:20px;
weight:20px;
opacity: 0.5;
cursor: pointer;
margin-top:28px;
`



function App() {
  const [city, updateCity] =  useState();
  const [weather, updateWeather] = useState();

const goBack=() =>{
  updateWeather(null) 
}
  
  const fetchWeather=async(e)=>{
    e.preventDefault();
  const response = 
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  updateWeather(response.data);
};

  return (
    <Container>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"90%", textAlign:"center"}}>
      {weather?
        <Back src="/icons/left.png" onClick={goBack}/>:
        null}
       
        <AppLabel>WEATHER APP</AppLabel>
      </div>

       {weather? 
       
      <WeatherComponent weather={weather}/> :
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
       }
      
      
    </Container>
  );
}

export default App;
