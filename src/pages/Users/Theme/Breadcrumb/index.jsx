import { memo } from 'react';
import './Breadcrumb.scss';
import { ROUTERS } from '../../../../utils/router';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  const { name } = props;

  return (
    <section className="breadcrumb-section set-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>Ogani Shop</h2>
              <div className="breadcrumb__option">
                <Link to={ROUTERS.USER.HOME}>Home</Link>
                <span>{name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}

export default memo(Breadcrumb);
