module.exports = (req, res, _next) => {
  // do something with the headers & body
  console.log({ headers: req.headers, body: req.body.input });
  console.log("hello");
  //logic

  return res.status(200).json({ status: "qwe", message: 555 });
};
