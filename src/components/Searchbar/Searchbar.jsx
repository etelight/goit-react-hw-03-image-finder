import { BsSearch } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';

import {
  Header,
  SearchFormButton,
  SearchFormButtonReset,
  SearchFormInput,
  SearchForm,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <BsSearch size={20} />
        </SearchFormButton>
        <SearchFormInput
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
};
