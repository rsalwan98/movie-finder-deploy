import axios from 'axios'

export const fetchMoviesData = (movieName) => {
    return dispatch => {
        axios.get("http://www.omdbapi.com/?apikey=fc1d8613&s="+movieName)
        .then(res => {
            dispatch(setMoviesData(res.data.Search))
        })
    }
}

const setMoviesData = (movieData) => {
    return {
        type : "SETMOVIEDATA",
        movieData: movieData
    }
}

export const fetchMovieData = (movieId) => {
    return dispatch => {
        axios.get("http://www.omdbapi.com/?apikey=fc1d8613&i="+movieId)
        .then(res => {
            dispatch(setFetchedData(res.data))
        })
    }
}

const setFetchedData = (movieData) => {
    console.log(movieData)
    return {
        type : "SETFETCHEDDATA",
        data : movieData
    }

}