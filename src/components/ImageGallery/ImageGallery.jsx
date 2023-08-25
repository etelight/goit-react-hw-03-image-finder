import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ImageGalleryList>
        {images.map(item => (
          <ImageGalleryItem key={item.id} {...item} />
        ))}
      </ImageGalleryList>
    </div>
  );
};
