import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      //setTimeout(() => {
         /*  console.log(imgs) */
        setstate({
          data: imgs,
          loading: false,
        });
      //}, 3000);
    });
  }, [category]);

  /* devuelve lo que esta adentro despues del tiempo establecido */
  /*    setTimeout( ()=>{
        setstate({
            data:[1,2,3,4],
            loading: false
        })
    },3000); */

  return state; // data y loading
};
