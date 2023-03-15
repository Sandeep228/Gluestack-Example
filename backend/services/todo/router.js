module.exports = () => [
  {
    "path": "/backend/todo/(.*)",
    "proxy": {
      "instance": "todo:3500",
      "path": "/v1.0/invoke/todo/method/$1"
    }
  }
];
