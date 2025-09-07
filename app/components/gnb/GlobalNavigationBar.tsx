import { NavLink } from 'react-router';
import * as styles from './styles.css';

export function GlobalNavigationBar() {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <GNBLink to="/">Home</GNBLink>
        <GNBLink to="/articles">Articles</GNBLink>
      </ul>
    </nav>
  );
}

function GNBLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li className={styles.listItem}>
      <NavLink className={styles.link} prefetch='render' to={to}>{children}</NavLink>
    </li>
  ) 
}
