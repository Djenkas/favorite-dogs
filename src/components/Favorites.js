import React from 'react'
import DisplayFavDog from './DisplayFavDog'

export const Favorites = (props) => {

    console.log(props.favDogs)
    let dogs = []
    props.favDogs.forEach(dogObj => {
        dogs.push(<DisplayFavDog dog={dogObj}/>)
    })

    return(
        <div className="favorites">
            <h1>Favorites</h1>
            {dogs}
        </div>
    )
}