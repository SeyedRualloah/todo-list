import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onDelete,
  onToggle,
  onEdit,
}) {
  if (todos.length === 0) {
    return (
      <p className="empty">
        هنوز تسکی ثبت نشده ...
      </p>
    );
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </>
  );
}