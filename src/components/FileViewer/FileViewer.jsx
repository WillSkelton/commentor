import React, { useState } from "react";
import {
  makeStyles,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Tooltip,
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
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
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

    color: colors.white,
  },
  textFieldLittleInput: {
    backgroundColor: colors.black,
    color: colors.white,
    padding: "0px 4px",
    width: "100%",
    border: `2px solid ${colors.slate}`,
    borderRadius: "4px",
    minHeight: "40px",
  },
  helperText: {
    marginLeft: "14px",
    marginRight: "14px",
    color: colors.white,
    fontSize: "0.75rem",
    marginTop: "3px",
    textAlign: "left",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.66",
    letterSpacing: "0.03333em",
  },
  listDiv: {
    width: "100%",
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
  tfAndButtons: {
    marginTop: "8px",
    width: "95%",
  },
  ButtonCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  Buttons: {
    width: "100%",
    backgroundColor: colors.blue,

    "&:hover": {
      backgroundColor: colors.green,
    },
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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputDirectory, setInputDirectory] = useState("");

  const handleClick = () => {
    getFiles("opendirectory", inputDirectory)
      .then((res) => {
        setError(false);
        setErrorMessage("");
        updateFiles(res);
      })
      .catch((err) => {
        setError(true);

        if (err.data) {
          setErrorMessage(err.data);
        } else {
          setErrorMessage(err);
        }
      });
  };

  const handleKeydown = (event) => {
    const { key } = event;
    if (key === "Enter") {
      handleClick();
    }
  };

  const generateList = Object.keys(files).map((fileID, idx) => {
    const filePath = files[fileID].Path;

    const displayValue = lastNChars(filePath, 40);
    return (
      <ListItem
        className={classes.ListItem}
        onClick={() => {
          changeActiveFile(files[fileID]);
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
      <div className={classes.tfAndButtons}>
        <TextField
          autoFocus
          placeholder="Type full directory here..."
          className={classes.textField}
          color="secondary"
          variant="outlined"
          inputProps={{
            className: classes.textFieldLittleInput,
            style: {
              backgroundColor: `${error ? colors.red : colors.black}`,
            },
          }}
          InputProps={{
            className: classes.textFieldBigInput,
            style: {
              backgroundColor: `${error ? colors.white : colors.black}`,
            },
          }}
          value={inputDirectory}
          onChange={(e) => {
            setInputDirectory(e.target.value);
          }}
          helperText={
            error && <p className={classes.helperText}>{errorMessage}</p>
          }
          onKeyDown={handleKeydown}
        ></TextField>
        <div className={classes.ButtonCol}>
          <Tooltip title="Open Director from box (enter)" placement="right">
            <Button
              className={classes.Buttons}
              variant="contained"
              onClick={handleClick}
              style={{
                marginTop: `${error ? "0px" : "8px"}`,
              }}
            >
              Enter Folder
            </Button>
          </Tooltip>
          <Save>Save All</Save>
        </div>
      </div>
      <div className={classes.listDiv}>
        <List className={classes.List}>{generateList}</List>
      </div>
    </div>
  );
};

export default FileViewer;
