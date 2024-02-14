import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setinputValue ] = useState();

    const handleChange = ({ target }) => {
        console.log( target.value );
        setinputValue( target.value );
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        
        onNewCategory( inputValue.trim());
        setinputValue('');
    }

    return(
        <form onSubmit = { onSubmit }>
            <input type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ handleChange }
            />
        </form>   
    )
};