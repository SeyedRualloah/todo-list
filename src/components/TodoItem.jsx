import { useState } from "react";

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.title);

  const save = () => {
    if (!value.trim()) return;

    onEdit(todo.id, value);
    setEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {editing ? (
        <input
          className="edit-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <span
          className={
            todo.completed ? "completed" : ""
          }
        >
          {todo.title}
        </span>
      )}

      <div className="actions">
        {editing ? (
          <button onClick={save}>
            ذخیره
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
          >
            تغیر
          </button>
        )}

        <button
          className="danger"
          onClick={() => onDelete(todo.id)}
        >
          حذف
        </button>
      </div>
    </div>
  );
}