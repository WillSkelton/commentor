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
    borderTop: `2px solid ${colors.slate}`,
    borderBottom: `2px solid ${colors.slate}`,
    borderRight: `1px solid ${colors.slate}`,
    borderLeft: `1px solid ${colors.slate}`,
    boxSizing: "border-box",
    height: "100%",
    width: "25%",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0px",

    "&:hover": {
      borderTop: `2px solid ${colors.green}`,
      borderBottom: `2px solid ${colors.green}`,
      borderRight: `1px solid ${colors.green}`,
      borderLeft: `1px solid ${colors.green}`,
    },
  },
  List: {
    width: "100%",
  },
  ListItem: {
    // border: `1px solid ${colors.green}`,
    boxSizing: "border-box",
    width: "100%",
    margin: "0px 0px",

    "&:hover": {
      borderTop: `2px solid ${colors.green}`,
      borderBottom: `2px solid ${colors.green}`,

      boxSizing: "border-box",
    },
  },
  Typography: {
    color: colors.white,
  },

  Button: {
    margin: "8px",
  },
});

const lastNChars = (path, n) => {
  if (path.length <= n) {
    return path;
  }
  return `...${path.slice(path.length - n)}`;
};

const FileViewer = (props) => {
  const { updateFiles, files, changeActiveFile } = props;
  const classes = useStyles();

  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const handleClick = () => {
    getFiles("opendirectory", "C:\\Users\\videm\\Downloads\\testDirectories")
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
          borderTop: `${
            activeFileIndex === idx ? `2px solid ${colors.green}` : ""
          }`,
          borderBottom: `${
            activeFileIndex === idx ? `2px solid ${colors.green}` : ""
          }`,
        }}
      >
        <Typography
          className={classes.Typography}
          variant="body2"
          style={{
            color: `${activeFileIndex === idx ? colors.green : colors.white}`,
          }}
        >
          {displayValue}
        </Typography>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <Button
        className={classes.Button}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Choose Folder
      </Button>

      <List className={classes.List}>{generateList}</List>
    </div>
  );
};

export default FileViewer;
