import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setcategories] = useState(defaultCategories);

  /* const agregarCate=()=>{
        setcategories([...categories,'salamanca'])
        //setcategories(cats=>[...categories,'salamanca'])
    } */

  return (
    <div>
      <>
        <h1>GifExpertApp</h1>
        <hr />
        <AddCategory setcategories={setcategories} />
        {/*  <button onClick={agregarCate}>Agregar</button> */}

        <ol>
          {
            categories.map((category) => (
              <GifGrid key={category} category={category} />
            ))

            /* categories.map( category => {
                return <li key={ category }>{ category }</li>
                }) */
          }
        </ol>
      </>
    </div>
  );
};
