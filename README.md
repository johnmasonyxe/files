## john mason - submitted april 3 2020

## installation
clone from git repo
run yarn install
run yarn start

## security
### addressed
+ qa'd search inputs with malicious input
+ yarn audited npm modules, only one low risk create-react-app dependency issue
+ mocked capcha v3 functionality

not addressed
- server api implementation, assumes proper CORS implementation
- did not programatically test library inputs to ensure they properly handle malicious input


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

listFiles
- other than some basic headers no params 

removeFile
- send a file object to be removed

searchFiles
- safe search text would be sent to the api, what it does with the search text is up to the server
- my mock takes in the list of files and does a filter action on them to mimic what a server would do
- note: my filter logic is very basic, a server might tokenize the input and match more results 

uploadFile
- send a file object to be uploaded
- file types that are not png/jpeg are rejected before they hit the api, although i would expect the server implementation to check regardless
- file types that are above 10mb are rejected before they hit the api as well 

## other notes
- didn't spend time minimizing antd styles, if i was future proofing this project i would minimize the styles 
- link to how to do that - https://ant.design/docs/react/use-with-create-react-app#Use-babel-plugin-import
- didnt build snapshots for all ui components
