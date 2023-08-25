import React, { Component } from 'react';

import {
  ImageGalleryItemStyled,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';
import { ImageModal } from 'components/Modal/Modal';
// export const ImageGalleryItem = ({ item }) => {
//   <>
//     <ImageGalleryItemStyled>
//       <ImageGalleryItemImg src={item.webformatURL} alt={item.tags} />
//     </ImageGalleryItemStyled>
//   </>;
// };

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <ImageGalleryItemStyled>
        <ImageGalleryItemImg
          onClick={this.openModal}
          src={webformatURL}
          alt={tags}
        />
        <ImageModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      </ImageGalleryItemStyled>
    );
  }
}
