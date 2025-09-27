import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


import './InfoBox.css';





export default function InfoBox({info}){
    const INI_URL="https://images.unsplash.com/photo-1558975934-3852951edd25?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3VkcyUyMHdlYXRoZXIlMjB3aXRoJTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   
    return (<div className="InfoBox">
        
        <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        {info.humidity>80 
            ? RAIN_URL 
            :info.temp>15 
            ? HOT_URL
            :COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        {info.humidity>80 
            ? <ThunderstormIcon/>
            :info.temp>15 
            ?<SunnyIcon/> 
            :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
            <p>
                Temperature = {info.temp}&deg;C

            </p>
                
            
            <p>
                Humidity = {info.humidity}
            </p>
            <p>
                MinTemp = {info.tempMin}&deg;C
            </p>
           
           
            <p>
                MaxTemp = {info.tempMax}&deg;C
            </p>
            <p>The weather can be dscribe as <i>{info.weather} </i>and feels like {info.feelsLike}&deg;C
            </p>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>

    </div>)
}