# Airbnb Experience

This project is a React application that simulates an Airbnb experience. It is built using Create React App and includes various components to display different parts of the application.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project dependencies, run:

```sh
npm install
```
Available Scripts
In the project directory, you can run:
```sh
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
```sh
npm run build
```
# Project Structure
The project structure is as follows:
```arduino
.gitignore
package.json
public/
    images/
    index.html
    manifest.json
    robots.txt
README.md
src/
    App.css
    App.js
    App.test.js
    components/
        Card.js
        Hero.js
        Navbar.js
    data.js
    index.css
    index.js
    reportWebVitals.js
    setupTests.js
```
- public/: Contains the static assets and the HTML template.
- src/: Contains the React components, styles, and other source files.
    -components/: Contains the individual React components like Card, Hero, and Navbar.
    - App.js: The main component that renders the application.
    - index.js: The entry point of the React application.
    - data.js: Contains the data used in the application.
    - reportWebVitals.js: Used for measuring performance.
    - setupTests.js: Used for setting up tests.

# Dependencies
The project uses the following dependencies:

- react: ^18.3.1
- react-dom: ^18.3.1
- react-scripts: 5.0.1
- @testing-library/jest-dom: ^5.17.0
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- web-vitals: ^2.1.4

Usage
To start the development server, run:

```sh
npm start
```
