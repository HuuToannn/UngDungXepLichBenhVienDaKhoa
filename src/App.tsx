import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DoctorList from './pages/DoctorList ';
import HomePage from './pages/HomePage';
import GioiThieu from './pages/GioiThieu';
import ScheduleList from './pages/ScheduleList';
import './App.css'; 

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/gioithieu" element={<GioiThieu />} />
              <Route path="/bacsi" element={<DoctorList />} />
              <Route path="/lichtruc" element={<ScheduleList />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
