import React, { useState } from "react";
import { makeStyles, TextField, ListItem, Collapse } from "@material-ui/core";
import { colors } from "../../services";
import Highlight from "react-highlight.js";

const useStyles = makeStyles({
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
  },
});

const CodeBlock = (props) => {
  const { componentKey, contents, language, comment } = props;

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
    <div key={`div-${componentKey}`}>
      <Collapse
        key={`text-${componentKey}`}
        in={open === componentKey}
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
          defaultValue={`${comment ? comment : ""}`}
        ></TextField>
      </Collapse>
      <ListItem
        onClick={() => {
          handleClick(componentKey);
        }}
        className={classes.listItem}
        key={`li-${componentKey}`}
        value={componentKey}
      >
        <Highlight
          key={`code-${componentKey}`}
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
