# React browserify
Testing out React and Browserify

A React example of a very limited credit card form.

## Up and running
This assumes that you have npm and browserify installed globally. If you don't have browserify, you can get it by doing:

`npm install -g browserify`

Start out by fetching all dependencies:

`npm install`

From the root directory, build the project using:

`browserify js/app.js -t reactify -o bundle.js`
