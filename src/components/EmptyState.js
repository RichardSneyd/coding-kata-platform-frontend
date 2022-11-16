import { Button } from "@mui/material";

const EmptyState = ({ message, action, actionLabel }) => {
  return (
    <>
      <p>{message}</p>
      <Button variant="contained" onClick={action}>
        {actionLabel}
      </Button>
    </>
  );
};
export default EmptyState;
