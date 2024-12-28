import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={style.loadMoreBtn}>
      {children}
    </button>
  );
};
export default LoadMoreBtn;
