import Dashboard from './pages/Dashboard';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Employee Directory</h1>
      <Dashboard />
    </div>
  );
}

export default App;
