import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import NavBar from './NavBar';
const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <header>
        <NavBar />
      </header>
      <main className="relative flex flex-col mt-36 items-center min-h-screen">
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default Layout;
