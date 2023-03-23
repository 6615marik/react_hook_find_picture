import { useState, useEffect } from 'react';
import { SerchBar } from './Searchbar/Searchbar';
import { fethAPI } from './Searchbar/fetchAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [hits, setHits] = useState([]);
  const [setError] = useState('');
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pictureinfo, setPictureinfo] = useState({});

  useEffect(() => {
    if (inputValue) {
      setLoading(true);
      fethAPI(inputValue, page)
        .then(data => {
          setHits(prev => [...prev, ...data.hits]);
          if (data.hits.length < 12) {
            setLoad(false);
          } else {
            setLoad(true);
          }
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, [inputValue, page, setError]);

  const dataInput = data => {
    console.log(data);
    setInputValue(data);
    setHits([]);
    setPage(1);
  };
  const handlerLoadMore = () => {
    setLoading(true);
    setPage(prev => prev + 1);
  };
  const clickLargeImage = ({ largeImageURL, tags, id }) => {
    setPictureinfo({ largeImageURL, tags, id });
    togleModal();
  };

  const togleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <SerchBar onSubmit={dataInput} />
      {loading && <Loader />}
      <ImageGallery>
        <ImageGalleryItem hits={hits} onLargeImage={clickLargeImage} />
      </ImageGallery>
      {showModal && <Modal img={pictureinfo} onClose={togleModal} />}
      {load && <Button onClick={handlerLoadMore} />}
      {load && loading && <Loader />}
    </>
  );
};
