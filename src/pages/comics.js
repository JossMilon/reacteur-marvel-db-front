import {useState, useEffect} from 'react';
import axios from 'axios';

//Importing components
import Pagination from '../components/pagination';
import Search from '../components/search';
import Tile from '../components/tile';

const Comics = ({fav, setFav}) => {
        const [data, setData] = useState({status: "empty"});
        const [isLoading, setIsLoading] = useState(true);
        const [skip, setSkip] = useState(1);
        const [search, setSearch] = useState("");
        useEffect(() => {
            const fetchData = async () => {
                const response = await axios.get(`http://localhost:3000/comics?apiKey=GCX9NQEtCftNAXRG&limit=100&skip=${skip}&title=${search}`);
                setData(response.data);
                setIsLoading(false);
            }
            fetchData();
        }, [skip, search]);
        return isLoading? <p className="loading">Data is loading</p> : 
                          <div className="container">
                            <Search placeholder="Seach for Marvel comics" setSearch={setSearch} setSkip={setSkip} />
                            <Pagination skip={skip} setSkip={setSkip} data={data}/>
                                <div className="comicContainer grid">
                                    {data.results.length === 0? <p className="noResult">Where did Marvel heroes went?<br/>Chasing the injustice somewhere in the Universes I bet!!</p>: data.results.map((comic, index) => {
                                        return (
                                            <Tile url={undefined} item={comic} fav={fav} setFav={setFav} key={index}/>
                                    )})}
                                </div>
                          </div>
}

export default Comics;