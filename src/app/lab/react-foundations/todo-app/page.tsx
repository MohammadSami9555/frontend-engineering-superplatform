"use client";

import { useEffect, useState } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

export default function TodoAppLab() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lab-todos");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Save tasks automatically
  useEffect(() => {
    localStorage.setItem("lab-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="relative mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-zinc-900/80 p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#4fea47]/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="flex gap-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a productive task..."
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg outline-none focus:border-[#4fea47]/50"
          />

          <button
            onClick={addTodo}
            className="rounded-2xl bg-[#4fea47] px-8 py-4 font-bold text-black shadow-lg shadow-[#4fea47]/30 transition-all duration-300 hover:scale-105"
          >
            Add
          </button>
        </div>

        <div className="mt-6 flex justify-between text-sm text-zinc-400">
          <span>Total: {todos.length}</span>
          <span>Completed: {completedCount}</span>
        </div>

        <div className="mt-3 h-2 w-full rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-[#4fea47] transition-all duration-500"
            style={{
              width: `${todos.length ? (completedCount / todos.length) * 100 : 0}%`,
            }}
          />
        </div>

        <div className="mt-8 space-y-4">
          {todos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-8 text-center text-zinc-500">
              No tasks yet. Add your first productive task 🚀
            </div>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                    className="h-5 w-5 accent-[#4fea47]"
                  />

                  <span
                    className={`text-lg ${
                      todo.completed
                        ? "line-through text-zinc-500"
                        : "text-white"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>

                <button
                  onClick={() => deleteTodo(index)}
                  className="rounded-xl bg-red-500/20 px-5 py-2 font-semibold text-red-400 hover:bg-red-500/30 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}