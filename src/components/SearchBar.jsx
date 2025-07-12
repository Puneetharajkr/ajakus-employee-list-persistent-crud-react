import styles from '../styles/SearchBar.module.css';
const SearchBar = ({ onSearch }) => {
   return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search by name or email..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
