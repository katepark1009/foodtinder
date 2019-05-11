import React from "react";
import axios from "axios";
import API_key from "./KEYS";

const yelp_date = axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=NYC`, {
    headers: {
      Authorization: `Bearer ${API_key}`
    },
    params: {
      categories: 'breakfast_brunch',
    }
  })
    .then((res) => {
    console.log(res)
    })
     .catch((err) => {
    console.log ('error')
    })
  


export default yelp_date;