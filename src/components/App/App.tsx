import {useState, useEffect} from 'react'
import Menu from '../Menu'

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('tree.json')
      .then((res) => res.json())
      .then(setItems)
  }, [])

  return <Menu items={items} />
}

export default App
