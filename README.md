# E2E_Cypress
Entrega: E2E UI Automation with Cypress Practice (Cypress)

   ```bash
This README provides instructions on how to execute an npm project with Cypress in Visual Studio Code.
   ```
## Preconditions
Before you begin, ensure you have the following installed:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/) (make sure you have already run `npm init` or have `node_modules` folder or `package.json` file in the root of your project to ensure cypress is installed in the correct directory)

## Installation
1. Clone the repository or initialize a new npm project:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install Cypress as a dev dependency:
   ```bash
   npm install cypress --save-dev
   ```

## Configuration
1. Make sure the `package.json` file `scripts` section looks like this:
   ```json
   "scripts": {
     "cypress:open": "cypress open"
   }
   ```

## Usage
1. To open Cypress in the interactive test runner, run:
   ```bash
   npm run cypress:open
   ```
2. To be able to see how the video of the tests execution and the screenshot are created:
   ```bash
   npx cypress run
   ```




