# Less is More
https://github.com/davidhartsough/less-is-more.git

Less is More is a simple build tool that can lint, minify, and serve.

Less is More is designed to help developers get started creating fast using the bare bones basics: raw HTML, CSS, and JS. The index.html file has probably every tag you need in `<head>` for great SEO practices. There's also a `manifest.json` and a `manifest.webapp` along with other boilerplate files to boot. Keeping with the Less is More theme, this build tool just uses npm scripts -- no Grunt or Gulp bloat. You only need to remember 3 CLI commands. The build system is centered around a single page web app, but Less is More is simple and flexible enough for you to easily make adjustments to accomodate for a more diverse file structure in a multi-page site.

For me, Less is More is merely a launching pad I like to start from, and adding to the build tool is straightforward. I've been dogfooding this for awhile now, so I hope you find this helpful too.

###### Installation
Don't forget to `npm install` for the devdependencies.

### Scripts
**Warning: some scripts are written for Unix-like systems only and may not work on Windows**
##### Lint
Use `npm run lint` to lint js files in `more/assets/scripts`
##### Live Server
Use `npm run serve:more` to serve up files from the "more" directory in your browser on port 8080 (http://localhost:8080)
##### Distribute
Use `npm run dist` to minify your files and create a final distribution in the "less" directory. This also spins up a server from the "less" directory and opens it in your browser.

### Devdependencies
**For CSS related scripts**
- autoprefixer
- postcss-cli
- clean-css

**For HTML related scripts**
- html-minifier

**For JS related scripts**
- eslint
- uglify-js

**For serving files and watching for changes**
- live-server

## Things for you to change

#### index.html
| line numbers | what to change | example |
| -------- | -------- | -------- |
| 3 | SCHEMA | WebPage |
| 8, 14, 15, 20, 28, 33, 35 | TITLE | Google |
| 9, 16, 27 | DESCRIPTION | Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for. |
| 10 | KEYWORD | search |
| 11 | AUTHOR | George Washington |
| 12, 18, 21, 22, 23 | URL | google |
| 17 | @CREATOR | @GeorgeWashington |
| 21 | TYPE | website |
| 29 | 000000000 | 123456789 |
| 36, 43, 48, 49 | #000000 | #4285F4 |
| 60 | UA-00000000-0 | UA-12345678-9 |

#### humans.txt
| line number | what to change | example |
| ---- | ---- | ---- |
| 6 | `<name>` | George Washington |
| 6 | `<role>` | Developer |
| 6 | `<twitter>` | @GeorgeWashington |
| 10 | `<name>` | George |

#### manifest.json
| line number | what to change | example |
| ---- | ---- | ---- |
| 2 | `<name>` | George Washington |
| 3 | `<shortname>` | GW |

#### manifest.webapp
| line numbers | what to change | example |
| ---- | ---- | ---- |
| 3, 21 | `<name>` | Google |
| 5, 22 | `<description>` | Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for. |
| 10 | `<name>` | George Washington |
| 11 | `<url>` | http://georgewashington.com/ |

#### .eslintrc
Change lint rules as you see fit.

#### images
**Images you'll need to replace:**

./more/
- favicon.ico

./more/assets/images/
- logo.png (1200x630)

./more/assets/images/touch/
- icon-512x512.png (512x512)
- icon-128x128.png (128x128)
- chrome-touch-icon-192x192.png
- apple-touch-icon.png (152x152)
- touch-icon-iphone.png (180x180)
- touch-icon-ipad.png (76x76)
- touch-icon-iphone-retina.png (120x120)
- touch-icon-ipad-retina.png (152x152)
- startup.png (320x480)
- ms-touch-icon-144x144-precomposed.png (144x144)
- icon_smalltile.png (70x70)
- icon_mediumtile.png (150x150)
- icon_widetile.png (310x150)
- icon_largetile.png (310x310)

### Happy Developing :)
