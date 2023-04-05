import React, { useContext } from 'react';
import { globalContext } from '../context';

const Child2: React.FC = () => {
  const globalVal = useContext(globalContext);
  return <div>{globalVal.theme}</div>;
};

export default Child2;
