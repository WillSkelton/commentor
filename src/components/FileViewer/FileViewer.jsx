import React from "react";
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
  const { updateFiles } = props;
  const classes = useStyles();

  const sort = (files) => {
    let sortedFiles = {};
    Object.keys(files).map((FileID, idx) => {
      if (!sortedFiles[files[FileID].Path]) {
        sortedFiles[files[FileID].Path] = [];
      }
      sortedFiles[files[FileID].Path] = files[FileID].Functions;
    });
    return sortedFiles;
  };

  const handleClick = () => {
    getFiles(
      "opendirectory",
      "/home/will/projects/go/src/commentor-backend/.testDirectories"
    )
      .then((res) => {
        // console.log(res);
        console.log(sort(res));
        updateFiles(sort(res));
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
