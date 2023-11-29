/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function useFetchHook(fetchUrl) {
  const [fetchData, setFetchData] = useState([]);
  const [errorData, setErrorData] = useState(null);
  const url = fetchUrl;

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        setErrorData(`Error fetching data: ${error.message}`);
      }
    };
    fetchDataFromApi();
  }, [url]);

  return { fetchData, errorData };
}
