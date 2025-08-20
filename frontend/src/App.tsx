import './App.css'
import Filter from './components/mycomponents/filter'
import Navbar from './components/mycomponents/navbar'

function App() {

  return (
    <>
      <div className="bg-[#FFF5EE] w-full min-h-screen">
          <Navbar />
          <Filter />
      </div>
    </>
  )
}

export default App
