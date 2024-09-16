import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUserMd, faClinicMedical, faCalendarDay, faCalendarAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 shadow-lg transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
      >
        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
      </button>
      <div className="mt-8">
        <ul className="space-y-4">
          <li>
            <Link
              to="/gioithieu"
              className={`flex items-center p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors ${
                !isOpen ? 'justify-center' : ''
              }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className={`${isOpen ? 'mr-4' : ''}`} />
              {isOpen && <span>Giới thiệu</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/bacsi"
              className={`flex items-center p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors ${
                !isOpen ? 'justify-center' : ''
              }`}
            >
              <FontAwesomeIcon icon={faUserMd} className={`${isOpen ? 'mr-4' : ''}`} />
              {isOpen && <span>Bác sĩ</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/phongkham"
              className={`flex items-center p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors ${
                !isOpen ? 'justify-center' : ''
              }`}
            >
              <FontAwesomeIcon icon={faClinicMedical} className={`${isOpen ? 'mr-4' : ''}`} />
              {isOpen && <span>Phòng khám</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/catruc"
              className={`flex items-center p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors ${
                !isOpen ? 'justify-center' : ''
              }`}
            >
              <FontAwesomeIcon icon={faCalendarDay} className={`${isOpen ? 'mr-4' : ''}`} />
              {isOpen && <span>Ca trực</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/lichtruc"
              className={`flex items-center p-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors ${
                !isOpen ? 'justify-center' : ''
              }`}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className={`${isOpen ? 'mr-4' : ''}`} />
              {isOpen && <span>Lịch trực</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
