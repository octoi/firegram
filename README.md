# FIREGRAM 🔥
Share your amazing photos 📷

Made using
- React 🌟
- Firebase 🔥
- Framer Motion 🚶‍♀️

Tutorial from <a href="https://youtu.be/vUe91uOx7R0">TheNetNinja</a> 🐱‍👤



## SETUP 👷‍♂️

🔥 setup firebase  (cloud)

- head over to <a href="https://console.firebase.google.com/">firebase console</a> 🔗
- create a new project named `firegram`
- initialize `firestore` & `storage`
- copy the firebase config

🔥 setup firebase (locally)

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

📂 install dependencies

```bash
$ npm install
## or yarn
$ yarn install
```

🕸 start server

```bash
$ npm start
## or yarn
$ yarn start
```

