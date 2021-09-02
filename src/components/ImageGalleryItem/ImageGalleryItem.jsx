import PropTypes from "prop-types";
import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from "./StyledImageGalleryItem";

const ImageGalleryItem = ({ imagesData, onClick }) => {
  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage
        src={imagesData.webformatURL}
        alt={imagesData.tags}
        onClick={onClick}
      />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  imagesData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
