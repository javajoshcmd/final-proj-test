import React, { useState } from "react";

const Search = async ({drinks}) => {
  const [search, setSearch] = useState("");
  handleSubmit = (e) => {
      e.preventDefault();
      const matches = drinks.filter((item) => item === search);
      console.log(matches)
  };
  return (
    <div>
        <div>
      <form onSubmit={handleSubmit}>
        <label className="search-label">
          Search for a Cocktail:
          <input type="text" name="search"></input>
        
        <input type="submit" 
        name="search"
        value={search} 
        onChange={(e)=> setSearch(e.target.value)}></input>
        </label>
      </form>

      <button type="submit">Search</button>
      </div>
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
export default Search;
