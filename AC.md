
## core ac
### upload a document
+ only accepts jpg/png
+ max size 10MB
- stretch ac - add captcha?

### list all documents
- stretch ac - page data on the front end 

### search documents by name
- using the api
+ test search box handles bad input 
+ handles <script>alert(1) </script>
+ handles %3Cscript%3Ealert(1) %3C/script%3E

### delete a document
+ removes document
- stretch ac - just use id
- clears memory?

## requirements
+ no auth, login, user management
+ app should look like wireframe
+ written in react
+ no state management library
+ other libs can be used without restriction (includes create react app)

### application should be secure
+ apis use xsrfHeaderName, xsrfCookieName
todo: explain why these help
- stretch ac - add capcha 

### testing 
- ui should have tests that ensure functionality is working as intended (100% coverage not expected)
- test logic functions
- test view components
- stretch - programatically test lib components to ensure they handle malicious input

- tests for api not required

## the api
+ can use api server, fake api, mock api, external service
+ simulate functionality while running application
todo: figure out if what i have done is adequate, i'm mocking 'storing' a file on the back end and passing back metadata
about that file, determine if this is enough
- store a file

+ be asynchronous when called from the react app
+ have documentation in the readme

## judged on
- amount of functionality completed
- prioritization fo what is completed

### documentation
- all instructions to run application
- security issues that have been addressed
- security issues that have not been addressed
- future improvements
- libraries used and why
- api documentation

## code quality
- code should be testable, modular, easy to understand and reuse
- css should be responsive and use modern approaches to layout eg flex or grid

tests: tests should ensure functionality works
stability: errors should be handled gracefully

## not judged on
- code style
- webpack
- https configuration

## submission
- send encrypted email to your recruiter with a link to public git repo
- fill out readme template
- do not mention kraken
