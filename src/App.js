import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  IconButton,
} from "@material-ui/core";
import { MenuOpen, Menu } from "@material-ui/icons";
import { colors, pallet } from "./services";

import { Editor } from "./components/Editor";
import { FileViewer } from "./components/FileViewer";

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.black,
    height: "100%",
    width: "100%",
    position: "absolute",
    left: "0",
    top: "0",
    overflow: "hidden",

    display: "flex",
    flexDirection: "row",
  },
  MenuButtonContainer: {
    borderTop: `2px solid ${colors.slate}`,
    borderBottom: `2px solid ${colors.slate}`,
    borderRight: `1px solid ${colors.slate}`,
    borderLeft: `2px solid ${colors.slate}`,

    width: "36px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  MenuButton: {
    color: colors.blue,
    "&:hover": {
      color: `${colors.green}`,
    },
  },
});

const theme = createMuiTheme(pallet);

const App = () => {
  const classes = useStyles();

  const [files, setFiles] = useState({});
  const [activeFile, setActiveFile] = useState({});
  const [showFiles, setShowFiles] = useState(true);

  const toggleShow = () => {
    setShowFiles(!showFiles);
  };

  const changeActiveFile = (file) => {
    setActiveFile(file);
  };

  const updateFiles = (newFiles) => {
    // newFiles = {
    //   FileID: {
    //     Path: "",
    //     ...
    //   }
    // }

    setFiles(newFiles);

    const firstFile = Object.values(newFiles)[0];

    // console.log(newFiles[24]);
    // console.log(firstFile);

    if (firstFile) {
      setActiveFile(firstFile);
    }
  };

  const patchFiles = (newFile) => {
    // newFile ={
    //   Path: "",
    //   FileID: ,
    //   ...
    // }
    const updatedFiles = files;
    updatedFiles[newFile.FileID] = newFile;
    setFiles(updatedFiles);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.MenuButtonContainer}>
          <IconButton
            className={classes.MenuButton}
            // color="primary"
            onClick={toggleShow}
          >
            {showFiles ? <MenuOpen></MenuOpen> : <Menu></Menu>}
          </IconButton>
        </div>
        {showFiles && (
          <FileViewer
            files={files}
            changeActiveFile={changeActiveFile}
            updateFiles={updateFiles}
          />
        )}
        <Editor patchFiles={patchFiles} activeFile={activeFile} />
      </div>
    </ThemeProvider>
  );
};

export default App;
