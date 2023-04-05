import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import getList, { ItemType } from '../fetch/list';
import Item from './Item';

const List1: React.FC = () => {
  const { data = [], isLoading } = useQuery<ItemType[]>(['list'], () =>
    getList()
  );

  useEffect(() => {
    console.log('useEffect ...');
  }, []);

  if (isLoading) return <div>loading </div>;

  return (
    <div>
      {data.map((item) => (
        <Item key={item.id} name={item.name}></Item>
      ))}
    </div>
  );
};

export default List1;
