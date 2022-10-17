# Flatiron School - FLEX SE - Phase 3 - Project - Notes App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is to fulfill the requirements for Phase 3 of the Flatiron School - Flex SE program.

## Project Requirements

- [ ] Use Active Record to interact with a database.
- [ ] Have at least two models with a one-to-many relationship.
- [ ] At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- [ ] Build a separate React frontend application that interacts with the API to perform CRUD actions.
- [ ] Implement proper front end state management. You should be updating state using a setState function after receiving your response from a POST, PATCH, or DELETE request. You should NOT be relying on a GET request to update state.
- [ ] Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.
- [ ] Routes in your application (both client side and back end) should follow RESTful conventions.
- [ ] Use your back end optimally. Pass JSON for related associations to the front end from the back end. You should use active record methods in your controller to grab the needed data from your database and provide as JSON to the front end. You should NOT be relying on filtering front end state or a separate fetch request to retrieve related data.

## Usage

In the project directory, you can run:

### `npm install`

Install required dependencies listed in `package.json`.

### `bundle install`

Install required dependencies listed in `Gemfile`.

### `rackup db:migrate db:seed`

Creates the necessary models in the migration files and populates the models using `seed.rb`.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `rackup config.ru`

Runs the Sinatra server required for the API backend.
Open [http://localhost:9292](http://localhost:9292) to view it in your browser.