import TodoList from "./components/TodoList";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Verdana, sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "Greycliff CF, sans-serif" },
      }}
    >
      <div className="App">
        <TodoList />
      </div>
    </MantineProvider>
  );
}

export default App;
