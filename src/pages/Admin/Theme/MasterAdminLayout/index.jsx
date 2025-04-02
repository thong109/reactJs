import { memo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import HeaderAdmin from '../HeaderAdmin';
import { userStateContext } from '../../../../contexts/ContextProvider';
// import Footer from '../Footer';

const MasterAdminLayout = ({children}) => {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);
  const { userToken } = userStateContext();

  if(!userToken) {
    return <Navigate to={ROUTERS.ADMIN.LOGIN} />;
  }

  return (
    <>
      {!isLoginPage && <HeaderAdmin/>}
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      {/* {!isLoginPage && <Footer/>} */}
    </>
  );
}

export default memo(MasterAdminLayout);
