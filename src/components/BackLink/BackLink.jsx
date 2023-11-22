import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.BackLink} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
