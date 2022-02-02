export const DisplayFavDog = ({dog}) => {

    return(
        <div className="dog-image">
            <img src={dog.url} alt="Fav Dog" width="200"/><br/>
        </div>
    );

}

export default DisplayFavDog