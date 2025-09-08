const todos = [
  { id: 1, task: "test 1", completed: false },
  { id: 2, task: "test 2", completed: true },
  { id: 3, task: "test 3", completed: false },
];

//Find
const todoById = (id) => todos.find((todo) => todo.id === id);

console.log("todoById: " + JSON.stringify(todoById(3)));

//Filter
const completedTodos = todos.filter((todo) => todo.completed);

console.log("completedTodos: " + JSON.stringify(completedTodos));

//Array forEach
todos.forEach((todo) => {
  todo.completed = true;
});

console.log("todos after forEach: " + JSON.stringify(todos));

//Array map
const mappedTodos = todos.map((todo) => {
  //return { id: todo.id, description: todo.task };
  return { ...todo, priority: "High" };
});

console.log("mappedTodos: " + JSON.stringify(mappedTodos));

//Promises
const promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Operation successful");
    //rejected("Operation failed.");
  }, 500);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
  });

//Async-await
async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();

    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

fetchDataAsync();
