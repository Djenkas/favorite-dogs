import React, { useEffect, useState  } from 'react';
import { getImage } from '../services/ImageService'

const DisplayDog = ({addToFav}) => {
    const [imgSrc, setImgSrc] = useState(null);
    const [fileSizeBytes, setFileSizeBytes] = useState(null);

    useEffect(() => {
        getImage().then(dogObj => {
            let urlExt = [];
            urlExt = (dogObj.url).split(".");
            if (urlExt[urlExt.length -1] === "mp4"){
                console.log ("mp4")
            }
            setImgSrc(dogObj.url);
            setFileSizeBytes(dogObj.fileSizeBytes);
        });
    },[]);

    return(
        <div className="dog-image">
            <h4>Random Dog</h4>
                File size = {fileSizeBytes}<br/>
            <img src={imgSrc} alt="Random Dog" width="200"/><br/>
            <button type="button" onClick= {(e) => addToFav({url:imgSrc, fileSizeBytes:fileSizeBytes})} className="btn btn-fav">Add</button>
        </div>
    );
}

export default DisplayDog