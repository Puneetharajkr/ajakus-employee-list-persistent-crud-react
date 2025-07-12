import React, { useState, useEffect } from 'react';
import { validateForm } from '../utils/validation';

import styles from '../styles/EmployeeForm.module.css';

const EmployeeForm = ({ onSave, selectedEmployee, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    role: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedEmployee) setFormData(selectedEmployee);
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      onSave(formData);
      setFormData({ firstName: '', lastName: '', email: '', department: '', role: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {['firstName', 'lastName', 'email', 'department', 'role'].map(field => (
        <div className={styles.formGroup} key={field}>
          <input
            className={styles.formInput}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && <span className={styles.error}>{errors[field]}</span>}
        </div>
      ))}
      <div className={styles.formButtons}>
        <button className={`${styles.formButton} ${styles.saveButton}`} type="submit">Save</button>
        <button className={`${styles.formButton} ${styles.cancelButton}`} type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
