
import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage"
import SearchPage from "./Pages/SearchPage"
import Header from "./Components/Header";
import MealPage from "./Pages/MealPage";


const App = () => {
  return(
     <>
      <Header/>
         <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/search" element={<SearchPage/>} />
             <Route path="/meal/:idMeal" element={<MealPage/>} />
         </Routes>
     </>
  )
}

export default App;
