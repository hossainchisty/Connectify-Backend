const express = require('express');

const router = express.Router();

const userRouters = require('../module/user/user.route');
const authRouters = require('../module/auth/auth.route');
const orderRouters = require('../module/order/order.route');
const paymentRouters = require('../module/payment/payment.route');

const moduleRoutes = [
  { path: '/auth', route: authRouters },
  { path: '/users', route: userRouters },
  { path: '/order', route: orderRouters },
  { path: '/payment', route: paymentRouters },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

module.exports = applicationRoutes = router;
