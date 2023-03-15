class Mutations {
  public insert_todos_one = `mutation($item:String){
    insert_todos_one(object:{item:$item}){
        id
        item
    }
  }`;
}

export default new Mutations();
