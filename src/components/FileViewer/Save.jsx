import React from "react";
import { makeStyles, Button } from "@material-ui/core";

import { colors } from "../../services";

const useStyles = makeStyles({
  Buttons: {
    marginTop: "8px",
    width: "100%",

    backgroundColor: colors.blue,

    "&:hover": {
      backgroundColor: colors.green,
    },
  },
});

const Save = (props) => {
  const { children } = props;

  const classes = useStyles();

  const handleClick = () => {
    // Request to save all of the updated comments
  };

  return (
    <Button
      className={classes.Buttons}
      variant="contained"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default Save;
