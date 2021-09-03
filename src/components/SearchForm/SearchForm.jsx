import { useState} from "react";
import PropTypes from "prop-types";
import { StyledSearchForm, StyledSearchFormInput } from "./StyledSearchForm";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as IconSearch } from "../../images/search.svg";

function SearchForm ({getFormData}) {
  const [searchQuery, setSearchQuery] =  useState('');

  const onInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

  getFormData(searchQuery.trim());
    setSearchQuery ("");
  };


    return (
      <StyledSearchForm onSubmit={onFormSubmit}>
        <StyledSearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={onInputChange}
        />
        <IconButton type="submit" ariaLabel="search">
          <IconSearch />
        </IconButton>
      </StyledSearchForm>
    );
}
SearchForm.propTypes = {
    getFormData: PropTypes.func.isRequired,
  }


export default SearchForm;
