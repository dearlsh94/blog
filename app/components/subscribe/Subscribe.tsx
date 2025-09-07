import { SVGIcon } from '../icon/SVGIcon';
import * as styles from './styles.css';

export function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <a
        href="/rss.xml"
        className={styles.iconLink}
        aria-label="RSS 피드"
        target="_blank"
      >
        <SVGIcon.RSS width={20} height={20} />
      </a>
    </div>
  );
}
