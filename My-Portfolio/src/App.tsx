import './App.css'
import MainHome from './Components/MainHome'
import Experties from './Components/Experties'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0a0908] p-30
      scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
      <MainHome />
      <Experties />
      <Projects />
      <Contacts />
    </div>
    )
}

export default App
