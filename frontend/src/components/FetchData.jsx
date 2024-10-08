import { useState, useEffect } from "react";
import axios from "axios";
// import { createClient } from "contentful";

// const client = createClient({
//   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
// });

function useFetchData() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const deploy_url = import.meta.env.VITE_DEPLOY_URL;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${deploy_url}/data/`);
        setEntries(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { entries, isLoading };
}

export default useFetchData;
