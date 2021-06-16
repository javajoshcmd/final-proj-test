import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");


  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
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
  const handleSearch = async (event) => {
    setSearch(event.target.value);
    await handleFetch()
   
  };

  if (error) return <h1>{error}</h1>;
  if (!loading)
    return (
      <div>
        {/* <button onClick={handleFetch}>Load</button> */}
        <div>
          <form>
            <label className="search-label">
              Search for a Cocktail:
              <input type="text" placeholder="search" value={search} ></input>
            </label>
            <button type="text" onClick={handleSearch} label="search">Search</button>
          </form>
        </div>
      </div>
    );

  return (
    <div className="App">
      <div className="drink-name"> {data.drinks[0].strDrink}</div>
      <div>
        <img
          className="drink-thumb"
          alt="drink"
          src={data.drinks[0].strDrinkThumb}
        ></img>
      </div>
      <div className="ingredients">
        Ingredients: {data.drinks[0].strIngredient1},
        {data.drinks[0].strIngredient2},{data.drinks[0].strIngredient3},
        {data.drinks[0].strIngredient4}
      </div>
      <div className="glass-type">Glassware: {data.drinks[0].strGlass}</div>
      <div className="drink-method">
        Instructions: {data.drinks[0].strInstructions}
      </div>
    </div>
  );
};

export default App;
