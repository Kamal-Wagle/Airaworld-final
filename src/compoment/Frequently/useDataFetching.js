import { useState, useEffect } from 'react';

const useDataFetching = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Simulate a delay of 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsPending(false); // After 3 seconds, set isPending to false
    };

    fetchData();
  }, []);

  return { isPending };
};

export default useDataFetching;
