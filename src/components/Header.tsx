import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === '/') {
      return 'Trang chủ';
    } else if (location.pathname === '/gioithieu') {
      return 'Giới thiệu';
    } else if (location.pathname === '/bacsi') {
      return 'Bác sĩ';
    } else if (location.pathname === '/phongkham') {
      return 'Phòng khám';
    } else if (location.pathname === '/lichtruc') {
      return 'Lịch trực';
    }
    return 'Trang chủ';
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Dynamic title based on current route */}
        <h1 className="text-2xl font-bold">{getTitle()}</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:bg-blue-700 px-4 py-2 rounded">
            Trang chủ
          </Link>
          <Link to="/gioithieu" className="hover:bg-blue-700 px-4 py-2 rounded">
            Giới thiệu
          </Link>
          <Link to="/bacsi" className="hover:bg-blue-700 px-4 py-2 rounded">
            Bác sĩ
          </Link>
          <Link to="/phongkham" className="hover:bg-blue-700 px-4 py-2 rounded">
            Phòng khám
          </Link>
          <Link to="/lichtruc" className="hover:bg-blue-700 px-4 py-2 rounded">
            Lịch trực
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
