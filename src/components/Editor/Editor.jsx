import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { colors } from "../../services";
import Highlight from "react-highlight.js";

const useStyles = makeStyles({
  root: {
    border: `4px solid ${colors.slate}`,

    height: "100%",
    width: "60%",
    padding: "8px",
    boxSizing: "border-box",
  },
  textField: {},
  textFieldBigInput: {},
  textFieldLittleInput: {
    border: `2px solid ${colors.slate}`,
    borderRadius: "4px",
  },
});

const code = `
package api

import (
	"fmt"
	"log"
	"net/http"
)

const (
	port         = "42201"
	tempHomePage = \`
	<h1>Welcome to the Commentor Homepage</h1>
	<p>There isn't much here now but there will be soon.</p>
	\`
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint hit: /homepage")
	fmt.Fprintf(w, tempHomePage)
}

func handleRequests() {
	// This tells the server to run the function homePage when a request is sent to
	// "/" which is the home page
	http.HandleFunc("/", homePage)

	fmt.Println("Listening on port: 42201")
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// Start will setup the routes and their respective functions as well as telling the
// server which port to listen on
func Start() {
	handleRequests()
}
`;

const Editor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <TextField
        className={classes.textField}
        variant='outlined'
        color='secondary'
        InputProps={{}}
        inputProps={{
          className: classes.textFieldLittleInput,
        }}
      ></TextField> */}
      <Highlight language={"go"}>{code}</Highlight>
    </div>
  );
};

export default Editor;
