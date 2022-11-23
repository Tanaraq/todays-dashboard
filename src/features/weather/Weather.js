import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWeather, getWeather } from "./weatherSlice";


export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
   
    useEffect(() => {  
        dispatch(getWeather());
        }, [dispatch]
    );

    return(
        <div className="weather segment">
            <h3>{weather.location}</h3> 
            <div className= "row">
                <div className="column">                    
                    <img src={weather.img} alt="weather-icon" width="70" height="60"></img>
                </div>
                <div>
                    <p>temp.: {weather.temp}℃ </p>
                    <p> neerslag: {weather.neerslag}%</p>
                    <p>windkracht {weather.winds}, {weather.windr}</p>
                    
                </div>  
            </div>
            <p>nu: {weather.samenv}</p>
            <p>straks: {weather.verw}</p>
        </div>
    )
}