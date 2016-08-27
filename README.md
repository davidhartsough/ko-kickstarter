# KO Kickstarter
https://github.com/davidhartsough/ko-kickstarter.git

Kickoff a great Knockout, Browserify, and Director web app.

KO Kickstarter does 3 awesome things for you:
1) Sets up a structure for your app to be written with modular code.
2) Serves your files with a live reload that actively watches for any changes you make. 
3) Distrubutes a minified build when you're ready to launch.

**Note:**
This is a fork of the [Simple Less is More](https://github.com/davidhartsough/simple-less-is-more.git) build tool (which is a fork of the [Less is More](https://github.com/davidhartsough/less-is-more.git) build tool).
Reference these for extra details.

## Installation
`cd /path/to/where/you/want/to/develop/`

`git clone https://github.com/davidhartsough/ko-kickstarter.git`

`cd ko-kickstarter`

`npm i`

## Resources

* [Knockout](http://knockoutjs.com/documentation/introduction.html)
* [Browserify](http://browserify.org/)
* [Director](https://github.com/flatiron/director)

## Structure

```
├── ko-kickstarter/
│   ├── package.json            // Reference for npm scripts
│   ├── README.md               // This document
│   ├── more/                   // Where you'll develop
│   │   ├── index.html          // Entry point for your app
│   │   ├── bundle.css          // Un-minified compilation of styles
│   │   ├── bundle.js           // Un-minified compilation of scripts
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   ├── humans.txt
│   │   ├── browserconfig.xml
│   │   ├── manifest.json
│   │   ├── manifest.webapp
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   │   ├── ... etc
│   │   ├── ui/                      // Modules that compile into bundle.css and bundle.js
│   │   │   ├── app.css              // The main, basic, global css for your app
│   │   │   ├── app.js               // The main js for your app (details below)
│   │   │   ├── components/          // Reusable component modules used in layouts
│   │   │   │   ├── my-component/    // Example component used in "my-page" layout
│   │   │   │   │   ├── my-component.css
│   │   │   │   │   ├── my-component.html
│   │   │   │   │   ├── my-component.js
│   │   │   ├── layouts/             // The primary templates for routes / "pages"
│   │   │   │   ├── hello-world/     // The hello world example from Knockout
│   │   │   │   │   ├── hello-world.css
│   │   │   │   │   ├── hello-world.html
│   │   │   │   │   ├── hello-world.js
│   │   │   │   ├── my-page/         // Example page
│   │   │   │   │   ├── my-page.css
│   │   │   │   │   ├── my-page.html
│   │   │   │   │   ├── my-page.js
│   ├── less/                   // Where the dist minified build lives
│   │   ├── index.html          // Minified
│   │   ├── bundle.css          // Minified, compiled styles
│   │   ├── bundle.js           // Minified, compiled scripts
│   │   ├── ... etc             // Copied from the /more/ directory
```

Most of your work will be happening in /more/ui/ (and some in /more/index.html)

**Focus**
```
├── more/
│   ├── index.html
│   ├── ui/
│   │   ├── app.css
│   │   ├── app.js
│   │   ├── layouts/
│   │   ├── components/
```

#### index.html
* Primary view and layout for your app
* SEO jargon in <head>

#### app.css
* Styles you want to be applied globally

#### app.js
* Browserify requires
* Registrations for your layouts and components
* Primary view model for your app
* Director router configuration and initialization

#### layouts/
* Template modules for page layouts (routes)
* One directory per layout containing a JS, a CSS, and an HTML file for modular development
* Ex: my-layout/ --> my-layout.js, my-layout.css, my-layout.html (could be accessed from /#/my-layout/)

#### components/
* Reusable component modules used in layout templates
* One directory per component containing a JS, a CSS, and an HTML file for modular development
* Ex: my-component/ --> my-component.js, my-component.css, my-component.html

Registered Knockout modules just need the Model View (JS) and the View template (an HTML string).
So when registering a new Knockout module, simply use Browserify's require() to grab the JS file that exports the Model View and View template.
To export the View template from that JS file, use Browserify's require() again to grab the respective HTML file (Stringify will convert it to a string).

## Scripts

Honestly, you only need to remember 2 npm scripts.

#### dev

`npm run dev`

This script serves files from the /more/ directory with a live reload that actively watches for any changes you make.
It uses watchify and catw to actively bundle the js and css whenever changes are made.
This will also use live-server to spin up a live-reload server from the /more/ directory and open it in your browser.


#### dist

`npm run dist`

When you're all done and ready to launch your app, run this script to create a minified build of your app in the /less/ directory.
It uses html-minifier to minify index.html, uglify-js to minify bundle.js, and clean-css to minify bundle.css (All output to the /less/ directory).

## Changes

For all changes you'll need to make (in regards to sections such as the SEO jargon), please reference [Less is More #Things for you to change](https://github.com/davidhartsough/less-is-more#things-for-you-to-change)


## NPM Dependency References

* [knockout](https://www.npmjs.com/package/knockout/)
* [director](https://www.npmjs.com/package/director/)
* [browserify](https://www.npmjs.com/package/browserify/)
* [watchify](https://www.npmjs.com/package/watchify/)
* [stringify](https://www.npmjs.com/package/stringify/)
* [catw](https://www.npmjs.com/package/catw/)
* [live-server](https://www.npmjs.com/package/live-server/)
* [uglify-js](https://www.npmjs.com/package/uglify-js/)
* [clean-css](https://www.npmjs.com/package/clean-css/)
* [html-minifier](https://www.npmjs.com/package/html-minifier/)

____
**Cheers,**
David
