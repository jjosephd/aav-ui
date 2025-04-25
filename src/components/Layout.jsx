import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import NavBar from './NavBar';
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <NavBar />
      </header>
      <main className="flex-grow pt-24 px-4 pb-84 md:pb-0">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <BottomNav />
      </footer>
    </div>
  );
};

export default Layout;
