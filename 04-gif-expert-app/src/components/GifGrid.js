import React, {useState, useEffect} from "react";
import {GifGridItem} from "./GifGridItem";


export const GifGrid = ({category}) => {


// El useeffect solo se ejecutara solo cuando el componente se reenderiza la primera vez
    useEffect(() => {
        getGifs()

    }, []);

    const [images, setImages] = useState([])
    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=' + category + '&limit=10&api_key=iwpuLCFlLwwvYuHTISV8CrwWFLSNz8Ox';

        const result = await fetch(url);

        const {data} = await result.json();

        const gifs = data.map(img => {
            return {

                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url, // Con el ? indicamos que si viene la colección images trae la data
            }
        })

        console.log(gifs);
        setImages(gifs)
        //iwpuLCFlLwwvYuHTISV8CrwWFLSNz8Ox
    }


    return (
        <div>
            <h3>{category}</h3>
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
    )
}
