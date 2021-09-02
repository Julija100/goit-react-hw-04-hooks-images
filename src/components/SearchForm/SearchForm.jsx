import { Component } from "react";
import PropTypes from "prop-types";
import { StyledSearchForm, StyledSearchFormInput } from "./StyledSearchForm";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as IconSearch } from "../../images/search.svg";

class SearchForm extends Component {
  state = {
    searchQuery: "",
  };

  static propTypes = {
    getFormData: PropTypes.func.isRequired,
  };

  onInputChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase()});
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.getFormData(this.state.searchQuery.trim());
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.onFormSubmit}>
        <StyledSearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searchQuery}
          onChange={this.onInputChange}
        />
        <IconButton type="submit" ariaLabel="search">
          <IconSearch />
        </IconButton>
      </StyledSearchForm>
    );
  }
}

export default SearchForm;
