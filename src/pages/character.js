import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

//Importing components
import Tile from "../components/tile";

const Character = ({fav, setFav}) => {
    const {id} = useParams();
    const [charData, setCharData] = useState({});
    const [comicsData, setComicsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const charResponse = await axios.get(`https://marvel-back-jm.herokuapp.com/character/${id}`)
            setCharData(charResponse.data);
            const comResponse = await axios.get(`https://marvel-back-jm.herokuapp.com/comics/${id}`)
            setComicsData(comResponse.data);
            setIsLoading(false);
        }
        fetchData();
    }, [id])
    return (
        isLoading? <p className="loading">Data is laoding</p>:
        <div className="container">
            <div className="SingleCharacterContainer">
                <Tile url={undefined} item={charData} fav={fav} setFav={setFav}/>
            </div>
            <div className="comicContainer grid">
                {comicsData.comics.map((comic, index) => {
                    return (
                        <Tile url={undefined} item={comic} fav={fav} setFav={setFav}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Character;