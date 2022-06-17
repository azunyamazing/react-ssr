import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { getGlobalData } from './model';

export const App = observer(() => {

  const { data, updateData } = getGlobalData();

  useEffect(() => {
    console.log('effect');
  }, []);

  const handleClick = () => {
    console.log('click!!')
    updateData([...data.reverse()])
  }

  console.log('data', data)

  return (
    <ul onClick={handleClick}>
      { data.map(v => <li key={v}>{v}</li>) }
    </ul>
  )
});