import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { colors } from "../../services";

const useStyles = makeStyles({
  root: {
    // border: `4px solid ${colors.green}`,
    height: "100%",
    width: "20%",
  },
});

const FileViewer = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default FileViewer;