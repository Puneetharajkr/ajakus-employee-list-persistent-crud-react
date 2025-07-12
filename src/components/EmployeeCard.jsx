import styles from '../styles/EmployeeCard.module.css';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{employee.firstName} {employee.lastName}</h3>
      <p className={styles.cardDetail}><strong>Email:</strong> {employee.email}</p>
      <p className={styles.cardDetail}><strong>Dept:</strong> {employee.department}</p>
      <p className={styles.cardDetail}><strong>Role:</strong> {employee.role}</p>
      <div className={styles.cardActions}>
        <button className={styles.editButton} onClick={() => onEdit(employee)}>Edit</button>
        <button className={styles.deleteButton} onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
