import React from 'react';
import '../assets/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    console.log(buttonName);
  }

  render() {
    const { total } = this.state;

    return (
      <div className="App mdl-card mdl-shadow--2dp">
        <Display value={ total } />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
