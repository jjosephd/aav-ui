import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      {/*NavBar*/}
      <main className="relative flex flex-col mt-36 items-center">
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default Layout;
