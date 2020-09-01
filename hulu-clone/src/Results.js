import React,{useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from "react-flip-move";
function Results({ selectedOption }) {
    const[movies, setMovies] = useState([]);

//  run this code EVERY time the results components loads/mounts
    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[selectedOption]) // depedency on selectedOption

    return (
        <div className = "results">
            <FlipMove>
                {movies.map((movie) =>(
                    <VideoCard key={movie.id} movie={movie} />
                ))} 
            </FlipMove>
             
        </div>
    )
}

export default Results
