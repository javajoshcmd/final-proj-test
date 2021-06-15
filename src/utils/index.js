import React, { useState } from "react";

const GetData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      // console.log(data);
      setData(data);
      setLoading(true);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  if (error) return <h1>{error}</h1>;
  if (!loading) return <button onClick={handleFetch}>Loading</button>;
};

export default GetData;
