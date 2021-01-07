import React from 'react';
import Spinner from './Spinner';
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
    if(data.length == 0){
        data.push(<h1>Loading data...</h1>);
        data.push(<i className="spinner loading massive icon"></i>);
    }

    console.log(props.weatherData);
    return(
        <div class="weatherData">
          {data}
        </div>
    );
}
export default WeatherData;