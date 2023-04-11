import { StoreContext, storeDefaultValues } from './lib/provider'
import { useState } from 'react'
import Wizard from './components/Wizard'

function App() {
  const store = useState(storeDefaultValues)

  return (
    <div className="App">
      <StoreContext.Provider value={store}>
        <Wizard />
      </StoreContext.Provider>
    </div>
  )
}

export default App
