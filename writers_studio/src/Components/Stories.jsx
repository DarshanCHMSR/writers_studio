import React from "react";
import "../css/stories.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Stories = () => {


//   const navigate = useNavigate();
//   useEffect(() => {
//     if(localStorage.getItem('auth-token')){
//         }
//     else{
//         navigate('/login');
//     }
// }, [])
    return (
     <div>

        <h1 className="h1">stories</h1>
   <div className="card">
  <span className="card__title">Author : the one</span>
  <p className="card__content">
    this is story is about the god of the world and how he created the world and how he created the humans and how he created the animals and how he created the plants and how he created the water and how he created the air and how he created the fire 
  </p>
  <form className="card__form">
 


    <button className="card__button">See me</button>
  </form>
</div>

    </div>
    );
  };
  
  export default Stories;
