import { useState } from 'react'
import './App.css'
import Props from './Components/Props/props'
import { CounterProvider } from './Context/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    sffdsddfs
    {/* <Props></Props> */}

    <CounterProvider>
      <Props/>
     </CounterProvider>
    </>
  )
}

export default App
