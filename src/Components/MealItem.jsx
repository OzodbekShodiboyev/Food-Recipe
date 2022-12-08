import React from "react";
import { useNavigate } from "react-router-dom";
const MealItem=({data})=>{
    console.log(data);
    let navigate = useNavigate();
    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                        
                        <div class="card mb-4" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)} >
                             <img src={item.strMealThumb} alt="" />
                                <div class="card-body">
                                <h4 className="meal-name">{item.strMeal}</h4>
                                 </div>
                        </div>
                       
                    
                    )
                })
            }
            
        </>
    )
}
export default MealItem;