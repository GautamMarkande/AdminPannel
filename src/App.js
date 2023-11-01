import './App.css'
import AddNewUser from './UserTable/AddNewUser';
import UserTable from './UserTable/UserTable';
import AddCategory from './components/table/AddCategory';
import TableFunc from './components/table/TableFunc';
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
function App() {
  return (
    
    <>
   
    <Home />
      <Routes>
        <Route exact path='/Category' element={<TableFunc/>}></Route>
        <Route exact path='/AddCategory' element={<AddCategory/>}></Route>
        <Route exact path='/Users' element={<UserTable/>}></Route>
        <Route exact path='/AddUser' element={<AddNewUser/>}></Route>
      </Routes>
    </>
   
  );
}

export default App;
