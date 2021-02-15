import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types'

// EN ESTE SE IMPLEMENTO UN CUSTOM HOOK QUE HACE EL TRABAJO PESADO
export const GifGrid = ({ category }) => {
                    /*   const [images, setimages] = useState([]); */

                    /* use effect es como el component didmount */
  const { data:images,loading } = useFetchGifs( category );
                    /*  useEffect(() => {
                        //getGifs(); -> como ya no tengo el getgifs lo importo
                        getGifs(category).then(setimages);
                        //.then(imgs=>setimages(imgs))
                    }, [category]); */

                    /*  getGifs(); */

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">cargando</p>}
     
      <div className="card-grid">
        <ol className="ol-grid">
          {images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
              //img={img}
            />
          ))}
        </ol>
      </div>
    </>
  );
};
GifGrid.propTypes={
  category:PropTypes.string.isRequired
}