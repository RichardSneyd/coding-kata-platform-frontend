import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { HistoryContext } from "./HistoryProvider";

const BackArrow: React.FC = () => {
    const navigate = useNavigate();
    const {history, removeCurrentEntry} = useContext(HistoryContext);
  
    const handleBack = () => {
      // Iterate backwards through the history array
      for (let i = history.length - 2; i >= 0; i--) {
        if (history[i].pathname !== history[history.length - 1].pathname) {
          // Navigate to the last unique location
          removeCurrentEntry();
          navigate(history[i].pathname, { replace: true });
          return;
        }
      }
      // Fallback if no unique history entry is found
      navigate('/', { replace: true });
    };
  
    return (
      <Button color="info" onClick={handleBack} startIcon={<ArrowBack />}>
        Back
      </Button>
    );
};

export default BackArrow;
