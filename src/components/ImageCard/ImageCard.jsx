import style from './ImageCard.module.css';

const ImageCard = ({ image: { alt_description, urls, color }, onClick }) => {
  return (
    <div
      className={style.imageBox}
      style={{ backgroundColor: color, borderBlock: color }}
    >
      <img
        className={style.imageCard}
        src={urls.small}
        alt={alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
