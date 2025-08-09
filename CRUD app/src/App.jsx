import { useState } from 'react'
import Index from './routes/Index'
import Footer from './layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Index />
      <Footer/>
    </div>
  )
}

export default App
