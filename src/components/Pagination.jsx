import styles from '../styles/Dashboard.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className={styles.paginationContainer}>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.paginationButtonActive : ''}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
