# Timer App

This app serves as an accumulative timer for multiple browser users.

The app is containerised using Docker and hosted in Heroku. Click [here](https://mvst-timer.herokuapp.com) to view live app.

For project specification, see [this](https://www.notion.so/Timer-Code-challenge-9e8a470a0fd54a80aee2228ddab08a2e).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Outstanding

Unfortunately I didn't get around to writing any unit tests. Had I had more time I would have made sure to at least add coverage for the following:

1. StoreService
2. All Redux reducers
3. All Redux selectors
4. All Redux epics
5. Dao's
6. TimerComponent

I generally don't write tests for components unless they're exptremely complex.

# Feedback

The project took slightly longer than I'd anticipated. I wasn't too bothered about the extra time spent though since it allowed to get back into the swing of things.

I took the opportunity to also learnand master: 
- Redux for state management
- Material UI and it's themes
- React hooks

Thanks for the opportunity!