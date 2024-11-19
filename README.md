# TechnicaL Assessment - Mobile Shop

## Description
Mini web app for mobile shopping, consist of a product list page, and a product details page. User is able to search products, check details, select options and add to the cart. Data come from an API provided.

## Live Preview
The site is deployed on the following link:
[Mobile Shop](https://mobile-shop-nine.vercel.app/)

## Tech Stack
- React
- React Router
- [Tailwind](https://tailwindcss.com/docs/skew)
- [Daysi UI](https://daisyui.com/)

## Configure ENV File
Before start project, it needs to configure the API URL, since the URL is not delivered directly on the code. 

This makes it easier to configure important parameters to run the application, as well as avoiding publishing credentials or API KEYS in the repository.

Set "API URL" environment variable, through creating an .env file on the root project.
 
## How to execute

## 1. Using Dev Containers

The easiest way to run this project is using dev containers. If you are using VS Code, and after clone the repository, use your command palette to search the option "Reopen in Container".
![Dev Container](/public/docs/devcontainer.png)

The JSON file contains the configuration of a Docker image with Node and PNPM installed. Also, after created the container, it runs "pnpm install command", after all this happens stars automatically the project using tasks features, executing "pnpm run dev-host". And finally open the project on the default browser.

### Requirements
- Docker Desktop
- WSL(If use Windows)

## 2. Via PNPM
- Install dependencies using `pnpm install` or `npm install`
- To run project use `pnpm run dev`

### Requirements
- Node 18
- PNPM(Optional, faster alternative to NPM)

# Testing
Playwright is used for testing the app. It is a powerful tool that allows you to automate end-to-end testing of web applications. It's necessary to install the Playwright Extension for VS Code to install dependencies, because it is posible to launch Browsers a see the execution of the tests.

Check the [Playwright Documentation](https://playwright.dev/docs/intro) for more information.

## How to execute
- Install dependencies using `pnpm install` or `npm install`
- To run tests use `pnpm run test`

### Requirements
- Node 18
- PNPM(Optional, faster alternative to NPM)
- Playwright