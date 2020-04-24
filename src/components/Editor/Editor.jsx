import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { colors } from "../../services";
import Highlight from "react-highlight.js";

const useStyles = makeStyles({
  root: {
    border: `4px solid ${colors.slate}`,

    height: "100%",
    width: "60%",
    // padding: "8px",
    boxSizing: "border-box",
    // overflowY: "scroll",
  },
  textField: {},
  textFieldBigInput: {},
  textFieldLittleInput: {
    border: `2px solid ${colors.slate}`,
    borderRadius: "4px",
  },
  highlight: {
    margin: "0px",
    borderTop: `1px solid ${colors.slate}`,
    borderBottom: `1px solid ${colors.slate}`,
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

		printf("\"%s\" ", nodePtr->record.song);
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

		printf("\"%s\" ", nodePtr->record.song);
		printListL2R(nodePtr->pNext);
	}
}
`;

const Editor = () => {
  const classes = useStyles();

  const [scrollBar, setScrollBar] = useState(false);

  const functions = [func1, func2, func3, func4, func5, func6, func7, func8];

  const handleFocus = () => {
    setScrollBar(true);
  };

  const handleBlur = () => {
    setScrollBar(false);
  };

  return (
    <div
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={classes.root}
      style={{
        overflowY: `${scrollBar ? "scroll" : "hidden"}`,
      }}
    >
      {functions.map((func, idx) => {
        return (
          <Highlight
            key={`${idx}`}
            className={classes.highlight}
            language={"cpp"}
          >
            {func}
          </Highlight>
        );
      })}
    </div>
  );
};

export default Editor;
