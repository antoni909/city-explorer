import React from 'react';
import Header from './Header.js';
import Form from './Form';
import Footer from './Footer.js';
import './App.css';
import axios from 'axios';
// console.log(process.env);

class App extends React.Component{
  // NOTES:
  // process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY to use locationIQ Key in URL
  // searchTextFieldValue: changed from function declaration to arow function and stopped getting "Cannot read property 'setState' of undefined" - i beliieve it has to do with "this" context but why is it different with arrow function?
  constructor(props){
    super(props);
    this.state = {
      citySearchTextField: 'pick a city...',
    };
  }

  // TextField
  searchTextFieldValue= (event) => {
    event.preventDefault();
    if(event.target.value){
      this.setState({
        citySearchTextField: event.target.value
      });
    }else this.setState({
      citySearchTextField: 'pick a city...',
    });
  }

  //Submit Button
  searchSubmitHandler(event){
    event.preventDefault();
    // console.log('submit button is active');
  }

  // GET from LocationIQ
  locationIQ = async()=> {
    let dataLIQ = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ACCESS_KEY_LOCATIONIQ_KEY}q=${this.state.citySearchTextField}format=json`);
    console.log(dataLIQ);
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
