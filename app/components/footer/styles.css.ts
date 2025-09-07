import { style } from '@vanilla-extract/css';

export const footer = style({
  marginTop: '2rem',
  padding: '2rem 0 1rem 0',
  borderTop: '1px solid var(--color-border, #e0e0e0)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.5rem',
});
