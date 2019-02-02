### Overview:

- The App is basically build on React with redux and redux saga implemented and for getting and retriving data json-server is used. The app strictly demonstrate the app directory structure, routes implementation with redux implementation as well.It also demonstrate some json-server implementations.

### Specs:

- React used with redux for fronend job.
- Redux saga used for api calls.
- json-server used for storing data on permanent basis.
- React router with React router dom is used for implementing routes in this Single page Application.

### Getting Started:

- Just clone the repo using the clone url.
- Install json-server `npm install -g json-server`
- Get into the project directory.
- Execute `npm install` to install all the required dependencies.
- Before running npm start first start the json server by executing "json-server --watch db.json --port 4000". I am running the json-sever at different port because of the react using that port. You can use any.
- Execute `npm start` to start the project.

### Directory Structure Explained:

- Public Directory is for static data where icons and index.html are inculded.
- db.json file is created by json-server where the data from json server are stored.
- package.json file is for storing package dependencies.
- components directory inside src is where the functional and class components reside. All components have their own folder structure with index.js file in it.
- actions directory is for storing actions of various tasks performed in redux.
- constants directory holds constants for the specific actions.
- containers directory have mapStateToProps and mapDispatchToProps is responsible for dispatching and storing action with action data.
- reducers directory have all the cases defined for particular action.
- sagas directory is responsible for communicating with api of json-server.
- utility directory holds api calling methods like POST,PUT,PATCH,DELETE,GET.
- store directory stores the overall states.
- Routes file is having routes and authenticated with privteRoutes.

###### Note- Any feedbacks for improvement are appreciated.