import './App.css'
import AddNewUser from './UserTable/AddNewUser';
import UserTable from './UserTable/UserTable';
import AddCategory from './components/table/AddCategory';
import TableFunc from './components/table/TableFunc';
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Role from './components/roles/Role';
import AddRole from './components/roles/AddRole';
import AddBanner from './components/media/AddBanner';
function App() {
  return (
    
    <>
   
    <Home />
      <Routes>
        <Route exact path='/Category' element={<TableFunc/>}></Route>
        <Route exact path='/AddCategory' element={<AddCategory/>}></Route>
        <Route exact path='/Users' element={<UserTable/>}></Route>
        <Route exact path='/AddUser' element={<AddNewUser/>}></Route>
        <Route exact path='/Roles' element={<Role/>}></Route>
        <Route exact path='/AddRole' element={<AddRole/>}></Route>
        <Route exact path ="/Media" element ={<AddBanner/>}></Route>
      </Routes>
    </>
   
  );
}

export default App;
