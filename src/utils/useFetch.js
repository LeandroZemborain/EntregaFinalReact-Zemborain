import {  useEffect, useState } from "react";

const initialState = {
  response:{},
  error:{},
  data:[],
  loading:false
};

const useFetch = (url) => {
  const [state, setState] = useState(initialState);

  useEffect(()=>{
    
    fetch(url)
    .then((response) => {
      //setState({...state,response});
      return response.json();
    })
    .then((infoJson) => {
      //console.log("soy  datas",infoJson);
      setState({...state,data:infoJson,loading:false});
      //data = infoJson;
    })
    .catch((_error) => {
      setState(_error);
    });
  },[url]);

  return [state.data, state.loading, state.response, state.error];
};

export default useFetch;
