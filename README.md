# Installation
Make sure you have [GruntJS](http://gruntjs.com) and [Bower](https://bower.io).

#### Bower dependencies
Install the Bower dependencies, see bower.json.

	$ bower install

#### Node dependencies
Install the Node dependencies by either using [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com). See package.json for details. 

	$ npm/yarn install

#### Start server
Start the web server which is used by BrowserSync.

	$ grunt connect

#### Run browserSync
Run [BrowserSync](https://www.browsersync.io) to auto reload when dist files change.

	$ grunt browserSync

#### Watch for changes

	$ grunt watch