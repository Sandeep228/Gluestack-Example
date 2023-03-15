module.exports = () => [
  {
    "path": "/backend/savemsgs/(.*)",
    "proxy": {
      "instance": "savemsgs:3500",
      "path": "/v1.0/invoke/savemsgs/method/$1"
    }
  }
];
