import React, { Component } from "react";
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

class App extends Component {
  state = {
    searchQuery: "",
    pageNumber: 1,
    images: [],
    status: Status.IDLE,
    morePageImages: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;

    if (
      prevState.searchQuery === this.state.searchQuery ||
      !this.state.searchQuery
    ) {
      return;
    }

    this.setState({ status: Status.PENDING, pageNumber: 1 });
    try {
      const images = await fetchImages(searchQuery, pageNumber);

      if (images.total === 0) {
        this.setState({
          status: Status.REJECTED,
          error: "ups, no images!",
        });
        return;
      }

      const morePageImages = images.total > IMAGES_PER_PAGE;
      this.setState({
        images: images.hits,
        status: Status.RESOLVED,
        morePageImages,
      });
    } catch (error) {
      this.setState({ error: error.message, status: Status.REJECTED });
    }
  }

  onSearchFormSubmit = (searchQuery) => {
    this.setState({ searchQuery, pageNumber: 1 });

    if (searchQuery === "") {
      this.setState({
        status: Status.REJECTED,
        error: "ups, You need enter yout request!",
      });
    }
  };

  onLoadMoreBtnClick = async () => {
    const { searchQuery, pageNumber } = this.state;
    this.setState({
      status: Status.PENDING,
      pageNumber: pageNumber + 1,
    });

    try {
      const images = await fetchImages(searchQuery, pageNumber + 1);

      this.setState((state) => {
        const newStateImages = [...state.images, ...images.hits];
        const morePageImages = images.total > newStateImages.length;

        return {
          ...state,
          images: newStateImages,
          morePageImages,
          status: Status.RESOLVED,
        };
      });

      scrollDown();
    } catch (error) {
      this.setState({ error: error.message, status: Status.REJECTED });
    }
  };

  render() {
    const { images, morePageImages, status, error } = this.state;

    return (
      <StyledApp>
        <Searchbar>
          <SearchForm getFormData={this.onSearchFormSubmit} />
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
                {morePageImages && (
                  <Button
                    label="Load more"
                    onLoadMoreBtnClick={this.onLoadMoreBtnClick}
                  />
                )}
              </>
            )}
          </Container>
        </Section>
      </StyledApp>
    );
  }
}

export default App;
