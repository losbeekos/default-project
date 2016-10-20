# Installation
Make sure you have GruntJS and Bower.

#### Bower dependencies
Install the Bower dependencies, see bower.json.

	$ bower install

#### Node dependencies
Install the Node dependencies, see package.json. You can use [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com).

	$ npm/yarn install

#### Start server
Start the web server which is used by BrowserSync.

	$ grunt connect

#### Run browserSync
Run BrowserSync to auto reload when dist files change.

	$ grunt browserSync

#### Watch for changes

	$ grunt watch