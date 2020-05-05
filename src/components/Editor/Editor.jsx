import React from "react";
import { makeStyles, List } from "@material-ui/core";
import { colors } from "../../services";
import { CodeBlock } from "./";
import ScrollArea from "react-scrollbar";

const useStyles = makeStyles({
  root: {
    border: `4px solid ${colors.slate}`,
    height: "100%",
    width: "60%",
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
  const { activeFile } = props;

  console.log(activeFile);

  const functionList = Object.keys(activeFile);

  const classes = useStyles();

  const generateFunctions = functionList.map((funcID, idx) => {
    return (
      <CodeBlock
        key={`block-${funcID}`}
        componentKey={funcID}
        contents={activeFile[funcID].Contents}
        language={"go"}
      ></CodeBlock>
    );
  });

  return (
    <ScrollArea className={classes.root} horizontal={false} speed={0.8}>
      <List component="nav" className={classes.list}>
        {generateFunctions}
      </List>
    </ScrollArea>
  );
};

export default Editor;
