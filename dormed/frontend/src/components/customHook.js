import { useState, useEffect } from "react";
import axios from "axios";

function useApi(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, error, setData, fetchData];
}

export {useApi}