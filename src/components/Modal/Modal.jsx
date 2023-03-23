/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Owerlay, Modall, Buttonn } from './Modal.styled';
export const Modal = ({ onClose, img }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [handleClick]);

  function handleClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
    if (e.code === 'Escape') {
      onClose();
    }
  }
  return (
    <Owerlay>
      <Modall>
        <img src={img.largeImageURL} alt={img.tags} />
      </Modall>
      <Buttonn type="button" onClick={handleClick}>
        Close
      </Buttonn>
    </Owerlay>
  );
};
