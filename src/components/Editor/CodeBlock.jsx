import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  ListItem,
  Collapse,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { Save, Restore } from "@material-ui/icons";
import { colors } from "../../services";
import Highlight from "react-highlight.js";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      border: `2px solid ${colors.green}`,
    },
  },
  textField: {
    width: "100%",
    borderColor: colors.red,
  },
  textFieldBigInput: {
    width: "100%",
    padding: "0px",
    borderColor: colors.red,
  },
  textFieldLittleInput: {
    backgroundColor: colors.black,
    color: colors.white,
    padding: "0px 4px",
    boxSizing: "border-box",
    width: "100%",
    border: `2px solid ${colors.blue}`,
    borderRadius: "4px",

    "&:hover": {
      border: `2px solid ${colors.green}`,
    },

    minHeight: "96px",
    height: "100%",
  },
  listItem: {
    margin: "0px",
    padding: "0px",
    width: "100%",
    overflowX: "hidden",
  },
  highlight: {
    width: "100%",
    height: "100%",
    margin: "0px",
    borderTop: `1px solid ${colors.slate}`,
    borderBottom: `1px solid ${colors.slate}`,
  },
  collapse: {
    width: "100%",
    height: "100%",
  },
  tfAndButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    color: colors.blue,

    "&:hover": {
      color: colors.green,
    },
  },
});

const CodeBlock = (props) => {
  const { fileID, funcID, contents, language, comment } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(-1);

  const [tfValue, setTFValue] = useState(comment);

  const handleKeyDown = (event) => {
    const { key, ctrlKey, shiftKey } = event;

    if (key === "Enter" && ctrlKey && shiftKey) {
      console.log("Here's What I'm going to send:");
      console.log(event.target.value);
    } else {
      setTFValue(event.target.value);
    }
  };

  const handleCodeBlockClick = (idx) => {
    if (open === idx) {
      setOpen(-1);
    } else {
      setOpen(idx);
    }
  };

  return (
    <div key={`div-${funcID}`} className={classes.root}>
      <Collapse
        key={`text-${funcID}`}
        in={open === funcID}
        // className={classes.collapse}
      >
        {" "}
        <div className={classes.tfAndButtons}>
          <TextField
            placeholder="Add Comment Here"
            multiline
            rowsMax={3}
            className={classes.textField}
            color="secondary"
            variant="outlined"
            inputProps={{
              className: classes.textFieldLittleInput,
            }}
            InputProps={{ className: classes.textFieldBigInput }}
            defaultValue={tfValue}
            onKeyDown={handleKeyDown}
          >
            {comment ? comment : tfValue}
          </TextField>
          <div className={classes.Buttons}>
            <Tooltip title="Save Comment" placement="left">
              <IconButton className={classes.Button}>
                <Save />
              </IconButton>
            </Tooltip>
            <Tooltip title="Revert Changes" placement="left">
              <IconButton className={classes.Button}>
                <Restore />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Collapse>
      <ListItem
        onClick={() => {
          handleCodeBlockClick(funcID);
        }}
        className={classes.listItem}
        key={`li-${funcID}`}
        value={funcID}
      >
        <Highlight
          key={`code-${funcID}`}
          className={classes.highlight}
          language={language}
          styles={{
            "overflow-x": "hidden",
          }}
        >
          {contents}
        </Highlight>
      </ListItem>
    </div>
  );
};

export default CodeBlock;
