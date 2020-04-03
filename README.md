## john mason - due 1pm april 4 2020

## installation
clone from git repo
run yarn install
run yarn start

## security
### addressed
+ qa'd search inputs with malicious input
+ yarn audited npm modules, only one low risk create-react-app dependency issue
+ mocked capcha v3 functionality, assumes server rate limits multiple requests using same capcha token

not addressed
- server api implementation, assumes proper CORS implementation
- did not programatically test library inputs to ensure they properly handle malicious input


## libraries
- flow for ease of use
- antd for higher order view components
- lodash for nice pure performant functions
- scss for more styling control
- axios for demonstrating how i'd send requests if i wasn't using mocks
- enzyme for component tests if that's a thing we want to do

## api
this is an interview for the frontend with react 
the api is mocked mocked because my ability to build good apis is not as relevant as 
- my ability to create clean react code
- my ability to build a front end implementation of an api interface

## get resources
description of endpoint

listFiles
- other than some basic headers no params 
- not assuming paging, in the interview i asked how many endpoints are paged and the answer was not many

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

## future improvements
- would create a quick tutorial/walkthrough
- would create an actual api/implement mocked functionality
- would refactor filteredFiles to be filteredFileIds and
- would refactor delete to pass around just an id
- would implement either back end paging or front end paging
- would add code to deduplicate multiple uploads

## other notes
- didn't spend time minimizing antd styles, if i was future proofing this project i would minimize the styles 
- link to how to do that - https://ant.design/docs/react/use-with-create-react-app#Use-babel-plugin-import
- didnt build component tests for all components just enough to demonstrate how i'd do it
