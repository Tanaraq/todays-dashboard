import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuote = createAsyncThunk(
    'quote/getQuote',
    async() => {    
      const data = await fetch("https://quotes.rest/qod?category=inspire");
      const json = await data.json();
      console.log(json);
      return json;
    }  
);

export const quotesSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {},
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuote.pending, (state) =>{
                state.isLoading = true;
                state.hasError = false; 
            })
            .addCase(getQuote.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.hasError = false; 
                state.quote = {
                    quote: action.payload.contents.quotes[0].quote,
                    author: action.payload.contents.quotes[0].author
                }
            })
            .addCase(getQuote.rejected, (state) =>{
                state.isLoading = false;
                state.hasError = true; 
            })
    }
})

//selectors:
export const selectQuote = (state) => state.quote.quote;

export default quotesSlice.reducer;
