import React from "react";
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
  ListItem: {},
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
    const displayValue = lastNChars(filePath, 20);
    return (
      <ListItem
        className={classes.ListItem}
        name={filePath}
        value={filePath}
        onClick={() => {
          changeActiveFile(filePath);
        }}
        key={idx}
      >
        <Typography
          name={filePath}
          value={filePath}
          className={classes.Typography}
          variant="body2"
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
