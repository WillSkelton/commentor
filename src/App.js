import React, { useState } from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { colors } from "./services";

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.backgroundGray,
    height: "100%",
    width: "100%",
    position: "absolute",
    left: "0",
    top: "0",
    overflow: "hidden",
  },
});

const App = () => {
  const [value, setValue] = useState("Howdy Partner!");

  const classes = useStyles();

  const handleClick = () => {
    setValue(value === "Howdy Partner!" ? "Yee Haw!" : "Howdy Partner!");
  };

  return (
    <div className={classes.root}>
      {/* stuff */}
      {/* stuff */}
    </div>
  );
};

export default App;
