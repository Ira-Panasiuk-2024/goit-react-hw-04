import Modal from "react-modal";
import style from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      ariaHideApp={false}
      className={style.modalContent}
      overlayClassName={style.modalOverlay}
    >
      <img src={imageUrl} alt="Large Image" className={style.modalImage} />
    </Modal>
  );
};
export default ImageModal;
