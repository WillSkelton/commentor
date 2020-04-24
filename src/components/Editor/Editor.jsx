import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { colors } from "../../services";

const useStyles = makeStyles({
  root: {
    border: `4px solid ${colors.slate}`,

    height: "100%",
    width: "60%",
    padding: "8px",
    boxSizing: "border-box",
  },
  textField: {},
  textFieldBigInput: {},
  textFieldLittleInput: {
    border: `2px solid ${colors.blue}`,
    borderRadius: "4px",
  },
  textFieldInputLabel: {
    color: colors.blue,
    backgroundColor: colors.backgroundGray,
  },
});

const Editor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        variant='outlined'
        color='secondary'
        label='Yeet'
        InputLabelProps={{
          className: classes.textFieldInputLabel,
          shrink: "true",
        }}
        InputProps={{}}
        inputProps={{
          className: classes.textFieldLittleInput,
        }}
      ></TextField>
    </div>
  );
};

export default Editor;
