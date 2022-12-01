import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuote, getQuote } from "./quotesSlice";

export const Quote = () => {
    const dispatch = useDispatch();
    const newQuote = useSelector(selectQuote);

    useEffect(() => {  
        dispatch(getQuote());
        }, [dispatch]
    );

    return(
        <div className=" quote segment">
            <h5>"{newQuote.quote}"</h5>
            <h6> ~ {newQuote.author} ~</h6>
        </div>
    )
}