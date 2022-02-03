import React, { useState } from 'react'
import DisplayDog from './DisplayDog';
export const Dogs = (dogProps) => {
   
    const [count, setCount] = useState(0);
        let newDogs = [];
        for (var i = 0 ; i<6 ; i++){
            newDogs.push(<DisplayDog addToFav = {dogProps.addToFav}/>)
        };

    return(
        <div className="dogs">
            {/* {showMoreDogs()} */}
            <h1>Dogs</h1>
            {newDogs}
            <br clear="all"></br>
            <div className="moreButton">
                <button type="button" onClick={dogProps.setDogs} className="btn btn-fav">Next Page</button>
            </div>
        </div>  
    )
}