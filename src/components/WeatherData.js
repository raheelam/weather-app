import React from 'react';
import './WeatherData.css'

const WeatherData = (props) => {
    let data = [];
    for(let key in props.weatherData){
        if(key === "icon"){
         data.push( <img  alt="icon" src={props.weatherData[key]}/>);
        }else{
         data.push(<p>{key}: {props.weatherData[key]}</p>);
        }
       
    } 
    console.log(props.weatherData);
    return(
        <div class="weatherData">
          {data}
        </div>
    );
}
export default WeatherData;