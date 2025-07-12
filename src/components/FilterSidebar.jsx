import React, { useState } from 'react';

import styles from '../styles/FilterSidebar.module.css';

const FilterSidebar = ({ onApplyFilters, onClearFilters }) => {
  const [filters, setFilters] = useState({
    firstName: '',
    department: '',
    role: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleClear = () => {
    setFilters({ firstName: '', department: '', role: '' });
    onClearFilters();
  };

    return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter Employees</h3>
      
      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <input
            className={styles.filterInput}
            type="text"
            name="firstName"
            placeholder="Filter by First Name"
            value={filters.firstName}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.filterGroup}>
          <input
            className={styles.filterInput}
            type="text"
            name="department"
            placeholder="Filter by Department"
            value={filters.department}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.filterGroup}>
          <input
            className={styles.filterInput}
            type="text"
            name="role"
            placeholder="Filter by Role"
            value={filters.role}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className={styles.filterButtons}>
        <button className={`${styles.filterButton} ${styles.applyButton}`} onClick={handleApply}>
          Apply
        </button>
        <button className={`${styles.filterButton} ${styles.clearButton}`} onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
