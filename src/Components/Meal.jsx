import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=c");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
    <div className="container">

        <div className="main">
            <div className="heading mt-4">
                <h1>Search Your Food Recipe</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar p-2 mt-4" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="indexContainer mt-4">
                <div className="numBox">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
                </div>
            </div>
            <div className="card-container mt-4">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
            </div>
        </div>
    </div>
    </>
)
}
export default Meal;