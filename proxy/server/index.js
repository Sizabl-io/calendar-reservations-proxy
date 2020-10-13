const express = require('express');
const path = require('path');
// const cors = require('cors');
const PORT = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client')));

// --- MIDDLEWARE: http-proxy-middleware ---

// -- Gallery Section --
// app.use(
//   '/photos/:id',
//   createProxyMiddleware({
//     target: 'http://18.216.243.227/',
//     changeOrigin: true,
//   })
// );

// -- Booking Section--

app.use(
  '/api/calendar/:id',
  createProxyMiddleware({
    target: 'http://3.101.113.5:2050/',
    changeOrigin: true,
  })
);

// -- Review Section --
app.use(
  '/api/reviews/:id',
  createProxyMiddleware({
    target: `http://13.52.246.213/`,
    changeOrigin: true,
  })
);

// -- Similar Places --
app.use(
  '/getRestaurants',
  createProxyMiddleware({
    target: 'http://34.212.131.243/',
    changeOrigin: true,
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));