## john mason - submitted april 3 2020

## installation
clone from git repo
run yarn install
run yarn start

## security
### addressed
+ qa'd search inputs with malicious input
+ yarn audited npm modules, only one low risk create-react-app dependency issue
 

not addressed
- server api implementation, assumes proper CORS implementation
todo: decide whether or not to add capcha and put it in addressed/not addressed


## libraries
- flow for ease of use
- antd for higher order view components
- lodash for nice pure performant functions
- scss for more styling control
- axios for demonstrating how i'd send requests if i wasn't using mocks

## api
this is an interview for the frontend with react 
the api is mocked mocked because my ability to build good apis is not as relevant as 
- my ability to create clean react code
- my ability to build a front end implementation of an api interface

## get resources
description of endpoint

### listFiles
- public api that lists 
removeFileMock
searchFilesMock
uploadFileMock


## other notes
- didn't spend time minimizing antd styles, if i was future proofing this project i would minimize the styles 
- link to how to do that - https://ant.design/docs/react/use-with-create-react-app#Use-babel-plugin-import
