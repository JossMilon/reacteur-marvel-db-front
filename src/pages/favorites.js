// Importing components
import Tile from '../components/tile';

const Favorites = ({fav, setFav}) => {
    return (
        <div className="container">
            <div className="favContainer grid">
                {fav.length === 0? <p className="noResult">You ain't got no fav just yet!!<br/>Select your fav heroes and comics first...</p>: fav.map((item, index) => {
                            return (
                            <Tile url={item.title? undefined: `/character/${item._id}`} item={item} fav={fav} setFav={setFav} key={index}/>
                )})}    
            </div>
        </div>
    )}

export default Favorites;