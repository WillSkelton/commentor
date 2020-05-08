import React, { useState } from "react";
import {
  makeStyles,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { getFiles, colors } from "../../services";

import Save from "./Save.jsx";

const useStyles = makeStyles({
  root: {
    borderTop: `2px solid ${colors.slate}`,
    borderBottom: `2px solid ${colors.slate}`,
    borderRight: `1px solid ${colors.slate}`,
    borderLeft: `1px solid ${colors.slate}`,
    boxSizing: "border-box",
    height: "100%",
    width: "25%",
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
  textField: {
    width: "100%",
  },
  textFieldBigInput: {
    width: "100%",
    padding: "0px",
  },
  textFieldLittleInput: {
    backgroundColor: colors.lightGrey,
    padding: "0px",
    width: "100%",
    border: `2px solid ${colors.slate}`,
    borderRadius: "4px",
    minHeight: "40px",
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

  ButtonRow: {
    margin: "8px",
    width: "100%",
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
  const [inputDirectory, setInputDirectory] = useState("");

  const handleClick = () => {
    getFiles("opendirectory", inputDirectory)
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
      <TextField
        placeholder="Type full directory here..."
        className={classes.textField}
        color="secondary"
        variant="outlined"
        inputProps={{
          className: classes.textFieldLittleInput,
        }}
        InputProps={{ className: classes.textFieldBigInput }}
        value={inputDirectory.value}
        onChange={(e) => {
          setInputDirectory(e.target.value);
        }}
      ></TextField>
      <div className={classes.ButtonRow}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Enter Folder
        </Button>
        <Save>
          Save
        </Save>
      </div>
      <List className={classes.List}>{generateList}</List>
    </div>
  );
};

export default FileViewer;
