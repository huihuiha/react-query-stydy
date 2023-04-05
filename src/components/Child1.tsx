import React, { useContext } from 'react';
import { globalContext } from '../context';

const Child1: React.FC = () => {
  console.log('child1 render');
  const globalVal = useContext(globalContext);

  return <div>{globalVal.theme}</div>;
};

export default Child1;
