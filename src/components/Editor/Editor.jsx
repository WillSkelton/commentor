import React, { useState } from "react";
import { makeStyles, List } from "@material-ui/core";
import { colors } from "../../services";
import { CodeBlock } from "./";

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
  console.log("Editor Rerender");

  const { files } = props;

  const fileList = Object.keys(files);

  const classes = useStyles();

  // const [scrollBar, setScrollBar] = useState(false);

  // const handleMouseEnter = () => {
  //   setScrollBar(true);
  // };

  // const handleMouseLeave = () => {
  //   setScrollBar(false);
  // };

  const generateFunctions = fileList.map((funcID, idx) => {
    if (idx == 0) {
      console.log("generateFunctions");
    }

    return (
      <CodeBlock
        language={"go"}
        key={funcID}
        contents={files[funcID].Contents}
      ></CodeBlock>
    );
  });

  return (
    <div
      className={classes.root}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // style={{
      //   overflowY: `${scrollBar ? "scroll" : "hidden"}`,
      // }}
    >
      <List component="nav" className={classes.list}>
        {generateFunctions}
      </List>
    </div>
  );
};

export default Editor;
