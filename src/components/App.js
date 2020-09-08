import React from 'react';
import '../assets/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
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

    this.timesOperationButtonClicked = 0;
  }

  isOperator(buttonName) {
    const operations = ['-', '+', '×', '+/-', '%', '÷'];

    for (let i = 0; i < operations.length; i+=1) {      
      if (buttonName === operations[i]) return true;
    }

    return false;
  }

  allClear() {
    this.setState({
      total: null,
      operation: null,
      next: null,
    });
  }

  appendZero() {
    if (this.state.next !== null) {
      this.setState({ next: this.state.next + '0' });
    }
  }

  appendDot() {
    let { next } = this.state;
    next = next === null ? '' : next;

    if (next.indexOf('.') === -1) {
      this.setState({ next: next + '.' });
    }
  }

  handleClick(buttonName) {
    if (buttonName === 'AC') {
      this.allClear();
      return;
    }

    if (buttonName === '0'){
      this.appendZero(); 
      return;
    }

    if (buttonName === '.'){
      this.appendDot(); 
      return;
    }

    const { next, total, operation } = this.state;

    if (this.isOperator(buttonName)) {
      if (next === null) {
        return;
      }

      this.timesOperationButtonClicked += 1;

      if (this.timesOperationButtonClicked >= 2) {
        const newTotal = calculate(total, next, operation);

        this.setState({
          total: newTotal,
          operation: buttonName,
          next: null,
        });
      } else {
        this.setState({
          total: next,
          operation: buttonName,
          next: null,
        });
      }
    } else {
      this.setState({
        next: (next === null ? '' : next) + buttonName
      });
    }

  }

  render() {
    const { next, total, operation } = this.state;

    return (
      <div className="App mdl-card mdl-shadow--2dp">
        <Display result={ next === null ? '0' : next } total={ total } operation={operation} />
        <ButtonPanel clickHandler={ this.handleClick } />
      </div>
    );
  }
}

export default App;
