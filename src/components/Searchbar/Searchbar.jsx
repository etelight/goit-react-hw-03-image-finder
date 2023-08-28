import { BsSearch } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';
import { notifyInputNotValue } from '../Notify/Notify';
import React, { Component } from 'react';

import {
  Header,
  SearchFormButton,
  SearchFormButtonReset,
  SearchFormInput,
  SearchForm,
} from './Searchbar.styled';

// export const SearchBar = ({ onSubmit }) => {
//   return (
// <Header>
//   <SearchForm onSubmit={onSubmit}>
//     <SearchFormButton type="submit">
//       <BsSearch size={20} />
//     </SearchFormButton>
//     <SearchFormInput
//       type="text"
//       name="query"
//       autoFocus
//       placeholder="Search images and photos"
//     />
//     <SearchFormButtonReset type="reset">
//       <FiDelete size={20} />
//     </SearchFormButtonReset>
//   </SearchForm>
// </Header>
//   );
// };
export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newValue = evt.target.elements.query.value;
    if (newValue.trim() === '') {
      notifyInputNotValue();
      return;
    }

    this.props.onSubmit(this.state.query);
    evt.target.reset();
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearch size={20} />
          </SearchFormButton>
          <SearchFormInput
            onChange={this.handleInputChange}
            type="text"
            name="query"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchFormButtonReset type="reset">
            <FiDelete size={20} />
          </SearchFormButtonReset>
        </SearchForm>
      </Header>
    );
  }
}
