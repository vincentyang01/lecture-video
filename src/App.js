import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import './App.css';
import AnimeContainer from './Containers/AnimeContainer';


class App extends React.Component {

  state = { instructor: {} }

  appClickHandler = (instructor_obj) => {
    console.log("%c In App!", 'color: red', instructor_obj)
    this.setState({ instructor: instructor_obj })
  }

  render() {

    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </>
    );
  }
}






export default App;
