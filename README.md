# Improved Course Explorer for UIUC

**A responsive and intuitive desktop course explorer & calendar planner, in Material Design, made with Electron and Polymer.**

**Download for Windows/Linux/MacOS: [See release page](https://github.com/ilufang/uiuc-better-catalog/releases)**

*Notice: We are currently preparing for the next release. Bleeding edge features are published in `dev` branch while somewhat stablized features are merged into `master`. The latest release is out-of-date. Please run from source if you want the latest features. A new release will be created soon.*

## Updated Launch Instructions

As I have been unable to devote time into this, Polymer, webComponents and electron features are starting to get outdated and causing issues. It seems that the latest electron has issues with some features, as well as breaks webviews. Follow these steps to get around these issues:

1. Download the latest release from the github releases page
2. Replace the `res/app` folder with a clone of the dev branch. On mac you you need to right-click the app and click show package contents to reveal files.
3. Launch using the provided electron binary

The manual launch instructions below will likely NOT work. RegBot is broken due to chromium issues with webviews.

## Features

* Full-featured course explorer, automatically synchronized with officiall `courses.illinois.edu` data
* Works offline: instantly open any course without webpage loading
* Quick search: real-time search with course name or code (Typing `math231` instantly bring up the course)
* Bookmarks: record your courses, section types or even CRNs for calendar planner
* Worksheet: plan the calendar intuitively: sections are horizontally aligned to their time to see agenda and conflicts.

## Screenshots

![Screenshot of explorer](https://ilufang.github.io/uiuc-better-catalog/images/screenshot-1.png)

![Screenshot of worksheet](https://ilufang.github.io/uiuc-better-catalog/images/screenshot-2.png)

## Build/run from source

This project runs on [electron](http://electron.atom.io).

1. Install [node.js](https://nodejs.org)
2. Install [electron](http://electron.atom.io) using npm: `npm install -g electron-prebuilt`
3. Install [bower](https://bower.io) for the dependency manager using npm: `npm install -g bower`
4. Clone the repo or download zip. `cd` into the root of the repo
5. Install bower dependencies: `bower install`
6. Run: `electron ./`
