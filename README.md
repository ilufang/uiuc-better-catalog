# Improved Course Explorer for UIUC

**A responsive and intuitive desktop course explorer & calendar planner, in Material Design, made with Electron and Polymer.**

**Download for Windows/Linux/MacOS: [See release page](uiuc-better-catalog/releases)**

*Notice: The current repository is the version as of the end of the ENG198 course. Not fully tested & optimized. Expect bugs. We will continue to update this project and will release a (relatively) stable version by 1/20/2017*

## Features

* Full-featured course explorer, automatically synchronized with officiall `courses.illinois.edu` data
* Works offline: instantly open any course without webpage loading
* Quick search: real-time search with course name or code (Typing `math231` instantly bring up the course)
* Bookmarks: record your courses, section types or even CRNs for calendar planner
* Worksheet: plan the calendar intuitively: sections are horizontally aligned to their time to see agenda and conflicts.

## Screenshots

![Screenshot of explorer](https://ilufang.github.io/uiuc-better-catalog/images/screenshot-1)

![Screenshot of worksheet](https://ilufang.github.io/uiuc-better-catalog/images/screenshot-2)

## Build/run from source

This project runs on [electron](http://electron.atom.io).

1. Install [node.js](https://nodejs.org)
2. Install [electron](http://electron.atom.io) using npm: `npm install -g electron-prebuilt` (you will need root to do this)
3. Install [bower](https://bower.io) for the dependency manager using npm: `npm install -g bower`
4. Clone the repo or download zip. `cd` into the root of the repo
5. Install bower dependencies: `bower install`
6. Run: `electron ./`
