// // server.js
// const express = require('express');
// const path = require('path');
// const fs = require('fs');
//
// const app = express();
//
// // Unique identifier for second site
// const SITE_ID = 'rooz';
//
// // Different socket path
// const socketPath = `/tmp/${SITE_ID}-nodejs.sock`;
//
// // ریشه‌ی پروژه روی سرور
// const ROOT_DIR = __dirname;
//
// // سرو کردن فایل‌های استاتیک (عکس‌ها، css، js و ...)
// app.use('/public', express.static(path.join(ROOT_DIR, 'public')));
// app.use('/app', express.static(path.join(ROOT_DIR, 'app')));
// app.use('/src', express.static(path.join(ROOT_DIR, 'src')));
//
// app.use((req, res) => {
//   res.sendFile(path.join(ROOT_DIR, 'pages', 'home.html'));
// });
//
//
// // استارت سرور
// if (fs.existsSync(socketPath)) {
//   fs.unlinkSync(socketPath);
// }
//
// app.listen(socketPath, () => {
//   console.log(`Second site listening on: ${socketPath}`);
//   fs.chmodSync(socketPath, '777');
// });
// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Unique identifier for second site
const SITE_ID = 'rooz';

// Different socket path
const socketPath = `/tmp/${SITE_ID}-nodejs.sock`;

const ROOT_DIR = __dirname;

app.use('/public', express.static(path.join(ROOT_DIR, 'public')));
app.use('/app', express.static(path.join(ROOT_DIR, 'app')));
app.use('/src', express.static(path.join(ROOT_DIR, 'src')));

// ✅ Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'home.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'PLP.html'));
});

app.get('/ELLA', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'PLP-Brand.html'));
});

app.get('/Basket', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'Basket.html'));
});

app.get('/Basketf', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'Basket-F.html'));
});

app.get('/Delivery', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'Delivery-info.html'));
});

app.get('/favoritef', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'favorite-f.html'));
});

app.get('/favorite', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'favorite.html'));
});

app.get('/forgetpass', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'forgetpass-phone.html'));
});

app.get('/forgetpass2', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'forgetpass-mob.html'));
});

app.get('/product-detail', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'PDP.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'signup.html'));
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'add.html'));
});

app.get('/wellcome', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'are-you-seller.html'));
});

app.get('/seller-signup', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages/seller', 'ssignup.html'));
});

app.get('/seller-dashboard', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages/seller', 'sdashboard.html'));
});

app.get('/seller-panel', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages/seller', 'spanel.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'pages', 'home.html'));
});


// استارت سرور
if (fs.existsSync(socketPath)) {
  fs.unlinkSync(socketPath);
}

app.listen(socketPath, () => {
  console.log(`Second site listening on: ${socketPath}`);
  fs.chmodSync(socketPath, '777');
});
