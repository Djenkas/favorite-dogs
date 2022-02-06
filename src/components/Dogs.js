import React from 'react'
import DisplayDog from './DisplayDog';

export const Dogs = (dogListProps) => {
   
    let res = dogListProps.dogComponents;
    return(
        <div className="dogs">
            <h1>Dogs</h1>
            <div className="moreButton">
                <button type="button" onClick={dogListProps.getNewDogs} className="btn btn-fav">Next Page</button>
            </div>
            <br clear="all"></br>
            <DisplayDog addToFav = {dogListProps.addToFav} dogObj = {res[0].dogObj}/>
            <DisplayDog addToFav = {dogListProps.addToFav} dogObj = {res[1].dogObj}/>
            <DisplayDog addToFav = {dogListProps.addToFav} dogObj = {res[2].dogObj}/>
            <DisplayDog addToFav = {dogListProps.addToFav} dogObj = {res[3].dogObj}/>
            <DisplayDog addToFav = {dogListProps.addToFav} dogObj = {res[4].dogObj}/>
            <DisplayDog addToFav = {dogListProps.addToFav} dogObj = {res[5].dogObj}/>


        </div>  
    )
}

