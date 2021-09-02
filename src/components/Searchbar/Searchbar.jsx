import PropTypes from 'prop-types';
import { StyledSearchbar } from './StyledSearchbar';

const Searchbar = ({ children }) => {
    return <StyledSearchbar>{children}</StyledSearchbar>
};

Searchbar.propTypes = {
    children: PropTypes.node,
};

export default Searchbar;