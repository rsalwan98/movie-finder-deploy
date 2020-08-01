import React  from 'react'
import classes from './PopUp.module.css'
const popUp = (props) => {

    return (
        <div className={classes.popUp}>
            <img className={classes.MovieImage} src={props.imgSource} alt={props.title}></img>
            <div className={classes.MovieInfo}>
                <p><strong>Title:</strong>{props.title}</p>
                <p><strong>Year of Release:</strong>{props.year}</p>
                <p><strong>Plot:</strong>{props.plot}</p>
            </div>
        </div>
    )
}

export default popUp;