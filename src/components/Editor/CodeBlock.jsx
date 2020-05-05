import React, { useState } from "react";
import { makeStyles, TextField, ListItem, Collapse } from "@material-ui/core";
import { colors } from "../../services";
import Highlight from "react-highlight.js";

const useStyles = makeStyles({
  root: {
    border: `4px solid ${colors.slate}`,
    height: "100%",
    width: "60%",
    boxSizing: "border-box",
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
  list: {
    padding: "0px",
    width: "100%",
    height: "100%",
  },
  listItem: {
    margin: "0px",
    padding: "0px",
    width: "100%",
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
  },
});

const CodeBlock = (props) => {
  const { key, contents, language } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(-1);

  const handleClick = (idx) => {
    if (open === idx) {
      setOpen(-1);
    } else {
      setOpen(idx);
    }
  };

  return (
    <div key={`div-${key}`}>
      <Collapse
        key={`text-${key}`}
        in={open === key}
        // className={classes.collapse}
      >
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
        ></TextField>
      </Collapse>
      <ListItem
        onClick={() => {
          handleClick(key);
        }}
        className={classes.listItem}
        key={`li-${key}`}
        value={key}
      >
        <Highlight
          key={`code-${key}`}
          className={classes.highlight}
          language={language}
        >
          {contents}
        </Highlight>
      </ListItem>
    </div>
  );
};

export default CodeBlock;
