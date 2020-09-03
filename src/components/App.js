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
      chain: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  isOperator(buttonName) {
    const operations = ['-', '+', '×', '+/-', '%', '÷'];

    for (let i = 0; i < operations.length; i+=1) {      
      if (buttonName === operations[i]) return true;
    }

    return false;
  }

  handleClick(buttonName) {
    const { next, total } = this.state;

    if (this.isOperator(buttonName)) {
      const newTotal = calculate(total, next, buttonName);

      this.setState({
        total: newTotal,
        operation: buttonName,
        next: null,
        chain: `${total} ${buttonName}`,
      });
    } else {
      this.setState({
        next: (next === null ? '' : next) + buttonName
      });
    }

  }

  render() {
    const { next } = this.state;

    return (
      <div className="App mdl-card mdl-shadow--2dp">
        <Display result={ next === null ? '0' : next } chain={ this.state.chain } />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
