
import { useState } from 'react'
import Create from './create'
import Home from './Home'
import Nav from './Nav'
import Show from './show'
import Filter from './Filter'
import { Route,Routes } from 'react-router-dom'



const App = () => {

  


  return (
    <div>

     
      <Nav/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/create' element={<Create/>}/>
  <Route path='/show' element={<Show/>}/>
  <Route path='/Filter' element={<Filter/>}/>

</Routes>
    </div>
  )
}

export default App