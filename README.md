# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docker

```
docker run --name rtl-tdd-todos -itd -p 3000:3000 node:16.14.0-bullseye
docker commit rtl-tdd-todos tjdudtjs1101/ksa:rtl-tdd-todos
docker push tjdudtjs1101/ksa:rtl-tdd-todos
docker pull tjdudtjs1101/ksa:rtl-tdd-todos
docker run --name rtl-tdd-todos -itd -p 3000:3000 tjdudtjs1101/ksa:rtl-tdd-todos
```

## Docker delivery

```
docker container stp rtl-tdd-todos
docker pull tjdudtjs1101/ksa:rtl-tdd-todos
docker run --name rtl-tdd-todos --rm -itd -p 3000:3000 tjdudtjs1101/ksa:rtl-tdd-todos
```

## Git

```
git init
git config --global user.name 'YeongSeon1'
git config --global user.email 'tjdudtjs1101@gmail.com'
git branch -m main  //master 브랜치를 main으로 이름 변경
```

## Git remote config

```
git remote add origin (Github repository HTTPS URL) //깃에 원격 연결을 하는데 그 이름을 origin

git remote add origin https://github.com/YeongSeon1/rtl-tdd-todos.git
git branch -M main
git push -u origin main

자격증명관리자에 등록해서 push할 때 계정을 입력 안 해도 된다.
```

## Available Scripts

In the project directory, you can run:

### `npx create-react-app rtl-tdd-todos`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
