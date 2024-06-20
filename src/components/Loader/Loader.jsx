import { RotatingLines } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <p className={style.loader}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass={style.loaderCss}
      />
    </p>
  );
};
export default Loader;
