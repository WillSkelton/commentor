import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { getFiles } from "../../services";

const useStyles = makeStyles({
  root: {
    // border: `4px solid ${colors.green}`,
    height: "100%",
    width: "20%",
  },
});

const FileViewer = (props) => {
  const { updateEditor, files } = props;
  const classes = useStyles();

  const handleClick = () => {
    getFiles(
      "opendirectory",
      "/home/will/projects/go/src/commentor-backend/.testDirectories"
    )
      .then((res) => {
        console.log("here");
        updateEditor(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Yeet
      </Button>
    </div>
  );
};

export default FileViewer;
