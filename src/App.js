import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import './App.css';
import AnimeContainer from './Containers/AnimeContainer';


class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <InstructorContainer />
        <AnimeContainer />
      </>
    );
  }
}






export default App;
