# Art Access

![GIF of Girl with a Pearl Earring](https://media.giphy.com/media/3ohhwDfcBvBPpD9RZu/giphy.gif)

- [Introduction](#introduction)
- [Learning Goals](#learning-goals)
- [Technologies](#technologies)
- [Features](#features)
- [Page Demo](#page-demo)
- [Future Extensions](#possible-future-extensions)
- [Set Up](#set-up)
- [Project Spec](#project-spec)
- [Deploy Link](#deploy-link)

## Introduction

Art Access is an application meant to expand the impact of art beyond museum walls. Users are able to browse the entire gallery, search for works by artist name and save works to their very own collection. 

Using five weeks of learnings in React, Router and Cypress E2E testing, this project was developed within a five day solo sprint. 


## Learning Goals

- Successfully implement Router to allow for a multi-page UX.  
- Create a robust testing suite to account for all user flows, stubbing asynchronous actions for both successful and unsuccessful cases. 
- Build a modular, user-friendly application with React.
- Incorporate responsive design to allow users to interact with application on mobile and desktop. 


## Technologies
  - React
  - HTML
  - CSS
  - Cypress
  - Fetch API
  - Webpack
  - NPM
  - Router


## Features

- Upon page load, the user is presented with works of art to browse.
- Using a live search, the user can type in an artist's name and see a list of their works (or an error message if no works exist for that query). 
- When a user clicks on a work of art, they are able to review the extended details of that piece. 
- Users can add pieces to their personal collection.
- Users can utilize the forward/backward arrows to navigate their history on the site and can share a specific URL pertaining to each work of art.


## Page Demo

![GIF of homepage and search demo](./src/assets/art-access-search.gif)
![GIF of add to collection demo](./src/assets/art-access-collection.gif)

## Future Extensions

- Add functionality to allow the user to remove an item from their collection
- Add functionality to communicate to the user if a piece is already in their collection (handling to avoid duplicates already exists) 
- Add functionality to communciate to the user what they are seeing is the result of their search query 
- Create a back end to allow a user's favorites to persist
- Create a user log in



## Set Up

1. Fork and clone [this](https://github.com/stephanie-roe/art-access/tree/main) repo.
3. Type `cd art-access` to move into the root directory.
4. Run `npm install` to install necessary dependencies.
5. Run `npm start`.
6. Copy the url given by running `npm start` and open in your browser.
7. Run Cypress tests with `npm run cypress` if all dependencies are installed correctly.
8. Explore the available works of art and see their details!
 
 ## Project Spec
 - The project spec can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)

 ## Deploy Link 
 - Visit [here](https://peaceful-headland-02192.herokuapp.com/) to see the application in action! 