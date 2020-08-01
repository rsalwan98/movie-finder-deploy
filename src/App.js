import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Auxiliary';
import MovieInput from './Components/MovieInput/MovieInput'
import MovieDisplayBox  from './Components/MovieDisplayBox/MovieDisplayBox'
class App extends Component {
  render(){
    return (
      <div>
        <Aux>
          <MovieInput/>
          <MovieDisplayBox/>
        </Aux>
      </div>
    );
  }
}

export default App;
