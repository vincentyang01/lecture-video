import React from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
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
