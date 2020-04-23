import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { colors } from "../../services";

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.slate,
    height: "100%",
    width: "20%",
  },
});

const Editor = () => {
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

export default Editor;
