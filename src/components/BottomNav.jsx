import { useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="footer-container p-4  bg-purple-900 min-w-screen-xl mx-auto">
        <>
          <div className="links-container flex gap-2 justify-center">
            <a
              href="https://www.instagram.com/allamericansvote/"
              aria-label="instagram-link"
            >
              <FaInstagram className="h-8 w-8 text-white font-semibold items-center" />
            </a>
            <a
              href="https://www.linkedin.com/company/all-americans-vote/"
              aria-label="linkedin-link"
            >
              <CiLinkedin className="h-8 w-8 text-white font-bold" />
            </a>
          </div>
        </>
      </div>
    </div>
  );
};

export default BottomNav;
