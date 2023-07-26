
import { useState } from 'react';
import './App.css';
import Mainarea from './components/Mainarea';
import Navbar from './components/Navbar';
import { pageNumber } from './components/Context';
import { cardData } from './components/Context';
import {Route, Routes} from 'react-router-dom';
import Detailpage from './components/Detailpage';
import Search from './components/Search';
import Screenshots from './components/Screenshots';
import Videos from './components/Videos';
import Similargames from './components/Similargame';




function App() {
  const [page, setPage] = useState(1);  //creating state to use in context provider
  const [data, setData] = useState([]);
  console.log("home", page);
  return (
    
    <cardData.Provider value={{data, setData}}>
    <pageNumber.Provider value={{page, setPage}}>     
    <div className="App">
     <Navbar />
     <Routes>
     <Route path='/' element={<Mainarea />} />
     <Route path='/Details/:id' element={<Detailpage />} />
     <Route path = '/Search/:name' element={<Search/>} />
     <Route path = '/Search/' element={<Mainarea />}/>
     <Route path = '/Screenshots/:id' element={<Screenshots />}/>
     <Route path = '/Videos/:id' element={<Videos />}/>
     <Route path = '/Similargames/:id' element={<Similargames />}/>
     
     </Routes>
    </div>
    </pageNumber.Provider>
    </cardData.Provider>

    
  );
}

export default App;

