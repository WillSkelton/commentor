import React from "react";
import { makeStyles, Button, List, ListItem } from "@material-ui/core";
import { getFiles } from "../../services";

const useStyles = makeStyles({
  root: {
    // border: `4px solid ${colors.green}`,
    height: "100%",
    width: "25%",
    padding: "12px",
  },
});

const FileViewer = (props) => {
  const { updateFiles, changeActiveFile, toggleShow } = props;
  const classes = useStyles();

  const handleClick = () => {
    getFiles("opendirectory", "/home/will/projects/go/src/commentor-backend/")
      .then((res) => {
        updateFiles(res);
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
