# Feedback Project For Haus

This app is deployed at https://haus-project.herokuapp.com/

## Project Functionality

- People can signup to create a new user or login with an existing user
  - There is some basic functionality on assuring a user name doesn't exist on signup, that the credentials are correct, etc.
- Users can post general feedback via a text form
- Users can see the feedback they've previously posted in the history tab

## Project Structure

- client side code is located within the src folder
- server side code is located within the server folder

## Developing

- Clone the project locally
  - `git clone git@github.com:tcwood/haus.git`
- Install dependencies and then run the project
  - `cd haus && yarn && yarn start-dev`
- You should now be able to view the app at `http://localhost:3000/login` in your browser
- make changes to the code. Hit save, and the browser will refresh with your changes.

## Building for production

- running `yarn build` will create a build folder with production ready code in it.

## Main tools used

- React
- Express
- Create React App
- Material-ui components

## Areas for improvement

- The main drawback is that this project doesn't have a database at the moment.
  - This was done due to time constraints in an effort to focus more on the front end as I know that's what Haus needs in the short term :)
  - All of the data is stored in memory. Restarts to the server (as will happen automatically with the Heroku free plan) will wipe all data
- Store session data
  - Right now a refresh will "log out" a user since the log in data is stored in the react app's state.
  - Instead a JWT could be stored in a cookie or local storage and sent with request headers
- Authorization
  - the get/post feedback routes aren't protected at the moment. It would be good to have some authorization to make sure the user is who they say they are
- Input validation and feedback
  - Decide what constitutes a valid user name, password, or text field
    - give the user feedback if these criteria aren't met.
- Allow more interaction with the feedback history list
  - filtering, sorting, searching
- Allow rich text editing with the feedback text field (maybe with DraftJS)
  - It wouldn't be too hard to give support for things like hyperlinks, emojis, italics...

_The front end for this app was created with Create React App, handling things like hot module reloading and the webpack configuration of the bat. Check out cra-README.md for any instructions pertaining to how it has set the project up._
