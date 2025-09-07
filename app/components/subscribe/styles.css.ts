import { style } from '@vanilla-extract/css';

export const subscribe = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
});

export const iconLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-secondary, #666)',
  textDecoration: 'none',
  borderRadius: '4px',
});
