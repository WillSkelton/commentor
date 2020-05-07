import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { colors } from "../../services";

// Styles go here. Root is the top component. you can make your own classes here and assign them to components
const useStyles = makeStyles({
  root: {},
});

const FolderSelector = (props) => {
  // Any props that you pass in need to be named and separated by commas between the brackets
  const {} = props;

  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default FolderSelector;
