# Linx App

## Basic Setup
These steps are required before further steps.

### Machine Requirements
You need to have installed:  
- [Node.js](https://nodejs.org/en/)  
- [YARN Package manager](https://classic.yarnpkg.com/)
- Cloned or downloaded version of this project

To prepare Application for further steps after repository clone you need run next commands:
```sh
cd <PROJECT_DIR>
yarn install
```

## Development Start
To run Application in development mode you need to run `yart run start`. As result, you will get fully completed local development environment.
```sh
yarn run start
```

## Build Production
To build optimized production version you need to run `yarn run build`, after completion, you will have bundled production code that you can use to deploy it to your hosting. You can take the result at the `~/dist` folder
```sh
yarn run build
```

## Useful Commands
`yarn run test` -
This command help to check Project for errors and warnings.

`yarn run upgrade` -
This command opens a fullscreen terminal interface where you can see any out of date packages used by your application, their status compared to the latest versions available on the remote registry, and select packages to upgrade.

## Environment Settings

In the project we use environment variables.

Environment variables are useful when:

* Values are different across developer machines.
* Values change frequently and are highly dynamic.
* Environment variables can be changed easily - especially when running in CI.

In the package.json file, you can customize the commands that will run files of different environments depending on your needs.
![Git Hooks Error](/src/assets/img/logo.jpg)

## License
Recruitment App is [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE).
