import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'login'
  | 'signup'
  | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

// Map variants to Bootstrap classes. User requested outline classes like
// `btn btn-outline-primary` etc. We'll use those for the named variants.
const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'btn btn-outline-primary',
  secondary: 'btn btn-outline-secondary',
  success: 'btn btn-outline-success',
  danger: 'btn btn-outline-danger',
  warning: 'btn btn-outline-warning',
  info: 'btn btn-outline-info',
  light: 'btn btn-outline-light',
  dark: 'btn btn-outline-dark',
  // `login` uses an outline primary look
  login: 'btn btn-outline-primary',
  // `signup` uses a filled primary button to differentiate
  signup: 'btn btn-primary',
  // ghost maps to a dark outline by default
  ghost: 'btn btn-outline-dark',
};

const Button: React.FC<ButtonProps> = ({ to, variant = 'primary', className = '', children, ...rest }) => {
  const classes = `${VARIANT_CLASSES[variant]} ${className}`.trim();

  if (to) {
    return (
      <RouterLink to={to} className={classes}>
        {children}
      </RouterLink>
    );
  }

  return (
    <button {...(rest as any)} className={classes}>
      {children}
    </button>
  );
};

export default Button;
