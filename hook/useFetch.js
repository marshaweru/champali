import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/${endpoint}',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '6afc9cf076msh82df439f7636919p151941jsn7352194bdc44',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };      
}