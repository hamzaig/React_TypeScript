class Todo {
  item: string;
  id: string;

  constructor(item: string) {
    this.item = item;
    this.id = new Date().toISOString();
  }
}

export default Todo;
