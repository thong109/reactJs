import { memo, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import HeaderAdmin from '../HeaderAdmin';
import { userStateContext } from '../../../../contexts/ContextProvider';
// import Footer from '../Footer';
import { Button, Layout, Menu, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import SiderAdmin from '../SiderAdmin';
const { Header, Content } = Layout;

const MasterAdminLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);
  const { userToken } = userStateContext();
  const [collapsed, setCollapsed] = useState(false);

  if (!userToken) {
    return <Navigate to={ROUTERS.ADMIN.LOGIN} />;
  }

  return (
    // <>
    //   {!isLoginPage && <HeaderAdmin />}
    //   <main>
    //     <div className="container">
    //       {children}
    //     </div>
    //   </main>
    //   {/* {!isLoginPage && <Footer/>} */}
    // </>
    <Layout>
      <SiderAdmin collapsed={collapsed} />
      <Layout>
        <HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default memo(MasterAdminLayout);
