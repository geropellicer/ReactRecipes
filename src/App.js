import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "b6e2862d";
  const APP_KEY = "e26f6cc38cc4d9d2393d13ea45ca6bb0";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return(
    <div className="App">
      <h1 className="mainTitle">Tasty RECIPES for ya</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Buscar
        </button>
      </form>
      <div className="recipesContainer">
        {
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label} 
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              labels={recipe.recipe.dietLabels}
              ingredients={recipe.recipe.ingredients} />
          ))
          }
        </div>
    </div>
  );
}

export default App;
