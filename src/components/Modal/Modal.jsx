import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  StyledModalImg,
  StyledItemBottomWrapper,
  StyledImageTag,
  StyledCloseButton,
} from './Modal.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',

    overflow: 'hidden',
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#ffffff90',
  },
};

Modal.setAppElement('#root');

export class ImageModal extends Component {
  state = {
    imageLoaded: false,
  };

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && !prevProps.isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!this.props.isOpen && prevProps.isOpen) {
      document.body.style.overflow = 'auto';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const { isOpen, onRequestClose, tags, largeImageURL } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <StyledCloseButton onClick={onRequestClose}>
          <AiOutlineClose />
        </StyledCloseButton>
        <StyledModalImg
          src={largeImageURL}
          alt={tags}
          onLoad={this.handleImageLoad}
        />

        <StyledItemBottomWrapper>
          <StyledImageTag>{tags}</StyledImageTag>
        </StyledItemBottomWrapper>
      </Modal>
    );
  }
}
