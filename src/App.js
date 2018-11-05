import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import About from './about/about';
import Resume from './resume/resume';
import Portfolio from './portfolio/portfolio';
import Contactus from './contactus/contactus';
import resumeData from './resumeData'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <About/>
      <Resume/>
      <Portfolio/>
      <Contactus/>
        <Footer/>

      </div>
    );
  }
}

export default App;
