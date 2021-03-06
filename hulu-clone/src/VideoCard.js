import React, {forwardRef} from 'react'
import './videoCard.css'
import TextTruncate from "react-text-truncate";

import {ThumbUpSharp} from '@material-ui/icons';

const base_url = "https://image.tmdb.org/t/p/original/";
const Videocard = forwardRef(({movie}, ref) =>{
    return (
        <div ref= {ref} className = "videoCard">
            <img
                src={`${base_url}${movie.backdrop_path}`} alt="movie poster"
            />
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.orinal_name}</h2>
            <p className ="videoCard_stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpSharp />{"  "}
                {movie.vote_count}
            </p>
        </div>
    )
});

export default Videocard

