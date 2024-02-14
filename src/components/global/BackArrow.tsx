import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { HistoryContext } from './HistoryProvider';


interface BackArrowProps {
  warn?: boolean;
  message?: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ warn = false, message = "Going back may cause you to lose unsaved changes."}) => {
  const navigate = useNavigate();
  const { history, removeCurrentEntry } = useContext(HistoryContext);
  const [open, setOpen] = useState(false);

  const handleBack = () => {
    if (warn) {
      setOpen(true);
    } else {
      navigateBack();
    }
  };

  const navigateBack = () => {
    for (let i = history.length - 2; i >= 0; i--) {
      if (history[i].pathname !== history[history.length - 1].pathname) {
        removeCurrentEntry();
        navigate(history[i].pathname, { replace: true });
        return;
      }
    }
    navigate('/', { replace: true });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    setOpen(false);
    navigateBack();
  };

  return (
    <>
      <Button color="info" onClick={handleBack} startIcon={<ArrowBack />}>
        Back
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="warn-dialog-title" aria-describedby="warn-dialog-description">
        <DialogTitle id="warn-dialog-title">{"Are you sure you want to go back?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="warn-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleProceed} color="primary" autoFocus>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BackArrow;
