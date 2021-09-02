import { Component } from "react";
import { createPortal } from "react-dom";
import { StyledOverlay, StyledModal } from "./StyledModal";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.onBackdropClick = this.onBackdropClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.onModalClose();
    }
  };

  onBackdropClick = () => {
    this.props.onModalClose();
  };

  render() {
    return createPortal(
      <StyledOverlay onClick={this.onBackdropClick}>
        <StyledModal onClick={(e) => e.stopPropagation()}>
          {this.props.children}
        </StyledModal>
      </StyledOverlay>,
      modalRoot
    );
  }
}

export default Modal;
