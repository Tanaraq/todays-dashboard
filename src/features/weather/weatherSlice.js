import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//exaple APIcall WeerLive (= knmi):
//http://weerlive.nl/api/json-data-10min.php?key=64d855e6ee&locatie=Amsterdam 

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async() => {    
    const locatie = "Breda";
    const data = await fetch(`http://weerlive.nl/api/json-data-10min.php?key=64d855e6ee&locatie=${locatie}`);
    const json = await data.json();
    console.log(json);
    return json;
  }  
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        currentWeather: {},
        isLoading: false,
        hasError: false
    },
    extraReducers:(builder) => {
        builder
            .addCase(getWeather.pending, (state) =>{
                state.isLoading = true;
                state.hasError = false; 
            })
            .addCase(getWeather.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.hasError = false; 
                state.currentWeather = {
                    location: action.payload.liveweer[0].plaats,
                    temp: action.payload.liveweer[0].temp,
                    neerslag: action.payload.liveweer[0].d0neerslag,
                    samenv: action.payload.liveweer[0].samenv,
                    winds: action.payload.liveweer[0].winds,
                    windr: action.payload.liveweer[0].windr,
                    verw: action.payload.liveweer[0].verw,
                    img:`weather-icons/${action.payload.liveweer[0].image}.png`
                }
            })
            .addCase(getWeather.rejected, (state) =>{
                state.isLoading = false;
                state.hasError = true; 
            })
    }
})

//selectors:
export const selectWeather = (state) => state.weather.currentWeather;
//export const isLoading = (state) => state.weather.isLoading;

export default weatherSlice.reducer;




// voorbeeld reply van APIcall:
/*
{ "liveweer": [{
    "plaats": "Breda", "temp": "8.3", "gtemp": "5.9", "samenv": "Droog na motregen", "lv": "97", "windr": "ZZW", "windrgr": "202", "windms": "4", "winds": "3", "windk": "7.8", "windkmh": "14.4", "luchtd": "994.2", "ldmmhg": "746", "dauwp": "8", "zicht": "18", "verw": "Meestal bewolkt en af en toe regen", "sup": "08:08", "sunder": "16:44", "image": "buien", "d0weer": "bewolkt", "d0tmax": "8", "d0tmin": "5", "d0windk": "4", "d0windknp": "12", "d0windms": "6", "d0windkmh": "22", "d0windr": "Z", "d0windrgr": "180", "d0neerslag": "0", "d0zon": "17", "d1weer": "regen", "d1tmax": "9", "d1tmin": "5", "d1windk": "3", "d1windknp": "8", "d1windms": "4", "d1windkmh": "15", "d1windr": "Z", "d1windrgr": "180", "d1neerslag": "90", "d1zon": "20", "d2weer": "regen", "d2tmax": "11", "d2tmin": "7", "d2windk": "3", "d2windknp": "8", "d2windms": "4", "d2windkmh": "15", "d2windr": "ZW", "d2windrgr": "225", "d2neerslag": "70", "d2zon": "30", "alarm": "0", "alarmtxt": ""}]}
*/