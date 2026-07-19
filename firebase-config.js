// Firebase compat configuration (used by the HTML pages via compat scripts)
var firebaseConfig = {
  apiKey: "AIzaSyB2K76uCWdOh8274h7vQXebyoX7fRWQNlE",
  authDomain: "rungchuongvang-46bbf.firebaseapp.com",
  databaseURL: "https://rungchuongvang-46bbf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rungchuongvang-46bbf",
  storageBucket: "rungchuongvang-46bbf.firebasestorage.app",
  messagingSenderId: "67321859556",
  appId: "1:67321859556:web:28e2b5a10040d6baea8bf1"
};

if (typeof firebase !== 'undefined' && firebase && firebase.initializeApp) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (e) {
    // ignore if already initialized
  }
}

// expose database reference used across pages
var db = (typeof firebase !== 'undefined' && firebase.database) ? firebase.database() : null;