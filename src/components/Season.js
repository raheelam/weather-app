import React from 'react';
import './Season.css';
import Spinner from './Spinner';

let month = (new Date()).getMonth();
let monthString = (new Date()).toLocaleString('default',{month: 'long'});


const seasons = {
    summer: {name: 'summer', icon: 'sun', message: `It's ${monthString}...Let's go to the beach ich!!!`}, 
    winter: {name: 'winter', icon: 'snowflake', message: `Brrr it's Cold in ${monthString}!!!`}
};
const {summer, winter} = seasons;

const displaySeason = (lat) =>{
    
    if(lat>0){
     return ((month>4) && (month<9))? summer : winter;
    }
    return ((month>4) && (month<9))? winter: summer;
 }

 const displayPage = (lat, error) =>{
   
    if(lat === null && error === ''){
        return (<Spinner message="Please enable your location..." />);
    }
    if(lat !== null){
     let season = displaySeason(lat);
     return (
       <div className={`${season.name} main` }>
         <i className={`${season.icon} icon massive left-icon`}></i>
         <h1>{season.message}</h1>
         <i className={`${season.icon} icon massive right-icon`}></i>
       </div>
     );
    }
    if(error !== ''){
     return (<div className="center-contents">
       <h1 style={{color: 'red'}}>Error: </h1>
       <h1>{error}</h1>
     </div>);
    }
   
          
 }

const Season = ({lat, error})=>{
    
        return (<div>{displayPage(lat, error)}</div>);

}
export default Season;