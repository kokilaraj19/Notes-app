import './utility.css'
import './App.css';
// import { ContextProvider } from './Context/Context';
import { Route,Routes } from 'react-router-dom';
import {Home} from './Pages/Home/Home'
import {Archive} from './Pages/Archive/Archive'
import {Bin} from './Pages/Bin/Bin'

function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/archive' element ={<Archive />} />
         <Route path='/bin' element={<Bin />} />
      </Routes>
    </div>
  );
}

export default App;
