export const DisplayFavDog = ({dog}) => {

    return(
        <div className="dog-image">
            <h4>Favorite Dog</h4>
            <img src={dog.url} alt="Fav Dog" width="200"/><br/>
        </div>
    );

}

export default DisplayFavDog