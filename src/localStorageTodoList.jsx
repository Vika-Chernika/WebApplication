export default class LocalStorageTodosList {
  
  getAllTodos() {
    const todos = JSON.parse(window.localStorage.getItem('todos'));
    return Promise.resolve(todos || []);
  }

  saveAllTodos(todos) {
    try {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  }
}
