import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    const { total, next, operation } = calculate(this.state, button);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (total === '') {
      result = '0';
    } else {
      result = `${total} ${operation} ${next}`;
    }
    return (
      <>
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
