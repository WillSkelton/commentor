import React, { useState } from "react";
import {
  makeStyles,
  Button,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { getFiles, colors } from "../../services";

const useStyles = makeStyles({
  root: {
    // border: `4px solid ${colors.green}`,
    height: "100%",
    width: "25%",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  ListItem: {
    // border: `1px solid ${colors.green}`,
    margin: "0px 0px",

    "&:hover": {
      border: `1px solid ${colors.green}`,
    },
  },
  Typography: {
    color: colors.white,
  },
});

const lastNChars = (path, n) => {
  if (path.length <= n) {
    return path;
  }
  return `...${path.slice(path.length - n)}`;
};

const FileViewer = (props) => {
  const { updateFiles, files, changeActiveFile, toggleShow } = props;
  const classes = useStyles();

  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const handleClick = () => {
    getFiles("opendirectory", "/home/will/projects/go/src/commentor-backend/")
      .then((res) => {
        updateFiles(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateList = Object.keys(files).map((filePath, idx) => {
    const displayValue = lastNChars(filePath, 30);
    return (
      <ListItem
        className={classes.ListItem}
        onClick={() => {
          changeActiveFile(filePath);
          setActiveFileIndex(idx);
        }}
        key={idx}
        style={{
          border: `${
            activeFileIndex === idx ? `2px solid ${colors.purple}` : ""
          }`,
        }}
      >
        <Typography
          className={classes.Typography}
          variant="body2"
          style={{
            color: `${activeFileIndex === idx ? colors.purple : colors.white}`,
          }}
        >
          {displayValue}
        </Typography>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Choose Folder
      </Button>

      <List>{generateList}</List>
    </div>
  );
};

export default FileViewer;
