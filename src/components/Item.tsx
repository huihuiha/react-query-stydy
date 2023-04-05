import React from 'react';

type Iprops = {
  name: string;
};

const Item: React.FC<Iprops> = ({ name }) => {
  return <div>{name}</div>;
};

export default Item;
