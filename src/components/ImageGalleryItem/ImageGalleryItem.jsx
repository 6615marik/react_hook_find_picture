import { Item, Img } from './ImageGalleryItem.styles';
export const ImageGalleryItem = ({ hits, onLargeImage }) => {
  return (
    <>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Item key={id} className="ImageGalleryItem ">
          <Img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={() => onLargeImage({ largeImageURL, tags, id })}
          />
        </Item>
      ))}
    </>
  );
};
