import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Bộ Lọc</h2>
      <ul className="space-y-4">
      <li>
          <Link 
            to="/gioithieu" 
            className="block p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link 
            to="/bacsi" 
            className="block p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Bác sĩ
          </Link>
        </li>
        <li>
          <Link 
            to="/phongkham" 
            className="block p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Phòng khám
          </Link>
        </li>
        <li>
          <Link 
            to="/catruc" 
            className="block p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Ca trực
          </Link>
        </li>
        <li>
          <Link 
            to="/lichtruc" 
            className="block p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Lịch trực
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
