import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import List from './components/List';
import List1 from './components/List1';
import add from './fetch/add';
import { ItemType } from './fetch/list';

function App() {
  const [inputVal, setInputVal] = useState('');

  const mutation = useMutation((item: ItemType) => add(item));
  const queryClient = useQueryClient();

  const handleBtnClick = () => {
    // 添加新的todo
    const addItem = {
      name: inputVal,
      id: Date.now() + '',
    };

    mutation.mutateAsync(addItem, {
      onSuccess() {
        queryClient.invalidateQueries(['list']);
      },
      onError(error) {
        console.log(error);
        // alert('添加失败....');
      },
    });
  };

  return (
    <div className="App">
      {/* <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>
      <Child2></Child2> */}
      <Child1></Child1>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
      />
      <button onClick={handleBtnClick}>确定</button>
      <List></List>
      <List1></List1>
    </div>
  );
}

export default App;
