import { style } from '@vanilla-extract/css';

export const footer = style({
  marginTop: '2rem',
  padding: '2rem 0 1rem 0',
  borderTop: '1px solid var(--color-border, #e0e0e0)',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const iconContainer = style({
  display: 'flex',
  gap: '1rem',
});

export const iconLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  color: 'var(--color-text-secondary, #666)',
  textDecoration: 'none',
  borderRadius: '4px',
}); 
