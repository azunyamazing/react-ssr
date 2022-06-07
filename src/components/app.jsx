const React = require('react');
const { observer } = require('mobx-react-lite');

const { getGlobalData } = require('../web/model');
const { useEffect } = React;

const App = observer(() => {

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

module.exports = App;