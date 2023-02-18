import React from "react";
import { useState } from "react";
import axios from "axios";

//import pages
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SearchPage from "./Pages/Search/SearchPage";
import SearchBar from "./Pages/Search/SearchBar";
import RecipeList from "./Pages/Saved Recipes/RecipeList";


function App() {

  //Hold Information in state:

  const [searchResults, setSearchResults] = useState([]);

  //use Axios Function to GET Recipe Database

  const runSearch = async (userInput)=>{
    try {
      let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&apiKey=a30a8055bce74d128fd0d69da6ff918a`)
      console.log(response.data)
      setSearchResults(response.data.results); 
    } catch (error) {
      console.log(error.response.data)
    }
  }
  return (
    <div >
    <NavBar />
   <h3> Welcome, Search for a Recipe:</h3>
   <SearchBar searchRecipeProps={runSearch} />
   <SearchPage searchResults={searchResults} />
    <RecipeList/>
   <Footer />
  </div>

);
}

export default App;
