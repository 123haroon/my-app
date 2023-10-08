import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import { Header1 } from 'antd/es/layout/layout';
// import SidebarMenu from './Header/Header';
import Login from './Component/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header1 from './Header/Header';
import Data from './Component/Dash/Data';
import Course from './Component/Courses/Course';
import Students from './Component/Student/Students';


// import Data from './Component/Dash/Data';

function App() {
  return (
    <>

      <BrowserRouter>

        <Header1 />
        <Routes >
          <Route path='/Login' element={<Login />} />
          <Route path='/data' element={<Data />} />
          <Route path='/courses' element={<Course/>} />
          <Route path='/students' element={<Students/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
