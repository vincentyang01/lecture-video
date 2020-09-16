import React from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';

class App extends React.Component {

  state = {
    instructor: {}
  }
  appClickHandler = (insObj) => {
    console.log("In app", "color: blue", insObj)
    this.setState({ instructor: insObj })
  }
  render() {

    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor}/>
      </>
    );
  }
}






export default App;
