import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import { IMAGES_PER_PAGE, fetchImages } from "../../service/fetchImages";
import { theme, StyledErrorMessage } from "../../StyledCommon";
import Container from "../Container";
import scrollDown from "../../utils/scrollDown";
import SearchForm from "../SearchForm";
import Section from "../Section";
import showGalleryLoader from "../../utils/showGalleryLoader";
import StyledApp from "./StyledApp";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [images, setImages] = useState([]);
  const [moreImagesPerPage, setMoreImagesPerPage] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery !== '') getImages(searchQuery, pageNumber);
  }, [searchQuery, pageNumber]);

  const getImages = (searchQuery, pageNumber) => {
    fetchImages(searchQuery, pageNumber)
      .then((images) => {
      setImages((prevImages) => [...prevImages, ...images.hits]);
  setStatus(Status.RESOLVED);

  if (images.total === 0) {
    setStatus(Status.REJECTED);
    setError('Ups,no images!');
    return;
  }
   
  images.total > IMAGES_PER_PAGE
    ? setMoreImagesPerPage(true)
    : setMoreImagesPerPage(false);
  
  if (pageNumber > 1) {
    scrollDown();
  }
})
    .catch ((error) => {
  setError(error.message);
  setStatus(Status.REJECTED);
   });
};

const onSearchFormSubmit = (searchQuery) => {
  setSearchQuery(searchQuery);
  setImages([]);
  setPageNumber(1);

    if (searchQuery === "") {
      setStatus(Status.REJECTED);
      setError('Ups, enter yor request :)');
    
    }
  };

const onLoadMoreBtnClick = () => {
  setStatus(Status.PENDING);
  setPageNumber((prevPageNumber) => prevPageNumber + 1);
};

    return (
      <StyledApp>
        <Searchbar>
          <SearchForm getFormData={onSearchFormSubmit} />
        </Searchbar>
        <Section theme={theme}>
          <Container>
            {status === "pending" && showGalleryLoader()}
            {status === "rejected" && (
              <StyledErrorMessage>{error}</StyledErrorMessage>
            )}
            {status === "resolved" && (
              <>
                <ImageGallery images={images} />
                {moreImagesPerPage && (
                  <Button
                    label="Load more"
                    onLoadMoreBtnClick={onLoadMoreBtnClick}
                  />
                )}
              </>
            )}
          </Container>
        </Section>
      </StyledApp>
    );
  }


export default App;
