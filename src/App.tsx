import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DoctorList from './pages/DoctorList ';
// import ClinicList from './pages/ClinicList';
// import SpecialtyList from './pages/SpecialtyList';
// import ScheduleList from './pages/ScheduleList';
// import ShiftList from './pages/ShiftList';
import HomePage from './pages/HomePage';
import GioiThieu from './pages/GioiThieu';
import ScheduleList from './pages/ScheduleList';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-4">
            <Routes>
            <Route path="/gioithieu" element={<GioiThieu />} />
              <Route path="/bacsi" element={<DoctorList />} />
              {/* <Route path="/phongkham" element={<ClinicList />} /> */}
              {/* <Route path="/chuyenkhoa" element={<SpecialtyList />} /> */}
              <Route path="/lichtruc" element={<ScheduleList />} />
              {/* <Route path="/catruc" element={<ShiftList />} /> */}
              {/* Thêm route mặc định hoặc route chính nếu cần */}
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
