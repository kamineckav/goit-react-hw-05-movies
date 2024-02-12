import css from './SearchForm.module.css';

const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value.toLowerCase().trim();
    setSearchParams({ querty: inputValue });
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
