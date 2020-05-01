import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { colors, getFiles } from "../../services";

const useStyles = makeStyles({
  root: {
    // border: `4px solid ${colors.green}`,
    height: "100%",
    width: "20%",
  },
});

const FileViewer = () => {
  const classes = useStyles();

  const handleClick = () => {
    getFiles(
      "opendirectory",
      "C:\\Users\\Willi\\projects\\wsu\\322-commentor\\src"
    ).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary' onClick={handleClick}>
        Yeet
      </Button>
    </div>
  );
};

export default FileViewer;
