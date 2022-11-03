importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCc9xWmBq8bx7pJbulmyOSXcUNI7xDlRUI",
  authDomain: "voubedelivery.firebaseapp.com",
  projectId: "voubedelivery",
  storageBucket: "voubedelivery.appspot.com",
  messagingSenderId: "528852790709",
  appId: "1:528852790709:web:130f60a3248d7d69bc3dfc",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});