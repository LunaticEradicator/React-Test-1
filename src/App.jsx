import './App.css'

// import Link from './component/Link'
import Sidebar from './component/Sidebar'
import Route from './component/Route'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import CountPage from './component/CountPage'

function App() {

  return (
    <div className='app'>
      <Sidebar></Sidebar>

      <div className='pageContent'>
        {/*  used to render site when state changes */}
        <Route path="/"><DropdownPage /></Route>
        <Route path="/accordion"><AccordionPage /></Route>
        <Route path="/button"><ButtonPage /></Route>
        <Route path="/modal"><ModalPage /></Route>
        <Route path="/table"><TablePage /></Route>
        <Route path="/count"><CountPage defaultValue={10} /></Route>
      </div>
    </div>
  )
}

export default App
