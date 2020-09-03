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

    this.handleClick = this.handleClick.bind(this);
  }

  isOperator(buttonName) {
    const operations = ['-', '+', 'x', '+/-', '%', '÷'];

    for (let i = 0; i < operations.length; i+=1) {      
      if (buttonName === operations[i]) return true;
    }

    return false;
  }

  handleClick(buttonName) {
    const { next } = this.state;
    this.setState({
      next: (next === null ? '' : next) + buttonName
    });
  }

  render() {
    const { next } = this.state;

    return (
      <div className="App mdl-card mdl-shadow--2dp">
        <Display result={ next === null ? '0' : next } />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
