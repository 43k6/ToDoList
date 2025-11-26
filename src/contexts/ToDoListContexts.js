import { createContext } from "react";

export let ToDoListContexts = createContext({
  title: "",
  description: "",
  isDone: false,
  onDelete: null,
  onEdit: null,
  onToggleTaskDone: null,
});
