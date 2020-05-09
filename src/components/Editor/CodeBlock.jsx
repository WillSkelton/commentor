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
import Highlight from "react-highlight.js";

import { colors, updateFunctionComment } from "../../services";

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
  const { fileID, funcID, contents, language, comment, patchFiles } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(-1);

  const [tfValue, setTFValue] = useState(comment);

  const handleKeyDown = (event) => {
    const { key, ctrlKey, shiftKey } = event;
    if (key === "Enter" && ctrlKey && shiftKey) {
      handleSave();
    } else if (key === "Backspace" && ctrlKey && shiftKey) {
      handleRevert();
    }
  };

  const handleChange = (event) => {
    setTFValue(event.target.value);
  };

  const handleRevert = () => {
    console.log("UNO REVERSE!");
    setTFValue(comment);
  };

  const handleSave = () => {
    console.log(`Here's what I'm going to send: \n${tfValue}`);

    updateFunctionComment("updatefunc", tfValue, fileID, funcID)
      .then((res) => {
        console.log(".then");
        if (res.data) {
          patchFiles(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Collapse key={`text-${funcID}`} in={open === funcID}>
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
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={tfValue}
          ></TextField>
          <div className={classes.Buttons}>
            <Tooltip
              title="Save Comment (ctrl + shift + enter)"
              placement="left"
            >
              <IconButton className={classes.Button} onClick={handleSave}>
                <Save />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Revert Changes (ctrl + shift + backspace)"
              placement="left"
            >
              <IconButton className={classes.Button} onClick={handleRevert}>
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
