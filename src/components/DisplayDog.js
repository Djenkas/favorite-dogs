import React from 'react';

const DisplayDog = ({addToFav,dogObj}) => {

    return(
        <div className="dog-image">
            <h4>Random Dog</h4>
            <img src={dogObj} alt="Random Dog" width="200"/><br/>
            <button type="button" onClick= {(e) => addToFav({url:dogObj})} className="btn btn-fav">Add</button>
        </div>
    );
}

export default DisplayDog