import { SVGIcon } from '../icon/SVGIcon';
import * as styles from './styles.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="/rss.xml" className={styles.iconLink} aria-label="RSS 피드" target="_blank">
          <SVGIcon.RSS />
        </a>
      </div>
    </footer>
  );
} 
