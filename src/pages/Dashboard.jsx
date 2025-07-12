// 📂 src/pages/Dashboard.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { mockEmployees } from '../assets/mockData';
import EmployeeCard from '../components/EmployeeCard';
import EmployeeForm from '../components/EmployeeForm';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import Pagination from '../components/Pagination';
import styles from '../styles/Dashboard.module.css';

const LOCAL_STORAGE_KEY = 'employeeData';

const Dashboard = () => {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : mockEmployees;
  });

  const [editing, setEditing] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ firstName: '', department: '', role: '' });
  const [sortBy, setSortBy] = useState({ field: '', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  // 🧠 Persist employee data to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const handleAddClick = () => {
    setEditing(null);
    setFormVisible(true);
  };

  const handleSave = (emp) => {
    if (emp.id) {
      setEmployees(prev => prev.map(e => e.id === emp.id ? emp : e));
    } else {
      emp.id = Date.now();
      setEmployees(prev => [emp, ...prev]);
    }
    setEditing(null);
    setFormVisible(false);
  };

  const handleEdit = (emp) => {
    setEditing(emp);
    setFormVisible(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this employee?')) {
      setEmployees(prev => prev.filter(e => e.id !== id));
    }
  };

  const applyFilters = (f) => {
    setFilters(f);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ firstName: '', department: '', role: '' });
    setCurrentPage(1);
  };

  const handleSearch = (q) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    setSortBy(prev => {
      const direction = prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc';
      return { field, direction };
    });
  };

  const handleReset = () => {
    if (confirm('Reset all data to default mock list?')) {
      setEmployees(mockEmployees);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockEmployees));
      setCurrentPage(1);
    }
  };

  const processed = useMemo(() => {
    let data = [...employees];

    if (filters.firstName) {
      data = data.filter(e => e.firstName.toLowerCase().includes(filters.firstName.toLowerCase()));
    }
    if (filters.department) {
      data = data.filter(e => e.department.toLowerCase().includes(filters.department.toLowerCase()));
    }
    if (filters.role) {
      data = data.filter(e => e.role.toLowerCase().includes(filters.role.toLowerCase()));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data = data.filter(e =>
        e.firstName.toLowerCase().includes(q) ||
        e.lastName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q)
      );
    }

    if (sortBy.field) {
      data.sort((a, b) => {
        const fa = a[sortBy.field].toLowerCase();
        const fb = b[sortBy.field].toLowerCase();
        if (fa < fb) return sortBy.direction === 'asc' ? -1 : 1;
        if (fa > fb) return sortBy.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [employees, filters, searchQuery, sortBy]);

  const totalPages = Math.ceil(processed.length / perPage);
  const paginated = processed.slice((currentPage - 1) * perPage, currentPage * perPage);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [totalPages, currentPage]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h2>Employee Directory</h2>
        <div className={styles.headerButtons}>
          <button className={styles.addButton} onClick={handleAddClick}>
            Add Employee
          </button>
          <button className={styles.resetButton} onClick={handleReset}>
            Reset to Default Emp Data
          </button>
        </div>
      </div>

      <div className={styles.controls}>
        <SearchBar onSearch={handleSearch} />
        <div className={styles.sortButtons}>
          <button className={styles.sortButton} onClick={() => handleSort('firstName')}>
            Sort by First Name {sortBy.field === 'firstName' ? `(${sortBy.direction})` : ''}
          </button>
          <button className={styles.sortButton} onClick={() => handleSort('department')}>
            Sort by Department {sortBy.field === 'department' ? `(${sortBy.direction})` : ''}
          </button>
        </div>
      </div>

      <FilterSidebar onApplyFilters={applyFilters} onClearFilters={clearFilters} />

      {isFormVisible && (
        <EmployeeForm
          selectedEmployee={editing}
          onSave={handleSave}
          onCancel={() => {
            setEditing(null);
            setFormVisible(false);
          }}
        />
      )}

      <div className={styles.employeeGrid}>
        {paginated.map(emp => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
