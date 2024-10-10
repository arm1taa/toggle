import './App.css'
import ToggleText from './componets/ToggleText'

const handleSelectClick = (item) => {
  console.log('item', item)
}

function App() {

  return (
    <>
      <ToggleText onClick={handleSelectClick} />
    </>
  )
}

export default App
