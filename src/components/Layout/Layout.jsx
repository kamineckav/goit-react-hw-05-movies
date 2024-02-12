import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<p>...Loading page</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
