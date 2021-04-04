import React, {useState, useEffect} from "react";
import {GifGridItem} from "./GifGridItem";
import {getGifs} from "../helpers/getGifs";
import {useFethcGifs} from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFethcGifs(category);

    // console.log(loading)


    // return (
    //     <>
    //         <h3>Category</h3>
    //         {loading ? 'Cargando....' : 'Data Cargada'}
    //     </>
    // )
//     const [images, setImages] = useState([])
//
// // El useeffect solo se ejecutara solo cuando el componente se reenderiza la primera vez
//     useEffect(() => {
//         getGifs(category)
//             // .then(imgs => setImages(imgs)) //Esto lo podemos hacer, o la opción de abajo, donde el primer argumento se envia por debajo
//             .then(setImages)
//
//     }, [category]);

    return (
        <>
            <div className="card-grid">
                <h3>{category}</h3>
                {loading && <p>Loading</p>}
                <ol>
                    {
                        /*   images.map((image, i) => {
                               return <GifGridItem image={image.url}></GifGridItem>
                               //return <li key={image.id}><img src={image.url} alt= {image.title}/> </li>
                       })*/
                        /**
                         * De esta manera mandamos todo el objeto sin destructurar, no es necesario alicar el return
                         */
                        // images.map(img => (
                        //     <GifGridItem img={img} key={img.id}></GifGridItem>
                        // ))

                        /**
                         * De esta manera se envian todos los argumentos como variables independientes, spread destructaración
                         */

                        images.map(img => (
                            <GifGridItem key={img.id} {...img}></GifGridItem>
                        ))
                    }

                </ol>
            </div>
        </>
    )
}
