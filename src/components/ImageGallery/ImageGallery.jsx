import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import StyledImageModal from '../Modal/StyledImageModal'
import StyledImageGallery from './StyledImageGallery';


class ImageGallery extends Component {
  state = {
    showModal: false,
    activeImageIndex: 0,
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
  };
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    setActiveImageIndex = (index) => {
        this.setState({ activeImageIndex: index });
    };

    showLightBox = (index) => {
        this.setActiveImageIndex(index);
        this.toggleModal();
    };

    render() {
        return (
            <>
                <StyledImageGallery>
                    {this.props.images.map((image, index) => (
                        <ImageGalleryItem
                            key={image.id}
                            imagesData={image}
                            onClick={() => this.showLightBox(index)}
                        />
                    ))}
                </StyledImageGallery>
                {this.state.showModal && (
                    <Modal onModalClose={this.toggleModal}>
                        <StyledImageModal
                            src={this.props.images[this.state.activeImageIndex].largeImageURL}
                            alt={this.props.images[this.state.activeImageIndex].tags}
                        />
                    </Modal>
                )}
            </>
        );
    }
}

export default ImageGallery;