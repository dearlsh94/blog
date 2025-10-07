import { SVGIcon } from '~/components/icon/SVGIcon';
import BlogConfig from '../../../blog.config';
import * as styles from './styles.css';

interface ContactListProps {
  size?: number;
}

export function ContactList({ size = 20 }: ContactListProps) {
  return (
    <div className={styles.rowlist}>
      <Anchor label="GitHub 링크" href={BlogConfig.contacts.github}>
        <SVGIcon.GitHub width={size} height={size} />
      </Anchor>
      <Anchor label="Linkedin 링크" href={BlogConfig.contacts.linkedin}>
        <SVGIcon.LinkedIn width={size} height={size} />
      </Anchor>
      <Anchor label="Brunch 링크" href={BlogConfig.contacts.brunch}>
        <SVGIcon.Brunch width={size} height={size} />
      </Anchor>
    </div>
  )
}
function Anchor({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a className={styles.icon} aria-label={label} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  )
}
