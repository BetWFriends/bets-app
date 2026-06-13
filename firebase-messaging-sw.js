importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA8ZRCAZl0HfJmb4xvJhzV9oVt1EqUxdv0",
  authDomain: "bets-with-friends-856a3.firebaseapp.com",
  projectId: "bets-with-friends-856a3",
  storageBucket: "bets-with-friends-856a3.firebasestorage.app",
  messagingSenderId: "21214976970",
  appId: "1:21214976970:web:5051337a59e85c4ae94d33",
  measurementId: "G-D94VZ93B29"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Bets';
  const body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, {
    body,
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
  });
});
