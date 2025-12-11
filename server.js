// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Unique identifier for second site
const SITE_ID = 'rooz';

// Different socket path
const socketPath = `/tmp/${SITE_ID}-nodejs.sock`;

// ریشه‌ی پروژه روی سرور
const ROOT_DIR = __dirname;

// سرو کردن فایل‌های استاتیک (عکس‌ها، css، js و ...)
app.use('/public', express.static(path.join(ROOT_DIR, 'public')));
app.use('/app', express.static(path.join(ROOT_DIR, 'app')));
app.use('/src', express.static(path.join(ROOT_DIR, 'src')));

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
