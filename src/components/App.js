import React from 'react';
import Season from './Season';

class App extends React.Component{
    constructor(){
        super();
        this.state={lat: null, long: null, error: '', weatherData: {}};
    }

        getWeatherData = (lat, long) =>{
        let req = new XMLHttpsRequest();
        let weather = {};
            const newLocal = process.env.REACT_APP_WEATHER_API_KEY;
        req.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${newLocal}`);
         req.send();
         req.onload = () => {
              const data =  JSON.parse(req.responseText);
            
             console.log(data);

             console.log(`${data.clouds.all} ${data.weather[0].icon} ${data.weather[0].description} ${data.sys.country} ${data.name} feela like: ${data.main.feels_like} ${data.main.temp}degrees ${data.main.humidity} ${data.main.temp_min} ${data.main.temp_max}`);
             weather = {
                 icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                 country: data.sys.country,
                 city: data.name,
                 clouds: data.clouds.all,
                 description: data.weather[0].description,
                 feelsLike: data.main.feels_like,
                 temperature: data.main.temp + ' degree celcius',
                 humidity: data.main.humidity ,
                 maxTemp: data.main.temp_max + ' degrees celcius',
                 minTemp: data.main.temp_min + ' degrees celcius',

             };
             this.setState({weatherData: weather});
            }
            

            
    }

        componentDidMount= ()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState(
                    {
                    lat: position.coords.latitude, 
                    long:position.coords.longitude, 
                   }
                   
                );
                const {lat, long} = this.state;
                console.log(lat, long);
                this.getWeatherData(lat, long);
                
        
    }
               
            ,
            (error)=>this.setState({error: error.message })
            )
    }

    render(){
        return(
            <Season error={this.state.error} wData={this.state.weatherData} lat={this.state.lat} />
        );
    }
}
export default App;