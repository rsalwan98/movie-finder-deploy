import React, { Component } from 'react'
import { connect } from "react-redux"
import classes from './MovieDisplayBox.module.css'
import MovieTile from './MovieTile/MovieTile'
import Modal from '../UI/Modal/Modal'
import Aux from '../../hoc/Auxiliary'
import PopUp from '../PopUp/PopUp'
import * as Actions from '../../store/actions'
class MovieDisplayBox extends Component {
    
    render(){
        let testing = null;
        if(this.props.movieData){
            testing = this.props.movieData.map(movie => {
                return (
                    <MovieTile
                        title={movie.Title}
                        key={movie.imdbID}
                        imgSource={movie.Poster}
                        id={movie.imdbID}
                        clicked={(id) => this.props.onTileClick(id)}
                    />
                )
            })
        }

        let pop=null;
        if(this.props.popUpData){
            pop=(
                <PopUp
                    imgSource={this.props.popUpData.Poster}
                    title={this.props.popUpData.Title}
                    year={this.props.popUpData.Year}
                    plot={this.props.popUpData.Plot}
                />
            )
        }
        return (
            <Aux>
                <Modal show={this.props.showPopUp} closeModal={this.props.onBackDropClick}>
                    {pop}
                </Modal>
                <div className={classes.MovieDisplayBox}>
                    <div className={classes.MovieBox}>
                        {testing}
                    </div>
                </div>
            </Aux>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        movieData : state.movieData,
        showPopUp : state.showPopUp,
        popUpData : state.fetchedData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTileClick :(id) =>  dispatch(Actions.fetchMovieData(id)),
        onBackDropClick : () => dispatch({type : "HIDEPOPUP"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDisplayBox);