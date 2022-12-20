import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<AllUsers /> } />
        <Route path="/all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
