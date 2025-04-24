import { useLocation } from 'react-router-dom';

const BottomNav = () => {
  const path = useLocation();
  return (
    <div>
      {path.pathname === '/' ? (
        <p>Welcome to the Home Page</p>
      ) : path.pathname === '/campaigns/kendrick' ? (
        <p>Kendrick Navigation</p>
      ) : path.pathname === '/campaigns/beyonce' ? (
        <p>Beyonce Navigation </p>
      ) : (
        <p>Generic Navigation</p>
      )}
    </div>
  );
};

export default BottomNav;
