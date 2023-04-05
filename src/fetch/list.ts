export interface ItemType {
  name: string;
  id: string;
}

export function pushList(item: ItemType) {
  list.push(item);
}

export const list = [
  {
    name: '张三',
    id: '1',
  },
  {
    name: '李四',
    id: '2',
  },
  {
    name: '小一',
    id: '3',
  },
  {
    name: '小二',
    id: '5',
  },
];

export default function getList(): Promise<ItemType[]> {
  return new Promise((resolve) => {
    console.log('get list data...');
    setTimeout(() => {
      resolve([...list]);
    }, 1000);
  });
}
