import { useState } from 'react'

const App = () => {
  const [countState, setCountState] = useState({
    name: 'John Doe',
    count: 0
  })

  const handleIncrement = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }
  const handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }

  return (
    <>
      <h1>Name: {countState.name}</h1>
      <h1>Count: {countState.count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default App
