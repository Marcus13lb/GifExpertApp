import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
   const onAddCategory = ( newCategory ) => {  
        //Validacion para inputs repetidos 
        if( categories.includes(newCategory) ) return; 
        setCategories([...new Set([newCategory, ...categories])]);
    };


    return(
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = { onAddCategory } 
            /*setCategories = { setCategories }*/
        />
        <object>
            { categories.map( ( category ) => {
                return <li key = { category }>{ category }</li>
            } ) }
        </object>
        {/*Listado de Gif*/}
            {/*Gif Item*/}
    </>
    )
}