# FIREGRAM π₯
Share your amazing photos π·

Made using
- React π
- Firebase π₯
- Framer Motion πΆββοΈ

Tutorial from <a href="https://youtu.be/vUe91uOx7R0">TheNetNinja</a> π±βπ€



## SETUP π·ββοΈ

π₯ setup firebase  (cloud)

- head over to <a href="https://console.firebase.google.com/">firebaseΒ console</a> π
- create a new project named `firegram`
- initialize `firestore` & `storage`
- copy the firebase config

π₯ setup firebase (locally)

- create a new file on `./src/firebase/` named `firebaseConfig.js`

  ```shell
  $ touch ./src/firebase/firebaseConfig.js
  ```

- the directory should looks like this

  ```
  firebase/
      config.js
      firebaseConfig.js
  ```

- paste the config

  ```javascript
  const firebaseConfig = {
      // your firebase config
  }
  
  export default firebaseConfig;
  ```

π install dependencies

```bash
$ npm install
## or yarn
$ yarn install
```

πΈ start server

```bash
$ npm start
## or yarn
$ yarn start
```

