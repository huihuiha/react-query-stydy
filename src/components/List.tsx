import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import getList, { ItemType } from '../fetch/list';
import Item from './Item';
import { listKeys } from '../common/queryKeys';

const List: React.FC = () => {
  const { data = [], isLoading } = useQuery<ItemType[]>(
    listKeys.list,
    () => getList(),
    {
      select: (data) => data.map((item) => ({ ...item, selected: false })),
    }
  );

  useEffect(() => {
    console.log('useEffect ...');
  }, []);

  console.log(data);
  if (isLoading) return <div>loading </div>;

  return (
    <div>
      {data.map((item) => (
        <Item key={item.id} name={item.name}></Item>
      ))}
    </div>
  );
};

export default List;
