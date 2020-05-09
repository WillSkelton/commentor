# Commentor Frontend
## Table Of Contents:
- [Commentor Frontend](#commentor-frontend)
  - [Table Of Contents:](#table-of-contents)
  - [Description](#description)
  - [Usage](#usage)
    - [Setup](#setup)
    - [Starting the Frontend](#starting-the-frontend)
  - [Team Members](#team-members)
  - [Tools Used](#tools-used)

## Description
This program is called "Commentor". It will find all the function definitions of all the source code files in a given directory and give the user a clean GUI for adding comments to them. This repository contains the frontend for the program.

## Usage
### Setup
Clone the repository and switch to the branch `develop`. In order to start the frontend, [Yarn](https://yarnpkg.com/en/) must be installed. Once Yarn is installed, open the root directory of the repository in a terminal and run the command 

```
yarn install
```

### Starting the Frontend
This will download all the dependencies needed for the frontend to work. Once those are downloaded, run the command

```
yarn start
```

This will try start on port 3000 of localhost but will pick the next highest availible port if 3000 is busy. During development, the frontend will be hosted on a local server but eventually, we will either bundle it together into huge javascript, html, and css files or in our case, a desktop application. 

To open the frontend, just open a browser and type `localhost:3000` into the searchbar and hit `enter`.

## Team Members
- Will Skelton
- Brett Anzlovar
- Lucas Mason
- Odeysiuss Tuon
- Peyton Urquhart

## Tools Used
Made with React.js and Material UI, tested with Jest, managed with Yarn, and packaged with Electron.js.