import { ItemType, pushList } from './list';

export default function add(item: ItemType) {
  return new Promise((resolve, reject) => {
    if (item.name) {
      pushList(item);
      resolve({ code: 200, msg: 'success' });
    } else {
      reject({ code: 400, msg: `item 参数缺失` });
    }
  });
}
