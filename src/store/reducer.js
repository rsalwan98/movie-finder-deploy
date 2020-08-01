const intialState ={
    movieData : null,
    showPopUp : false,
    fetchedData : null
}

const reducer = (state = intialState,action) => {

    switch(action.type){
        case "SETMOVIEDATA":
            return {
                ...state,
                movieData : action.movieData
            }
        case "SHOWPOPUP":
            return {
                ...state,
                showPopUp: true
            }  
        case "HIDEPOPUP":
            return{
                ...state,
                showPopUp:false
            }  
        case "SETFETCHEDDATA":
            return{
                ...state,
                fetchedData : action.data,
                showPopUp:true
            }     
        default :
            return state    
    }
}

export default reducer;