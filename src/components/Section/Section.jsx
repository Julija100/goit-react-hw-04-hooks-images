import PropTypes from 'prop-types';
import StyledSection from "./StyledSection";

const Section = ({ title, children }) => {
    return (
      <StyledSection>
        {children}
        {title && <h2>{title}</h2>}
      </StyledSection>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;