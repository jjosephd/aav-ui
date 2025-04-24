import { useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const BottomNav = () => {
  const path = useLocation();
  return (
    <div>
      <div className="footer-container p-6 w-screen bg-purple-900">
        <div className="item-container flex flex-row items-center">
          {path.pathname === '/' ? (
            <p>Welcome to the Home Page</p>
          ) : path.pathname === '/campaigns/kendrick' ? (
            <p>Kendrick Navigation</p>
          ) : path.pathname === '/campaigns/beyonce' ? (
            <p>Beyonce Navigation </p>
          ) : (
            <>
              <a
                href="https://www.instagram.com/allamericansvote/"
                aria-label="instagram-link"
              >
                <FaInstagram className="h-6 w-6 text-white" />
              </a>
              <p>Generic Navigation</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
