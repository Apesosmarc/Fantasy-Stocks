# StonkWatch
<p align="center"><img src="https://raw.githubusercontent.com/Apesosmarc/StonkWatch/main/github_assets/stonkwatch_landingpage.jpg"></p>

### [Back End Repo](https://github.com/Apesosmarc/StonkWatch-API-Server)

## Overview
CRUD app where user can login with Google OAuth2 and create watchlists to get real time stock data fetched from IEX API. This app dynamically loads current news based on the user's holdings

This front end receives data from multiple API's and stores them in an app level
state that can be accessed by any nested component using Redux. Users can create an account authorized by the Google OAuth API, or log in with a guest account.

With Redux Thunk I can use async logic in action creators before dispatching desired data to the Redux store for easy data aggregation from multiple sources.
Using Redux Forms, I validate inputs on the front end to accept only stock-ticker formats and to validate the existance of the company via API request before submitting data to the DB.

This app is fully responsive for mobile-thru-desktop viewports. Dark/light mode button changes app theme and user preference gets stored to localStorage. Styling applied to elements using Tailwind CSS utility classes and '@apply' directive. React modals get called for google login screen and delete prompts.


## Technologies:
- JS
- React
- React-Redux
- Redux Forms
- Tailwind CSS

## Features:
- OAuth2 Login
- Responsive layout
- Dark/Light mode with saved user preference. 
- Minute-to-minute stock prices
- Relevant news fetch
