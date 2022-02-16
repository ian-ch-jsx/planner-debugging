import { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry, deleteEntry } = useEntries();
  const history = useHistory();

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  const handleDelete = (entry) => {
    deleteEntry(entry);
    history.push('/');
  };

  return (
    <>
      <Link to="/entries" className={styles.backButton}>
        &laquo; Back to Planner
      </Link>
      <article className={styles.entry}>
        <h1>{entry?.title}</h1>
        <p>Due: {entry?.date}</p>
        <p>{entry?.content}</p>
        <button onClick={() => handleDelete(entry)}>Delete</button>
      </article>
    </>
  );
}
