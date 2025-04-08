import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Create from './Create';
import Update from './Create';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Member />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )

}

export default App;
