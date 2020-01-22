// Import react and a function from the react package called useState
import React, { useState } from "react";
// Import the functions Button and Typography from the material-ui/core package
import { Button, Typography } from "@material-ui/core";

// In javascript, you can define a function a few different ways:
//   - function <functionName>(<params>){}  // This is like c/c++ syntax. In addition, functions
//     defined like this are "hoisted" to the top of the file when it's run so you never have to
//     worry about calling them before they're defined
//   - const <functionName> = function(<params>){} // this stores the function in a variable and
//     pass it into other functions
//   - const <functionName> = (<params>) => {} // this is the same as the one above but with
//     different scoping implications.

// This defines a function called App that will return called App. This is how we can make our own
// psuedo HTML elements.
const App = () => {
  // this defines a variable called value that is initialzed with "Howdy Partner!" and a function
  // called setValue that will change it. This function is needed for react so the page can update
  //  correctly
  const [value, setValue] = useState("Howdy Partner!");

  // This function will get run whenever the button is clicked
  const handleClick = () => {
    // If the button says "Howdy Partner!", It changes it to "Yee-Haw!". "===" Just checks that
    // the value AND type match
    setValue(value === "Howdy Partner!" ? "Yee Haw!" : "Howdy Partner!");
  };

  // This is the psuedo HTML that gets returned when you call/render App.
  return (
    <div>
      {/* Typography and Button are premade functions made by Google so we don't have to mess 
      with styling too much. We can just drop these in and they're ready to go. */}
      <Typography variant='h3'>Welcome to the Commentor Frontend</Typography>
      <Button color='primary' variant='contained' onClick={handleClick}>
        {value}
      </Button>
    </div>
  );
};

export default App;
