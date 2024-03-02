import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  // formにあるinput要素が変更したとき
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // input要素に変更した値を入れる
    setInputValue(e.target.value);
  };
  // formをsubmitしたとき
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 型がTodoであるオブジェクトを作成して、新しいTodoリストの要素を作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };
    // 新しく作成したTodoリストを、既存のTodoリストに追加する
    setTodos([newTodo, ...todos]);
  };
  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // チェックボックスをtoggleさせる
  const handleChecked = (id: number, checked: boolean) => {
    // todosの配列にmap関数で処理をする
    // チェックされたidと一致した配列の要素のみtoggleさせ、Todoリストを更新する
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  // 消すボタンを押したリストのidと一致するTodoリストの配列の要素を削除して更新
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div>
        <h2>Todoリスト</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            className="inputText"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={() => handleChecked(todo.id, todo.checked)}
                checked={todo.checked}
              />
              <button onClick={() => handleDelete(todo.id)}>消す</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
