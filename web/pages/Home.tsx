import React, { useEffect, useState } from "react";
import { client } from "../config/apolloConfig";
import { gql } from "@apollo/client";

const home = () => {
  const [itemName, setItemName] = useState("");
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    handleDisplayTodoItems();
  }, []);

  const handleDisplayTodoItems = () => {
    client
      .query({
        query: gql`
          query MyQuery {
            todos(where: { is_completed: { _eq: false } }) {
              id
              item
              is_completed
            }
          }
        `,
      })
      .then((res) => {
        console.log(res.data.todos);
        setItemArray(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    client
      .mutate({
        mutation: gql`
          mutation MyMutation($item: String) {
            insert_todos_one(object: { item: $item }) {
              id
              item
              is_completed
            }
          }
        `,
        variables: { item: itemName },
      })
      .then((res: any) => {
        console.log(res.data.insert_todos_one);

        setItemArray([...itemArray, res.data.insert_todos_one]);
        setItemName("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteItem = (index: number, id: number) => {
    console.log(id);
    client
      .mutate({
        mutation: gql`
          mutation MyMutation($itemId: Int!) {
            delete_todos_by_pk(id: $itemId) {
              id
              item
              is_completed
            }
          }
        `,
        variables: { itemId: id },
      })
      .then((res) => {
        console.log("deleted");
        console.log(res);
        setItemArray(
          itemArray.filter((data, indexItem) => indexItem !== index)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCompleteItem = (index: number, id: number) => {
    client
      .mutate({
        mutation: gql`
          mutation MyMutation($id: Int!, $is_completed: Boolean!) {
            update_todos(
              where: { id: { _eq: $id } }
              _set: { is_completed: $is_completed }
            ) {
              returning {
                id
                item
                is_completed
              }
            }
          }
        `,
        variables: { id: id, is_completed: true },
      })
      .then((res) => {
        console.log(res.data.update_todos.returning);
        setItemArray(itemArray.filter((item, indexx) => index !== indexx));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleAddTodo} method="get">
        <input
          type="text"
          placeholder="item"
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {itemArray.map((item: any, index: number) => {
          return (
            <div key={item.id}>
              <p key={item.id}>{item.item}</p>
              <button
                key={item.item}
                onClick={() => handleDeleteItem(index, item.id)}
              >
                Del
              </button>
              <button
                key={index}
                onClick={() => handleCompleteItem(index, item.id)}
              >
                complete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default home;
