# GalaxyTradFrontend
This is a simple web frontend implemented in React and Redux, and it's used for resolve a simple calculation problem.


## Getting Started
This application is created by create-react-app, if you haven't install it, you can install now(not required). (Notice that make sure have installed a recent version of [Node.js](https://nodejs.org/en/))
``` npm install -g create-react-app ```

Now, we can start to set up the project.

### Set up frontend
First, get the copy of this project, and install dependency packages:
```bash
git https://github.com/xyliu7/GalaxyTradeFrontend.git
npm install
```

### Build frontend
```bash
cd 'projectPath'
npm run build
```
After build, you will get a new folder "build" in your project.

### Set up server
For server's setup, refer to the [GalaxyTradeServer](https://github.com/xyliu7/GalaxyTradeServer), then, copy "build" folder from frontend project to the directory of "public" of server project.

### Run locally
```bash
cd 'projectPath'
nodemon
```
Now, you can open your browser and access ``` http://localhost:3000/ ```
