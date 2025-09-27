import InfoBox from './InfoBox.jsx';
import SeachBox from './SearchBox.jsx';
import { useState } from 'react';


export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
         city:"Mumbai",
        feelslike:35.95,
        humidity:54,
        temp:32.28,
        tempMax:32.28,
        tempMin:32.28,
        weather:" overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);

    }



    return(<div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <SeachBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>)

}