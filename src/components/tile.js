import {Link} from "react-router-dom";

const Tile = ({url, item, fav, setFav}) => {
    const checkItemPresence = (list, item) => {
        let itemIndex = -1;
        list.forEach((listElmt, index) => {
            if (listElmt._id === item._id) {
                itemIndex = index;
            }
        });
        return itemIndex;
    }
    const addFav = (newItem) => {
        const favList = [...fav];
        const itemIndex = checkItemPresence(favList, newItem);
        if (itemIndex === -1) {
            favList.push(newItem)
        }
        else {
            favList.splice(itemIndex, 1);
        };
        setFav(favList);
    }
    return (
            //If URL make it clickable, else not. Not the most DRY but...
            url? 
            <div className="tile">
                <Link to={url} >
                        <div className="imageContainer">
                            <img src={item.thumbnail.path+"."+item.thumbnail.extension} alt={item.name} />
                        </div>
                        <div className="descriptionContainer">
                            <div className="title">{item.name}</div>
                            {item.description && <div className="description">{item.description}</div>}
                        </div>
                </Link>
                <div className="fav char" onClick={() => {addFav(item)}}>{checkItemPresence(fav, item) !== -1? "Remove as favorite":"Mark as favorite"}</div>
            </div>:
            <div className="tile">
                    <div className="imageContainer">
                        <img src={item.thumbnail.path+"."+item.thumbnail.extension} alt={item.title} />
                    </div>
                    <div className="descriptionContainer">
                        <div className="title">{item.title || item.name}</div>
                        {item.description && <div className="description">{item.description}</div>}
                    </div>
                <div className="fav com" onClick={() => {addFav(item)}}>{checkItemPresence(fav, item) !== -1? "Remove as favorite":"Mark as favorite"}</div>
            </div>
    )
};

export default Tile;