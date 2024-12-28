import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.galleryList}>
      {images.map((image) => (
        <li
          key={image.id}
          className={style.galleryItem}
          onClick={() => onImageClick(image.urls.regular)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
