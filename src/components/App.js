import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const handleClick = (button) => {
    const result = calculate(data, button);
    setData(result);
  };

  let { total, next, operation } = data; // eslint-disable-line

  return (
    <>
      <Display result={`${total} ${operation} ${next}`} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
