import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../App";
import CityComponent from "./CityComponent";

export const WeatherInfoIcons = {
    sunset: "/icons/sunset.png",
    sunrise: "/icons/sun.png",
    humidity: "/icons/drop.png",
    wind: "/icons/wind.png",
    pressure: "/icons/pressure.png",
};

const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;

`

const Condition = styled.span`
flex-direction: row;
font-size: 14px;



& span{
    font-size:28px;
    font-weight:bold;
}
`

const WeatherLogo =styled.img`
width: 110px;
height: 110px;
`

const Location =styled.span`
    font-size:28px;
    font-weight:bold;
    margin: 30px;

    

`
const Locate = styled.img`
height:20px;
weight:20px;
opacity: 0.8;
`

const Back = styled.img`
height:20px;
weight:20px;
opacity: 0.5;
cursor: pointer;
position: absolute;
bottom: 2px;
`

const WeatherInfo = styled.span`
    font-size:10px;
    font-weight:bold;
    margin: 10px;
    text-align: start;
    width:90%;
`

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
    font-weight:bold;
  }
`;

const WeatherDetails=(props)=>{
    const{name,value} = props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherInfoComponent =(props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`}
    return (<>
    <Back src="/icons/left.png" onSubmit={CityComponent}/>
    <WeatherCondition>
        <Condition>
            <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> 
            {`  | ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
        
    </WeatherCondition>
    <Location>
        <Locate src="/icons/locate.png"/>
        {`${weather?.name}, ${weather?.sys?.country}`}
    </Location>
    <WeatherInfo>Detailed Information</WeatherInfo>
    <WeatherInfoContainer>
        <WeatherDetails 
            name={isDay ? "sunset" : "sunrise"}
            value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} 
        />
        <WeatherDetails name="humidity" value={weather?.main?.humidity}/>
        <WeatherDetails name="wind" value={weather?.wind?.speed}/>
        <WeatherDetails name="pressure" value={weather?.main?.pressure}/>
    </WeatherInfoContainer>
    
    
    </>)

};

export default WeatherInfoComponent;
