import React from 'react';
import logo from './logo.svg';
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

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      curr_index: 1
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.img_arr = [page_1, page_2, page_3, page_4, page_5, page_6, page_7, page_8, page_9];

  }


  nextPage() {
    let curr_index = this.state.curr_index;    
    if (++curr_index >= this.img_arr.length)
      curr_index = this.img_arr.lenght - 1;
    this.setState({curr_index: curr_index})
    // console.log(curr_index);
  }

  prevPage() {
    let curr_index = this.state.curr_index;
    if (--curr_index <= -1)
      curr_index = 0;
    this.setState({curr_index: curr_index});
    // console.log(curr_index);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.img_arr[this.state.curr_index]} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.prevPage}>prev</button>
          <button onClick={this.nextPage}>next</button>
        </header>
      </div>
    );
  }
}

export default App;
