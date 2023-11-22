import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <Oval
        height={100}
        width={100}
        color="rgb(223, 69, 14)"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(223, 69, 14)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
