module.exports = () => [
  {
    "path": "/backend/cart/(.*)",
    "proxy": {
      "instance": "cart:3500",
      "path": "/v1.0/invoke/cart/method/$1"
    }
  }
];
