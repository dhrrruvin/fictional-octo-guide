import './App.css'
import { FilterProvider } from './context/FilterContext'
import AppRouter from './routes'

function App() {

  return (
    <>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </>
  )
}

export default App
