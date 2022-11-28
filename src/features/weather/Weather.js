import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWeather, getWeather } from "./weatherSlice";


export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const [isActive, setIsActive] = useState(false); // to fold out the weatherprediction (accordion-menu)
    //console.log(weather);
   
    useEffect(() => {  
        dispatch(getWeather());
        }, [dispatch]
    );

    return(
        <div className="weather segment" onClick={() => setIsActive(!isActive)}>
            <h3>{weather.location}</h3> 
            <div className= "row">
                <div className="column">                    
                    <img src={weather.img} alt="weather-icon" width="70" height="70"></img>
                </div>
                <div>
                    <p>temp.: {weather.temp}℃ </p>
                    <p> neerslag: {weather.neerslag}%</p>
                    <p>windkracht {weather.winds}, {weather.windr}</p>
                    
                </div>  
            </div>

            {isActive &&
            <div>
                <p>nu: {weather.samenv}</p>
                <p>straks: {weather.verw}</p>
            </div>
            }

        </div>
    )
}