import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import './SearchBox.css';


export default function SeachBox({updateInfo}){
    let[city,setCity]=useState("");
    let[err,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="52f581a85c48b9617675d897fb521bf0";
    


    const getWeatherInfo= async ()=>{
        try{
                 let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };

        
   
        console.log(result);
        return result;
    }catch(err){
        throw err;
            

        }


    };
    

    let handleChange =(evt)=>{
        setCity(evt.target.value);

    };
    let handleSubmit = async (evt)=>{
        try{
            evt.preventDefault();
       console.log(city);
       setCity("");
       let newInfo = await getWeatherInfo(city);    
       updateInfo(newInfo);

        }catch(err){
            setError(true);

        }
       



    };

    return(
    <div className="SeachBox">
        <form onSubmit={handleSubmit} action="">
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required value={city}
            onChange={handleChange}
            /><br></br><br></br>
             <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Search
      </Button>
      {err && <p style={{color:"red"}}>No such place in our API!</p> }

        </form>
        </div>
        );

}