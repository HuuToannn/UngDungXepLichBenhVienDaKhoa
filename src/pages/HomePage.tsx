import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faSync } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Hệ thống Quản lý Lịch Trực</h2>
      
      <p className="text-lg text-gray-700 text-center mb-8">
        Ứng dụng giúp quản lý lịch trực hiệu quả, dễ dàng và thuận tiện cho bệnh viện.
      </p>

      {/* Section: Tính năng chính */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Tính năng chính</h3>
        <ul className="space-y-4 text-gray-600">
          <li>✔️ Quản lý lịch trực cho bác sĩ và nhân viên y tế</li>
          <li>✔️ Điều chỉnh, cập nhật lịch trực dễ dàng</li>
          <li>✔️ Thông báo và nhắc nhở lịch trực</li>
          <li>✔️ Giao diện trực quan, dễ sử dụng</li>
        </ul>
      </div>

      {/* Section: Công nghệ sử dụng */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Công nghệ sử dụng</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-medium">
              <FontAwesomeIcon icon={faReact} className="text-blue-600 mr-2" /> React.js
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-medium">
              <FontAwesomeIcon icon={faCss3Alt} className="text-blue-600 mr-2" /> Tailwind CSS
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-medium">
              <FontAwesomeIcon icon={faSync} className="text-blue-600 mr-2" /> Axios
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-medium">
              <FontAwesomeIcon icon={faSync} className="text-blue-600 mr-2" /> React Query
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-medium">
              <FontAwesomeIcon icon={faNodeJs} className="text-blue-600 mr-2" /> Node.js & Express
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-xl font-medium">
              <FontAwesomeIcon icon={faDatabase} className="text-blue-600 mr-2" /> Atlas MongoDB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
