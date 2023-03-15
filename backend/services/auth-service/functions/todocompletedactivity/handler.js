module.exports = async (req, res, _next) => {
  const axios = require("axios");
  // do something with the headers & body
  console.log({ headers: req.headers, body: req.body });
  console.log("update");
  console.log("old", req.body.data.old);
  console.log("new", req.body.data.new);
  const { id, is_completed } = req.body.data.new;
  if (is_completed) {
    const headers = {
      "content-type": "application/json",
      "x-hasura-admin-secret": "admin-secret",
    };
    const query = `mutation MyMutation($itemId:Int!) {
      insert_todos_completed_activity_one(object: {item_id: $itemId}){
        id
      }
    }`;

    const variables = { itemId: id };
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
      .json({ status: "success", message: "todo activity saved" });
  }
};
