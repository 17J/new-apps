import React, { useReducer, useEffect, useCallback } from "react";
import { reducer } from "./reducer";

export const MyContext = React.createContext();

const initialState = {
  data: [],
  query: "adani",
  isLoading:true
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNewsDetails = useCallback(async () => {
    dispatch({type:"SET_LOADING"})
    
    
    try {
      const res = await fetch(
        `https://bing-news-search1.p.rapidapi.com/news/search?q=${state.query}&freshness=Day&textFormat=Raw&safeSearch=Off`,
        {
          method: "GET",
          headers: {
            "X-BingApis-SDK": "true",
            "X-RapidAPI-Key": `${process.env.REACT_APP_NEWS_KEY}`,
            "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
          },
        }
      );
      const result = await res.json();
      console.log(result);
      dispatch({
        type: "GET_NEWS",
        payload: {
          data: result.value,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, [state.query]);


  const searchPost = (queryPost) => {
    dispatch({type:"Search_Post",payload:queryPost})

  }


  useEffect(() => {
    getNewsDetails();
  }, [state.query, getNewsDetails]);
  return (
    <MyContext.Provider value={{ ...state,searchPost }}>{children}</MyContext.Provider>
  );
};

export default Context;
