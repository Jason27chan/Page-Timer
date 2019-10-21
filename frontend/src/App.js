import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Timer } from "easytimer.js";

// TODO There must be a better way to import the pictures
import page_1 from './img/page_1.png';
import page_2 from './img/page_2.png';
import page_3 from './img/page_3.png';
import page_4 from './img/page_4.png';
import page_5 from './img/page_5.png';
import page_6 from './img/page_6.png';
import page_7 from './img/page_7.png';
import page_8 from './img/page_8.png';
import page_9 from './img/page_9.png';

import './App.css';
import Results from './results.js';



/**
 * Application for tracking time spent on each page
 */
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      curr_index: 1
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.imgArr = [page_1, page_2, page_3, page_4, page_5, page_6, page_7, page_8, page_9];
    this.stopwatchArr = [];
    for (let i = 0; i < this.imgArr.length; i++) {
      this.stopwatchArr.push(new Timer());
    }
    console.log(this.stopwatchArr);
    this.stopwatchArr[this.state.curr_index].start();
    console.log(this.stopwatchArr[this.state.curr_index].getTimeValues());
  }

  /**
   * Increment the current index and update the state
   * If at last page, do nothing
   */
  nextPage() {
    console.log(this.stopwatchArr[this.state.curr_index].getTimeValues().seconds);
    let curr_index = this.state.curr_index;  
    this.stopwatchArr[curr_index].pause();  
    if (++curr_index >= this.imgArr.length)
      curr_index = this.imgArr.length - 1;
    this.setState({curr_index: curr_index})
    this.stopwatchArr[curr_index].start();
  }

  /**
   * Decrement the current index and update the state
   * If at first page, do nothing
   */
  prevPage() {
    console.log(this.stopwatchArr[this.state.curr_index].getTimeValues().seconds);
    let curr_index = this.state.curr_index;
    this.stopwatchArr[curr_index].pause();  
    if (--curr_index <= -1)
      curr_index = 0;
    this.setState({curr_index: curr_index});
    this.stopwatchArr[curr_index].start();  
  }
  
  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <img src={this.imgArr[this.state.curr_index]} className="App-logo" alt="Page" />
          <button onClick={this.prevPage}>prev</button>
          <button onClick={this.nextPage}>next</button>
          <button><a href="/results">End Session</a></button>
          <Route path='/results' component={Results}></Route>
        </header>
        </Router>
      </div>
    );
  }
}

export default App;
