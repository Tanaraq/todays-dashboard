import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWeather, getWeather } from "./weatherSlice";


export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    console.log(weather);

    useEffect(() => {  
        dispatch(getWeather());
        }, [dispatch]
    );

    return(
        <div className="weather segment">
            <h3>{weather.location}</h3>
            <img src="./weather-icons/bewolkt.png" alt={weather.img} width="30" height="30"></img>
            <p>{weather.temp}℃ | neerslag: {weather.neerslag}%</p>
            <p>windkracht {weather.winds}, {weather.windr}</p>
            <p>nu: {weather.samenv}</p>
            <p>straks: {weather.verw}</p>
        </div>
    )
}