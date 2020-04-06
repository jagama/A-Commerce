This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## E-commerce        

![Image description](/public/commerce.png)


### Dependencies       

    "antd": "^3.25.2",          
    "bootstrap": "^4.3.1",                    
    "react-bootstrap": "^1.0.0-beta.16",            
    "react-lazyload": "^2.6.5",         
    "react-router-dom": "^5.1.2"           
        

## Description      

In the `App` I have two key components: `Navigation` and `Body`.
`Navigation` is a fixed component, while `Body` will be a dynamic. The dynamism of the page will be managed by `BrowserRouter`. In `Body` I pass as props, `url` and `count` which are initialized in my `useState`.
In `Navigation` I pass as props, always `url` and `count`, which will be used in the `onClick()` function to change my `endUrl` which will be passed to `Body` to render the contents.
In `Body`, I receive props and, depending on the passed `endUrl`, I make a specific call related to my `onClick()` in `Navigation` Component. At this point in the `getContent()` function in `Body` component I get the data, and I get mapped through, generating a `Card` for each data.
In `Card` I find a `Modale` where the props relating to the selected product are passed.     

## TODO
       
Replace 'onClick()' with more safe and multi use eventListner.       
Replace using props passages with useContext() or Redux.        
CheckOut component, link on "cart item" to check my selected item and confirm to buy it. (buy it, not my task).           
Add SessionToken obtained after Login page (not my task).



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
