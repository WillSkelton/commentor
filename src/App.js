import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { colors, pallet } from "./services";

import { Editor } from "./components/Editor";
import FileViewer from "./components/FileViewer";
import Options from "./components/Options";

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.backgroundGray,
    height: "100%",
    width: "100%",
    position: "absolute",
    left: "0",
    top: "0",
    overflow: "hidden",

    display: "flex",
    flexDirection: "row",
  },
});

const theme = createMuiTheme(pallet);

const App = () => {
  const classes = useStyles();

  const [files, setFiles] = useState({});
  const [activeFile, setActiveFile] = useState({});

  const updateFiles = (newFiles) => {
    setFiles(newFiles);

    const firstFile = Object.values(newFiles)[0];

    if (firstFile) {
      setActiveFile(firstFile);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <FileViewer files={files} updateFiles={updateFiles} />
        <Editor activeFile={activeFile} />
        <Options />
      </div>
    </ThemeProvider>
  );
};

export default App;
