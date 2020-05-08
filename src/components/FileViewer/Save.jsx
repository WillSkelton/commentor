import React from "react";
import {
  makeStyles,
  Button,
} from "@material-ui/core";

const Save = (props) => {
  const { children } = props;
  
  const handleClick = () => {
    // Request to save all of the updated comments
  };
  
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export default Save;