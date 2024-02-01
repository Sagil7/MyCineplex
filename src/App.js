import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Showlist from './Components/Showlist/Showlist';
import Showdetail from './Components/Showdetail/Showdetail';
import Moviecard from './Cards/Moviecard/Moviecard';

function App() {
  return (
   <>
   {/* <Moviecard/> */}
    <Routes>
      
        <Route path="/" element={<Showlist />} />
        <Route path="/content/:showId" element={<Showdetail />} />
        
    </Routes>
   </>
   
  );
}

export default App;
