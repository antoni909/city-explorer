# City Explorer App

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb9ccd94-0af4-4cb3-9c70-a2efcaf75139/deploy-status)](https://app.netlify.com/sites/vigorous-ride-dc9045/deploys)

**Author**: Lorenzo Ortega
**Version**: 1.0.0

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
Today you will be building a React application that uses the Axios library to make user-initiated reqeusts for data from a thrid-party API.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
- Setup Feature

Create a new repo called city-explorer on GitHub, initialized with a README file. Clone it locally, and do all your work on a meaningfully-named feature branch off of main.
Use create-react-app to setup a new React application in your lab repo.
README.md - with documentation regarding your lab and its current state of development. Check the "documentation" section of the lab assignment for more details on how that should look AT MINIMUM
.gitignore - with React configurations, including ignoring of .env
package.json - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: Axios and Bootstrap.
Create a PR of your basic React app to Netlify. Thanks to the "Deploy Preview" feature of Netlify, your branch will be deployed so you can see it live, even before you merge it to main. As you work through the lab, push all your work to the same PR, verifying it's working on Netlify as you go.
Procure a LocationIQ free-tier account. From the Dashboard, navigate to your API Access Tokens page. View, then Update the existing token, to change the label to "City Explorer".
MOST IMPORTANTLY: Add your deployed Netflify app url as an HTTP Referrer to your API token settings. This step is necessary to prevent any unauthorized use of your token.
.env: Your API key goes here for local development. Make sure this file is in your .gitignore.
Add your API key to your Netlify deployment. Under "Site settings" > "Build & deploy" > "Environment", you need to add "Edit variables" to add your API key, giving it the same name you used in your local .env file.
Add an item

- Location Feauture

Create a route with a method of get and a path of /location. The route callback should invoke a function to convert the search query to a latitude and longitude. The function should use the provided JSON data.
Build a form to collect a city name from the user. Give the submit button the text of "Explore!".
Use the data from the form to query LocationIQ for the latitude and longitude of the requested city.
Update the page with the returned display_name, latitude, and longitude, displayed nicely in an appropriate Bootstrap component.
Deploy your updated React app to Netlify by committing and pushing your code to your open pull request on GitHub.
Add an item

## Architecture

Built using the following technologies:

- React
- React Bootstrap
- Node.JS and npm
- axios
- LocationIQ API
- Trello Manager
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
## Change Log

2021-04-06 2300 - Began building Repository and API Key Setup per Trello board checklist
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

- Project Collaborators: Michelle Pannosch

![Web Request Response Cycle Diagram for Lab-06](/public/assets/lab06-WRR-cycle.jpg)

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

## Links and Resources used

[dotenv npm install](https://www.npmjs.com/package/dotenv)

[Bootstrap React Component Docs](https://react-bootstrap.github.io/components/forms/#forms-layout-grid)

[W3 Schools](https://www.w3schools.com/)

[StackOverflow - to fix submit event handler](https://stackoverflow.com/questions/37239799/can-not-submit-form-react-bootstrap)

[Saturn Emoji](https://emojipedia.org/ringed-planet/)

## Name of feature: Respository and API Key Setup

Estimate of time needed to complete: 1 hour

Start time: 2130

Finish time: 2330

Actual time needed to complete: 2 hours

## Name of feature: Location

Estimate of time needed to complete: 3 hour

Start time: 1430

Finish time: 1757

Actual time needed to complete: 3.45 hours
