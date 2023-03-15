module.exports = async (req, res, _next) => {
  // do something with the headers & body
  const axios = require("axios");
  console.log({ headers: req.headers, body: req.body.input.input });
  const { item } = req.body.input.input;
  console.log("item", item);
  if (!item) {
    console.log(item, "empty");
    return res
      .status(200)
      .json({ status: "error", message: "field cannot be empty" });
  }
  console.log("sdjnjs");
  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret": "admin-secret",
  };
  const query = `mutation($item:String){
    insert_todos_one(object:{item:$item}){
        id
        item
    }
  }`;

  const variables = { item: item };
  await axios({
    url: "http://graphql:8080/v1/graphql",
    method: "POST",
    headers: headers,
    data: {
      query,
      variables,
    },
  });

  return res
    .status(200)
    .json({ status: "success", message: "inserted successfully" });
};
