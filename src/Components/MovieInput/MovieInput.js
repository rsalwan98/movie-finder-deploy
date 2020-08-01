import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './MovieInput.module.css'
import * as Actions from '../../store/actions'
class MovieInput extends Component {
    state ={
        movieName : ""
    }

    movieNameInputHandler = (event) => {
        let updatedState ={
            ...this.state.movieName
        }
        updatedState = event.target.value;
        this.setState({movieName : updatedState});
    }

    onSubmitHandler =(event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.movieName)
    }
 
    render(){
        return (
            <div className={classes.MovieInput}>
                <form onSubmit={(event) => this.onSubmitHandler(event)}>
                    <input className={classes.TextBox} onChange={(event) => this.movieNameInputHandler(event)} value={this.state.movieName} type="text" placeholder="Movie Name"></input>
                    <button className={classes.SubmitButton}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit : (movieName) => dispatch(Actions.fetchMoviesData(movieName))
    }
}
export default connect(null,mapDispatchToProps)(MovieInput);