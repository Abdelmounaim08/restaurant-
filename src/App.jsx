import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Table from './page1/tables'
import Commande from './page1/commande'
import Facture from './page2/facture';

import Nav from './page1/navbar';


import Test from './page1/test';

function App() {
  

  return <>
    
    
   
    <div className='dark:bg-gray-700'>
       <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Table/>}/>
     <Route path='/command/:numT/:etat' element={<Commande/>}/>
     <Route path='/ex' element={<Test/>}/>
     <Route path='/facture/:num' element={<Facture/>}/>
     <Route path='/NAV' element={<Nav/>}/>
     </Routes>
      </BrowserRouter >
     
      </div>
      <footer></footer>
  </>
}

export default App;
