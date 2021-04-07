import React from 'react';
import Header from './Header.js';
import Form from './Form';
import Footer from './Footer.js';
import './App.css';


class App extends React.Component{
  // process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY to use locationIQ Key in URL
  // searchTextFieldValue: changed from function declaration to arow function and stopped getting "Cannot read property 'setState' of undefined" - i beliieve it has to do with "this" context but why is it different with arrow function?
  constructor(props){
    super(props);
    this.state = {
      citySearchTextField: 'pick a city...',
    };
  }

  searchSubmitHandler(event){
    event.preventDefault();
    // console.log('submit button is active');
  }

  searchTextFieldValue= (event) => {
    event.preventDefault();
    if(event.target.value){
      this.setState({
        citySearchTextField: event.target.value
      });
    }else this.setState({
      citySearchTextField: 'pick a city...'
    });
  }

  render(){
    // console.log('state val is: ',this.state.citySearchTextField);

    return(
      <>
        <Header />
        <Form onInput={this.searchTextFieldValue} onSubmit={this.searchSubmitHandler} />
        <h2> Your City: {this.state.citySearchTextField}</h2>
        <Footer />
      </>
    );
  }
}

export default App;
