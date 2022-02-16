import styles from './Header.css';
import { useEntries } from '../../context/PlannerContext';

export default function Header() {
  const { entries } = useEntries();
  const message =
    entries.length > 1
      ? `${entries.length} items left`
      : `${entries.length} item left`;
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      <span>{message}</span>
    </header>
  );
}
