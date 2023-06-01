import { Button, ButtonProps, Box } from '@mui/material';

const StyledButton: React.FC<ButtonProps> = ({children, ...props}) => (
  <Box my={1}>
    <Button {...props}>
      {children}
    </Button>
  </Box>
);

export default StyledButton;