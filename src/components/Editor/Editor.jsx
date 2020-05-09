import React from "react";
import { makeStyles, List } from "@material-ui/core";
import { colors } from "../../services";
import { CodeBlock } from "./";

const useStyles = makeStyles({
  root: {
    borderTop: `2px solid ${colors.slate}`,
    borderBottom: `2px solid ${colors.slate}`,
    borderRight: `2px solid ${colors.slate}`,
    borderLeft: `1px solid ${colors.slate}`,
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    overflow: "auto",
    backgroundColor: colors.black,
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

const Editor = (props) => {
  const { activeFile, patchFiles } = props;

  const functionList = activeFile.Functions
    ? Object.keys(activeFile.Functions)
    : [];

  const classes = useStyles();

  const generateFunctions = functionList.map((funcID) => {
    const comment = activeFile.Functions[funcID].Comment.replace(/\/{2} /g, "");

    return (
      <CodeBlock
        patchFiles={patchFiles}
        key={`block-${funcID}`}
        fileID={activeFile.FileID}
        funcID={funcID}
        contents={activeFile.Functions[funcID].Contents}
        comment={comment}
        language={activeFile.Lang.Extension}
      ></CodeBlock>
    );
  });

  return (
    <div className={classes.root}>
      <List component="nav" className={classes.list}>
        {generateFunctions}
      </List>
    </div>
  );
};

export default Editor;
