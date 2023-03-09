import { useEffect, useState } from 'react';
import Tabs from './pages/Tabs.js'
import CardsContainer from './components/CardsContainer.js';
import data from './meta/data.json'
function App() {
  const [filtered,setFiltered] = useState([]);
  const [category,setCateogry] = useState(0);
  const [active,setActive] = useState('');
  const [theme,setTheme] = useState(null);
  function filteration () {
    const random = Math.floor(Math.random() * 3).toString()
    let filteredData = [];
    const juniorRange = [6,7,8,9,10];
    const seniorRange = [10,11,12,13,14,15]
    const junior = data[random].filter((course) => juniorRange.every((num)=> num >= course.min_age && num <=course.max_age))
    const senior = data[random].filter((course) => seniorRange.every((num)=> num >= course.min_age && num <=course.max_age))
    filteredData = [junior,senior]
    console.log(filteredData)
    setFiltered(filteredData)
    console.log(random)
    setTheme(random)
    const name = data[random][0].category_name
    setActive(name)
  }
  useEffect(() => {
    filteration();
  },[])
  return (
    <div>
      <Tabs setCateogry={setCateogry} theme={theme} active={active} setActive={setActive}/>
      < CardsContainer filtered={filtered} category={category}/>
    </div>
  );
}

export default App;
