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

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), value: input }]);
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addTodo}>Add</button>

      <ul style={{ listStylePosition: "inside", padding: 0 }}>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
