import { ContactList } from '~/modules/contact/ContactList';
import { Subscribe } from '../subscribe/Subscribe';
import * as styles from './styles.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactList />
      <Subscribe />
    </footer>
  );
}
