import React from 'react';
import { Button, Spinner } from 'theme-ui';
const size = {
  'sm': '20px',
  'md': '30px'
};

const SButton = React.forwardRef(
  (
    { loading, fullWidth, children, sx, ...props },
    ref
  ) => {
    return (
      <Button
        {...props}
        ref={ref}
        sx={{
          outline: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ':disabled': {
            cursor: 'not-allowed',
          },
          opacity: props.disabled ? 0.5 : 1,
          width: fullWidth ? '100%' : 'initial',
          borderRadius: '4px',
          ...sx,
          fontSize: props.size ? size[props.size] : size['sm']
        }}
      >
        {loading ? <Spinner color="background" size="16" /> : children}
      </Button>
    );
  }
);

export default SButton;