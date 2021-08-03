import styles from "./MovieSearchForm.module.css";

const MovieSearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <form className={styles.search__form} onSubmit={onSubmit}>
      <input
        className={styles.search__input}
        type="text"
        name="searchQuery"
        value={value}
        onChange={onChange}
      />

      <button className={styles.search__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;
