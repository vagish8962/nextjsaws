import { useState } from "react";

const useFetchData = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, headers, method, body) => {
    setIsLoading(true);
    const requestOptions = {
      method: method,
      headers: headers,
      body: method === "POST" ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [{ response, error, isLoading }, fetchData];
};

export default useFetchData;