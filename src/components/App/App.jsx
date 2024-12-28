import { fetchImages } from '../apiService/images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import './App.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetchImages(query, page)
      .then(({ results, total }) => {
        if (results.length == 0) {
          toast.error('No results found for your search query');
          return;
        }
        setImages(img => [...img, ...results]);
        setTotal(total);
      })
      .catch(err => {
        console.error('Error fetching images:', err);
        toast.error('Error fetching images. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotal(0);
  };

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const handleImageClick = imageUrl => {
    if (!modalOpen) {
      setSelectedImageUrl(imageUrl);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster position="bottom-center" reverseOrder={false} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      <Loader loading={loading} />
      {total > 0 && images.length < total && (
        <LoadMoreBtn onClick={handleLoadMoreBtn}>Load more</LoadMoreBtn>
      )}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImageUrl}
      />
    </>
  );
}

export default App;
