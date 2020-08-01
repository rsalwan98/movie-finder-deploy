import React from 'react'
import classes from './MovieTile.module.css'
const movieTile = (props) =>{
    return (
        <div onClick={() =>props.clicked(props.id)} className={classes.MovieTile}>
            <img className={classes.Poster} src={props.imgSource} alt={props.title}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default movieTile;