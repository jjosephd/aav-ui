import { useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const BottomNav = () => {
  const path = useLocation();
  return (
    <div className="fixed bottom-0 w-full">
      <div className="footer-container p-4  bg-purple-900 min-w-screen-xl mx-auto">
        {' '}
        <div className="item-container flex flex-row items-center">
          {path.pathname === '/' ? (
            <p>Welcome to the Home Page</p>
          ) : path.pathname === '/campaigns/kendrick' ? (
            <p>Kendrick Navigation</p>
          ) : path.pathname === '/campaigns/beyonce' ? (
            <p>Beyonce Navigation </p>
          ) : (
            <>
              <div className="links-container flex gap-2">
                <a
                  href="https://www.instagram.com/allamericansvote/"
                  aria-label="instagram-link"
                >
                  <FaInstagram className="h-6 w-6 text-white font-semibold items-center" />
                </a>
                <a
                  href="https://www.linkedin.com/company/all-americans-vote/"
                  aria-label="linkedin-link"
                >
                  <CiLinkedin className="h-6 w-6 text-white font-bold" />
                </a>
              </div>

              <p>Generic Navigation</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
