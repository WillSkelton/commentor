import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  List,
  ListItem,
  Collapse,
} from "@material-ui/core";
import { colors } from "../../services";
import Highlight from "react-highlight.js";

const useStyles = makeStyles({
  root: {
    border: `4px solid ${colors.slate}`,
    height: "100%",
    width: "60%",
    boxSizing: "border-box",
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

const func1 = `
void initList(List *l) {
	l->head = NULL;
	l->tail = NULL;
	l->length = 0;
}
`;
const func2 = `
void newRecord(Record *r, char artist[30], char album[30], char song[30], char genre[15],
	int minutes, int seconds, int timesPlayed, Rating rating) {

	static unsigned long id = 0;

	strcpy(r->artist, artist);
	strcpy(r->album, album);
	strcpy(r->song, song);
	strcpy(r->genre, genre);

	Duration d = { minutes, seconds };
	r->duration = d;
	r->timesPlayed = timesPlayed;
	r->rating = rating;
	r->id = id;

	++id;

}
`;
const func3 = `
Node* newNode(Record newRecord) {

	Node *tempPtr = NULL;

	tempPtr = (Node *)malloc(sizeof(Node));

	if (tempPtr != NULL) {
		tempPtr->record = newRecord;
		tempPtr->pNext = NULL;
		tempPtr->pPrev = NULL;

	}

	return tempPtr;
}
`;
const func4 = `
void printListL2R(Node *nodePtr) {
	printf("---> ");

	if (nodePtr != NULL) {

		printf("%s ", nodePtr->record.song);
		printListL2R(nodePtr->pNext);
	}
}
`;
const func5 = `
void initList(List *l) {
	l->head = NULL;
	l->tail = NULL;
	l->length = 0;
}
`;
const func6 = `
void newRecord(Record *r, char artist[30], char album[30], char song[30], char genre[15],
	int minutes, int seconds, int timesPlayed, Rating rating) {

	static unsigned long id = 0;

	strcpy(r->artist, artist);
	strcpy(r->album, album);
	strcpy(r->song, song);
	strcpy(r->genre, genre);

	Duration d = { minutes, seconds };
	r->duration = d;
	r->timesPlayed = timesPlayed;
	r->rating = rating;
	r->id = id;

	++id;

}
`;
const func7 = `
Node* newNode(Record newRecord) {

	Node *tempPtr = NULL;

	tempPtr = (Node *)malloc(sizeof(Node));

	if (tempPtr != NULL) {
		tempPtr->record = newRecord;
		tempPtr->pNext = NULL;
		tempPtr->pPrev = NULL;

	}

	return tempPtr;
}
`;
const func8 = `
void printListL2R(Node *nodePtr) {
	printf("---> ");

	if (nodePtr != NULL) {

		printf("%s ", nodePtr->record.song);
		printListL2R(nodePtr->pNext);
	}
}
`;

const Editor = (props) => {
  const { files } = props;

  const fileList = Object.keys(files);

  const classes = useStyles();

  const [scrollBar, setScrollBar] = useState(false);

  // const functions = [func1, func2, func3, func4, func5, func6, func7, func8];

  const [open, setOpen] = useState(-1);

  const handleMouseEnter = () => {
    setScrollBar(true);
  };

  const handleMouseLeave = () => {
    setScrollBar(false);
  };

  const handleClick = (idx) => {
    if (open === idx) {
      setOpen(-1);
    } else {
      setOpen(idx);
    }
  };

  const test = fileList.map((value, idx) => {
    return <h1>{value}</h1>;
  });

  const generateFunctions = () => {
    return Object.keys(files).map((funcID, idx) => {
      console.log(1);
      // console.log(funcID);
      // console.log(files[funcID]);
      // return (
      //   <div key={`div-${idx}`}>
      //     <Collapse
      //       key={`text-${idx}`}
      //       in={open === idx}
      //       // className={classes.collapse}
      //     >
      //       <TextField
      //         placeholder="Add Comment Here"
      //         multiline
      //         rowsMax={3}
      //         className={classes.textField}
      //         color="secondary"
      //         variant="outlined"
      //         inputProps={{
      //           className: classes.textFieldLittleInput,
      //         }}
      //         InputProps={{ className: classes.textFieldBigInput }}
      //       ></TextField>
      //     </Collapse>
      //     <ListItem
      //       onClick={() => {
      //         handleClick(idx);
      //       }}
      //       className={classes.listItem}
      //       key={`li-${idx}`}
      //       value={idx}
      //     >
      //       <Highlight
      //         key={`code-${idx}`}
      //         className={classes.highlight}
      //         language={"cpp"}
      //       >
      //         {func}
      //       </Highlight>
      //     </ListItem>
      //   </div>
      // );
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.root}
      style={{
        overflowY: `${scrollBar ? "scroll" : "hidden"}`,
      }}
    >
      <List component="nav" className={classes.list}>
        {test}
      </List>
    </div>
  );
};

export default Editor;
