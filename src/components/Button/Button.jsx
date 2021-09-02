import PropTypes from 'prop-types';
import { StyledButton, StyledSearchFormButtonLabel } from './StyledButton'

const Button = ({ label, onLoadMoreBtnClick }) => {
  return (
    <StyledButton onClick={onLoadMoreBtnClick}>
      <StyledSearchFormButtonLabel />
      {label}
      <StyledSearchFormButtonLabel />
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onLoadMoreBtnClick: PropTypes.func.isRequired,
};

export default Button;