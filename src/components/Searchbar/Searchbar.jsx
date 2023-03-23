import { useState } from 'react';
import { Input, Form, Header } from './Searchbar.styles';
export const SerchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const inputText = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Еnter a name to search for a picture');
    } else {
      onSubmit(inputValue);
    }
    setInputValue('');
  };
  const inputChange = e => {
    const { value } = e.target;

    setInputValue(value);
  };
  return (
    <Header>
      <Form onSubmit={inputText}>
        <button type="submit" className="SearchForm-button">
          <span className="Search">Search</span>
        </button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={inputChange}
        />
      </Form>
    </Header>
  );
};
