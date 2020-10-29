const express = require('express');

const proxy = express();

const port = 3004;

const { createProxyMiddleware } = require('http-proxy-middleware');

// booking service API
// GET and POST Route
proxy.use('/api/restaurant/:restaurantId/availability', createProxyMiddleware({ target: 'http://54.193.87.188/', changeOrigin: true }));

// reviews service API
// POST Route
proxy.use('/api/reviews/', createProxyMiddleware({ target: 'http://13.56.246.180/', changeOrigin: true }));
// GET Route
proxy.use('/api/reviews/:reviewId', createProxyMiddleware({ target: 'http://13.56.246.180/', changeOrigin: true }));

// photo gallery service
// GET Route
proxy.use('/api/galleries/:id', createProxyMiddleware({ target: 'http://54.151.37.67/', changeOrigin: true }));
// POST Route
proxy.use('/api/photos', createProxyMiddleware({ target: 'http://54.151.37.67/', changeOrigin: true }));

// people also viewed API
// GET Routes
proxy.use('/api/viewed/restaurants/:id/reviews', createProxyMiddleware({ target: 'http://13.57.35.231/', changeOrigin: true }));
proxy.use('/api/viewed/restaurants/:id', createProxyMiddleware({ target: 'http://13.57.35.231/', changeOrigin: true }));

proxy.use(express.static('client'))

proxy.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})