import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      {/*NavBar*/}
      <main className="relative flex flex-col mt-36 items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
