import { render } from '@testing-library/react'
import React, { useState } from 'react'
import DisplayDog from './DisplayDog';

export const Dogs = (dogProps) => {
   
    const [count, setCount] = useState(0);
    const [dogs, setDogs] = useState([])
    
         let newDogs = [];
        console.log ("IN SHOW MORE DOGS")
        for (var i = 0 ; i<6 ; i++){
            newDogs.push(<DisplayDog addToFav = {dogProps.addToFav}/>)
        };
        // setDogs(newDogs);

    return(
        <div className="dogs">
            {/* {showMoreDogs()} */}
            <h1>Dogs</h1>
            {newDogs}
            <div className="moreButton">
                <button type="button" onClick={() => setDogs(newDogs)} className="btn btn-fav">Next Page</button>
            </div>
        </div>  
    )
}