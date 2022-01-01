import logo from './logo.svg';
import './App.css';
import './sbadmin.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import StudentList from './StudentList';
import AttendenceList from './AttendenceList';
import AddAttendence from './AddAttendence';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/student-list" element={<StudentList/>}></Route>
            <Route path="/student-list/:id" element={<AttendenceList/>}></Route>
            <Route path="/add-attendence/:id" element={<AddAttendence/>}></Route>


          </Routes>
        </div>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
