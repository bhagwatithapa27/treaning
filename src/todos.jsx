function App() {
  const todos = [
    { id: 1, value: "Go to Home" },
    { id: 2, value: "Go to College" },
    { id: 3, value: "nita" },
    { id: 1, value: "rita" },
    { id: 2, value: "gita" },
    { id: 3, value: "sita" },
  ];

  return (
    <>
      <ul>
        {todos.map((todoItem, index) => {
          return <li key={todoItem.id}>{todoItem.value}</li>;
        })}
      </ul>
    </>
  );
}
