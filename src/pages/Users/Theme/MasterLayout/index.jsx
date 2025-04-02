import { memo } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const MasterLayout = ({children}) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}

export default memo(MasterLayout);
