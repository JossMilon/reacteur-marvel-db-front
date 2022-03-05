import {useState, useEffect} from 'react';
import axios from 'axios';

//Importing components
import Pagination from '../components/pagination';
import Search from '../components/search';
import Tile from '../components/tile';

const Characters = ({fav, setFav}) => {
    const [data, setData] = useState({status: "empty"});
    const [isLoading, setIsLoading] = useState(true);
    const [skip, setSkip] = useState(1);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/characters?limit=100&skip=${skip}&name=${search}`);
                setData(response.data);
                setIsLoading(false);
            }
            catch(error) {
                console.log("Can't fetch data");
            }
        }
        fetchData();
    }, [skip, search]);
    return isLoading? <p className="loading">Data is loading</p> : 
                      <div className="container">
                            <Search placeholder="Seach for Marvel character" setSearch={setSearch} setSkip={setSkip} />
                            <Pagination skip={skip} setSkip={setSkip} data={data}/>
                            <div className="characterContainer grid">
                            {data.results.length === 0? <p className="noResult">Where did Marvel heroes went?<br/>Chasing the injustice somewhere in the Universes I bet!!</p>: data.results.map((character, index) => {
                                    return (
                                        <Tile url={`/character/${character._id}`} item={character} fav={fav} setFav={setFav} key={index}/>
                                )})};
                            </div>
                      </div>
}

export default Characters;