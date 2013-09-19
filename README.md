Angular Rison Service
=====================

Rison URL Object encoding service for Angular.  Encode infinite-depth javascript objects into a url-friendly string.


Example:

    {
		"a":0,
		"b":"foo",
		"c":"23skidoo"
	}

Becomes the following, URI safe string:

	(a:0,b:foo,c:'23skidoo')

Installing with Bower
=====================
Very simple
    
    bower install angular-rison


Documentation
=============
The rison service provides two functions, stringifiy and parse.  These two functions operate in the same manner as the traditional JSON object methods.  Further documentation can be found by building the project and viewing the docs (see below).


Contributing - Steps
====================

1)Submit an RFC under issues.

2)Fork the repo

3)Clone your fork

4)Build the environment (see below)

5)Make your changes according to your RFC

6)Update the tests 

7)Check test coverage (see below)

8)Check complexity (see below) 

9)Build the result to make sure there aren't any compiler errors (see below).

10)Push your changes

11)Submit a pull request to your fork, and reference your RFC


Contributing - Building the Environment
=======================================

Install JRE7 and set your JAVA_HOME path

Install global dependencies:
    
    $ npm install -g bower grunt-cli

Install local dependencies (this will also install some bower dependencies):
    
    $ npm install

Launch the development and testing environment:
    
    $ grunt

On changes, the environment automatically performs linting, runs unit tests, creates documentation, creates a code coverage report, and creates a code complexity report for your convenience.

To view documentation materials, navigate to:

    `http://127.0.0.1:9001/`

To view testing coverage reports via Istanbul, navigate to:

    `http://127.0.0.1:9001/coverage`

To view code complexity reports via Plato, navigate to:

    `http://127.0.0.1:9001/plato`

Finally, to ensure package-ability, ensure that you can compile the project without errors:

    $ grunt build


Please note that pull requests with excessively high code complexity, excessively low test coverage, or any compile-time errors will be rejected.


Contributing - Other Notes
==========================

The compiler will automatically strip out logging, debugging, etc.  However, please be curtious and do not completely flood the source code with logging and debugging.  It is encouraged to leaving logging/debugging in unintuitive areas of code to help your fellow developers understand them.

Enjoy!
-TBRG (The Big Red Geek)
