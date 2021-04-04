import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['Goku', 'Vegeta', 'Cell']

    const [categories, setCategories] = useState(['Goku']);

    // Los tres puntos significas que vamos a concatenera el elemento con otro (Operador spread)
    const addNewCaracter = () => {
        setCategories([...categories, 'HunterxHunter']);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr/>
            {/*<button onClick={addNewCaracter}>Agregar nuevo elemento</button>*/}
            <ol>
                {
                    categories.map((category, i) => {
                       return <GifGrid key={i} category={category}></GifGrid>
                      //  return <li key={i}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}


export default GifExpertApp;
